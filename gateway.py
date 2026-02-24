import os
import logging
import requests
import random
from typing import Optional, Dict, Any

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

BLACKCAT_BASE_URL = "https://api.blackcatpagamentos.online/api"


def _get_api_key() -> str:
    return os.environ.get("BLACKCAT_API_KEY", "")


def _get_headers() -> Dict[str, str]:
    api_key = _get_api_key()
    return {
        "Content-Type": "application/json",
        "X-API-Key": api_key,
        "Authorization": f"Bearer {api_key}",
    }


def generate_fake_email(nome: str) -> str:
    primeiro_nome = nome.split()[0].lower() if nome else "usuario"
    primeiro_nome = ''.join(c for c in primeiro_nome if c.isalpha())
    numeros = random.randint(100, 9999)
    dominio = random.choice(["@outlook.com", "@hotmail.com"])
    return f"{primeiro_nome}{numeros}{dominio}"


def generate_fake_phone() -> str:
    ddd = random.choice(["11", "21", "31", "41", "51", "61", "71", "81", "85", "19"])
    numero = random.randint(900000000, 999999999)
    return f"{ddd}{numero}"


def create_pix(
    customer_name: str,
    customer_cpf: str,
    amount_cents: int = 14794,
    product_title: str = "Curso do zero a 1m",
) -> Dict[str, Any]:
    try:
        clean_cpf = "".join(filter(str.isdigit, customer_cpf or ""))
        fake_email = generate_fake_email(customer_name)
        fake_phone = generate_fake_phone()

        logger.info(f"Criando PIX - Cliente: {customer_name}, Valor: {amount_cents} centavos")

        payload = {
            "amount": amount_cents,
            "currency": "BRL",
            "paymentMethod": "pix",
            "items": [
                {
                    "title": product_title,
                    "quantity": 1,
                    "tangible": False,
                }
            ],
            "customer": {
                "name": customer_name,
                "email": fake_email,
                "phone": fake_phone,
                "document": {
                    "number": clean_cpf,
                    "type": "cpf",
                },
            },
            "pix": {
                "expiresInDays": 2,
            },
            "metadata": f"Pagamento {product_title}",
            "externalRef": f"ORDER-{clean_cpf}-{random.randint(1000, 9999)}",
        }

        url = f"{BLACKCAT_BASE_URL}/sales/create-sale"
        response = requests.post(url, json=payload, headers=_get_headers(), timeout=30)
        logger.info(f"BlackCat Response: HTTP {response.status_code}")
        logger.info(f"BlackCat Body: {response.text[:1000]}")

        if response.status_code in (200, 201):
            data = response.json()

            if data.get("success"):
                core = data.get("data", {})
                payment_data = core.get("paymentData", {})

                pix_code = payment_data.get("copyPaste") or payment_data.get("qrCode") or ""
                tx_id = core.get("transactionId", "")

                logger.info(f"PIX criado - TX: {tx_id}")

                return {
                    "success": True,
                    "transaction_id": tx_id,
                    "pix_code": pix_code,
                    "qr_code_base64": payment_data.get("qrCodeBase64", ""),
                    "qr_code_url": payment_data.get("qrCodeUrl", ""),
                    "amount": amount_cents,
                    "status": core.get("status", "PENDING"),
                    "expires_at": payment_data.get("expiresAt", ""),
                    "invoice_url": core.get("invoiceUrl", ""),
                }
            else:
                error_msg = data.get("message") or data.get("error") or "Erro desconhecido"
                logger.error(f"BlackCat erro: {error_msg}")
                return {"success": False, "error": error_msg}

        logger.error(f"HTTP {response.status_code}: {response.text[:500]}")
        return {
            "success": False,
            "error": f"Erro HTTP {response.status_code}",
        }

    except requests.exceptions.RequestException as e:
        logger.error(f"Erro de requisição: {str(e)}")
        return {"success": False, "error": f"Erro de conexão: {str(e)}"}
    except Exception as e:
        logger.error(f"Erro inesperado: {str(e)}")
        return {"success": False, "error": f"Erro inesperado: {str(e)}"}


def check_status(transaction_id: str) -> Dict[str, Any]:
    try:
        url = f"{BLACKCAT_BASE_URL}/sales/{transaction_id}/status"
        response = requests.get(url, headers=_get_headers(), timeout=30)
        logger.info(f"Status Response HTTP {response.status_code}: {response.text[:500]}")

        if response.status_code == 200:
            data = response.json()

            if data.get("success"):
                core = data.get("data", {})
                return {
                    "success": True,
                    "transaction_id": transaction_id,
                    "status": core.get("status", "PENDING"),
                    "amount": core.get("amount"),
                    "paid_at": core.get("paidAt"),
                }
            else:
                return {"success": False, "error": data.get("message", "Erro desconhecido")}

        return {"success": False, "error": f"Erro HTTP {response.status_code}"}

    except Exception as e:
        logger.error(f"Erro: {str(e)}")
        return {"success": False, "error": str(e)}
