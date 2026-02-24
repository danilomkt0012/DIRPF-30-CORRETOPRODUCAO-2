var MENU_DATA = [
  { label: "Cidadão", icon: "person", children: [
    { label: "CPF", children: [
      { label: "Consulta", children: [
        { label: "Consultar Informações do CPF" },
        { label: "Consultar Situação do CPF" },
        { label: "Minhas Empresas e Negócios" }
      ]},
      { label: "Cartão do CPF", children: [
        { label: "Emitir Meu Cartão de CPF (2a via)" },
        { label: "Emitir Cartão de CPF (2a via) Sem Gov.br" }
      ]},
      { label: "Inscrição no CPF", children: [
        { label: "Inscrever no CPF" },
        { label: "Alterar Dados Cadastrais no CPF" }
      ]},
      { label: "Regularização", children: [
        { label: "Regularizar CPF - Pendência Cadastral" },
        { label: "Regularizar CPF - Pendência de Declaração" },
        { label: "Regularizar CPF Suspenso por Óbito" }
      ]}
    ]},
    { label: "Declaração de Imposto de Renda", children: [
      { label: "Entregar Declaração", children: [
        { label: "Meu Imposto de Renda (Extrato da DIRPF)" },
        { label: "Download do Programa IRPF" },
        { label: "Declaração Pré-Preenchida" }
      ]},
      { label: "Restituição", children: [
        { label: "Consultar Restituição do IRPF" },
        { label: "Consultar Lotes de Restituição" }
      ]},
      { label: "Carnê-Leão", children: [
        { label: "Acessar Carnê-Leão" }
      ]},
      { label: "GCAP - Ganhos de Capital", children: [
        { label: "Acessar GCAP" }
      ]}
    ]},
    { label: "Pagamentos e Parcelamentos", children: [
      { label: "Emitir DARF", children: [
        { label: "Sicalc - Emitir DARF" },
        { label: "Emitir DARF de Alteração Cadastral" }
      ]},
      { label: "Parcelamentos", children: [
        { label: "Parcelamento - Solicitar e Acompanhar" },
        { label: "Parcelamento Simplificado" }
      ]}
    ]},
    { label: "Patrimônio e Bens", children: [
      { label: "Declaração de Capitais Brasileiros no Exterior (CBE)" },
      { label: "e-Financeira" }
    ]},
    { label: "Processos Digitais", children: [
      { label: "Acompanhar Processos (e-Processo)" },
      { label: "Dossiê Digital de Atendimento" },
      { label: "Agendar Atendimento Presencial" }
    ]}
  ]},
  { label: "Negócios", icon: "business_center", children: [
    { label: "CNPJ", children: [
      { label: "Consultar CNPJ" },
      { label: "Emitir Comprovante de CNPJ" },
      { label: "Inscrever CNPJ" },
      { label: "Alterar Dados do CNPJ" },
      { label: "Baixar CNPJ" }
    ]},
    { label: "IRPJ / CSLL", children: [
      { label: "ECF - Escrituração Contábil Fiscal" },
      { label: "ECD - Escrituração Contábil Digital" },
      { label: "DCTF - Declaração de Débitos e Créditos" }
    ]},
    { label: "Contribuições", children: [
      { label: "EFD-Contribuições" },
      { label: "DCTF-Web" },
      { label: "PER/DCOMP Web" }
    ]},
    { label: "e-Social", children: [
      { label: "Acessar e-Social" },
      { label: "Consultar Qualificação Cadastral" }
    ]}
  ]},
  { label: "Simples Nacional", icon: "storefront", children: [
    { label: "Opção pelo Simples Nacional" },
    { label: "PGDAS-D - Programa Gerador do DAS" },
    { label: "DEFIS - Declaração de Informações" },
    { label: "Parcelamento Simples Nacional" },
    { label: "Consulta Optantes" },
    { label: "DTE-SN - Domicílio Tributário Eletrônico" }
  ]},
  { label: "MEI", icon: "store", children: [
    { label: "Formalizar MEI" },
    { label: "Emitir DAS-MEI" },
    { label: "DASN-SIMEI - Declaração Anual" },
    { label: "Alterar Dados do MEI" },
    { label: "Baixar MEI" },
    { label: "Consultar CNPJ do MEI" }
  ]},
  { label: "Comércio Exterior", icon: "directions_boat", children: [
    { label: "Importação", children: [
      { label: "Declaração de Importação" },
      { label: "Licenciamento de Importação" },
      { label: "Compras Internacionais (Remessa Conforme)" }
    ]},
    { label: "Exportação", children: [
      { label: "Declaração Única de Exportação" },
      { label: "Registro de Exportação" }
    ]},
    { label: "Portal Único Siscomex" },
    { label: "Habilitação RADAR" },
    { label: "Consultar NCM" }
  ]},
  { label: "Imóveis", icon: "home_work", children: [
    { label: "ITR - Imposto sobre a Propriedade Territorial Rural", children: [
      { label: "DITR - Declaração do ITR" },
      { label: "Emitir DARF do ITR" },
      { label: "CAFIR - Cadastro de Imóveis Rurais" }
    ]},
    { label: "ITBI - Imposto sobre Transmissão de Bens Imóveis" },
    { label: "DOI - Declaração sobre Operações Imobiliárias" }
  ]},
  { label: "Órgãos Públicos", icon: "account_balance", children: [
    { label: "e-Financeira" },
    { label: "DIRF - Declaração do Imposto de Renda Retido na Fonte" },
    { label: "EFD-Reinf" },
    { label: "DCTF" },
    { label: "Consultar Convênios" }
  ]},
  { label: "Conveniados e Parceiros", icon: "handshake", children: [
    { label: "Convênio ICMS/ISS" },
    { label: "Programa de Parcerias" },
    { label: "Entidades Conveniadas" },
    { label: "Certificação Digital" }
  ]},
  { label: "Certidões e Validações", icon: "assignment_turned_in", children: [
    { label: "Certidão de Regularidade Fiscal (CND/CPEND/CPN)" },
    { label: "Certidão Negativa de Débitos (CND)" },
    { label: "Validar Certidão" },
    { label: "Consultar Autenticidade de Documentos" }
  ]},
  { label: "Legislação e Jurisprudência", icon: "balance", children: [
    { label: "Normas da Receita Federal" },
    { label: "Soluções de Consulta" },
    { label: "Atos Declaratórios" },
    { label: "Ementas e Acórdãos do CARF" }
  ]},
  { label: "Leilões da Receita Federal", icon: "gavel", children: [
    { label: "Editais de Leilão" },
    { label: "Leilão Eletrônico" },
    { label: "Resultados de Leilões" }
  ]},
  { label: "Atendimento", icon: "forum", children: [
    { label: "Agendar Atendimento Presencial" },
    { label: "Chat RFB" },
    { label: "Fale Conosco" },
    { label: "Ouvidoria" },
    { label: "Unidades de Atendimento" },
    { label: "Perguntas Frequentes" }
  ]}
];

(function() {
  var showFuncMenu = false;
  var showSearch = false;
  var showSideMenu = false;
  var expandedMenus = {};
  var menuFilter = "";

  function toggleSubmenu(key) {
    expandedMenus[key] = !expandedMenus[key];
    renderSideMenuContent();
  }

  function filterMenu(items, filter) {
    if (!filter) return items;
    var lf = filter.toLowerCase();
    return items.reduce(function(acc, item) {
      if (item.label.toLowerCase().indexOf(lf) !== -1) {
        acc.push(item);
      } else if (item.children) {
        var filtered = filterMenu(item.children, filter);
        if (filtered.length > 0) {
          var copy = {};
          for (var k in item) copy[k] = item[k];
          copy.children = filtered;
          acc.push(copy);
        }
      }
      return acc;
    }, []);
  }

  function renderMenuItem(item, key, level) {
    var hasChildren = item.children && item.children.length > 0;
    var isExpanded = expandedMenus[key];
    var lf = menuFilter.toLowerCase();
    var matchesFilter = lf && item.label.toLowerCase().indexOf(lf) !== -1;

    var node = document.createElement("div");
    node.className = "side-menu-node";

    var btn = document.createElement("button");
    btn.className = "side-menu-item level-" + level + (matchesFilter ? " highlight" : "");
    if (hasChildren) {
      btn.setAttribute("aria-expanded", isExpanded ? "true" : "false");
    }
    btn.onclick = function() {
      if (hasChildren) toggleSubmenu(key);
    };

    if (item.icon && level === 0) {
      var iconSpan = document.createElement("span");
      iconSpan.className = "material-icons-round side-menu-icon";
      iconSpan.textContent = item.icon;
      btn.appendChild(iconSpan);
    }

    var labelSpan = document.createElement("span");
    labelSpan.className = "side-menu-label";
    labelSpan.textContent = item.label;
    btn.appendChild(labelSpan);

    if (hasChildren) {
      var arrowSpan = document.createElement("span");
      arrowSpan.className = "material-icons-round side-menu-arrow";
      if (isExpanded) arrowSpan.style.transform = "rotate(180deg)";
      arrowSpan.textContent = "expand_more";
      btn.appendChild(arrowSpan);
    }

    node.appendChild(btn);

    if (hasChildren && isExpanded) {
      var childDiv = document.createElement("div");
      childDiv.className = "side-menu-children";
      item.children.forEach(function(child, i) {
        childDiv.appendChild(renderMenuItem(child, key + "-" + i, level + 1));
      });
      node.appendChild(childDiv);
    }

    return node;
  }

  function renderSideMenuContent() {
    var content = document.getElementById("side-menu-content");
    if (!content) return;
    content.innerHTML = "";
    var filtered = filterMenu(MENU_DATA, menuFilter);
    filtered.forEach(function(item, i) {
      content.appendChild(renderMenuItem(item, "m" + i, 0));
    });
  }

  function updateHeaderState() {
    var funcPanel = document.getElementById("rfb-func-panel");
    var headerBottom = document.getElementById("rfb-header-bottom");
    var searchRow = document.getElementById("rfb-search-row");
    var overlay = document.getElementById("side-menu-overlay");
    var sideMenu = document.getElementById("side-menu");
    var funcBtn = document.getElementById("rfb-func-btn");
    var searchBtn = document.getElementById("rfb-search-btn");

    if (funcPanel) funcPanel.style.display = showFuncMenu ? "block" : "none";
    if (headerBottom) headerBottom.style.display = showFuncMenu ? "none" : "flex";
    if (searchRow) searchRow.style.display = showSearch ? "block" : "none";

    if (overlay) overlay.style.display = showSideMenu ? "block" : "none";
    if (sideMenu) {
      if (showSideMenu) {
        sideMenu.classList.add("open");
      } else {
        sideMenu.classList.remove("open");
      }
    }

    if (funcBtn) {
      funcBtn.className = "header-icon-btn" + (showFuncMenu ? " active" : "");
    }
    if (searchBtn) {
      searchBtn.className = "header-icon-btn" + (showSearch ? " active" : "");
    }

    if (showSearch) {
      var searchInput = document.querySelector(".header-search-input-wrap input");
      if (searchInput) searchInput.focus();
    }
  }

  window.rfbHeaderInit = function(displayFirstName) {
    displayFirstName = displayFirstName || "Entrar";

    var funcBtn = document.getElementById("rfb-func-btn");
    var searchBtn = document.getElementById("rfb-search-btn");
    var menuBtn = document.getElementById("rfb-menu-btn");
    var searchCloseBtn = document.getElementById("rfb-search-close");
    var overlayEl = document.getElementById("side-menu-overlay");
    var sideMenuCloseBtn = document.getElementById("side-menu-close-btn");
    var filterInput = document.getElementById("side-menu-filter-input");
    var filterClearBtn = document.getElementById("side-menu-filter-clear");
    var signInNameEl = document.getElementById("rfb-sign-in-name");

    if (signInNameEl) signInNameEl.textContent = displayFirstName;

    if (funcBtn) {
      funcBtn.onclick = function() {
        showFuncMenu = !showFuncMenu;
        showSearch = false;
        updateHeaderState();
      };
    }

    if (searchBtn) {
      searchBtn.onclick = function() {
        showSearch = !showSearch;
        showFuncMenu = false;
        updateHeaderState();
      };
    }

    if (menuBtn) {
      menuBtn.onclick = function() {
        showSideMenu = !showSideMenu;
        showFuncMenu = false;
        showSearch = false;
        updateHeaderState();
        if (showSideMenu) renderSideMenuContent();
      };
    }

    if (searchCloseBtn) {
      searchCloseBtn.onclick = function() {
        showSearch = false;
        updateHeaderState();
      };
    }

    if (overlayEl) {
      overlayEl.onclick = function() {
        showSideMenu = false;
        updateHeaderState();
      };
    }

    if (sideMenuCloseBtn) {
      sideMenuCloseBtn.onclick = function() {
        showSideMenu = false;
        updateHeaderState();
      };
    }

    if (filterInput) {
      filterInput.oninput = function(e) {
        menuFilter = e.target.value;
        renderSideMenuContent();
      };
    }

    if (filterClearBtn) {
      filterClearBtn.onclick = function() {
        menuFilter = "";
        if (filterInput) filterInput.value = "";
        renderSideMenuContent();
      };
    }

    document.addEventListener("mousedown", function(e) {
      var funcRef = document.getElementById("rfb-func-wrapper");
      var funcPanel = document.getElementById("rfb-func-panel");
      if (funcRef && !funcRef.contains(e.target) && (!funcPanel || !funcPanel.contains(e.target))) {
        showFuncMenu = false;
        updateHeaderState();
      }
      var sideMenuEl = document.getElementById("side-menu");
      if (sideMenuEl && showSideMenu && !sideMenuEl.contains(e.target)) {
        showSideMenu = false;
        updateHeaderState();
      }
    });

    document.addEventListener("keydown", function(e) {
      if (e.key === "Escape") {
        showFuncMenu = false;
        showSearch = false;
        showSideMenu = false;
        updateHeaderState();
      }
    });

    updateHeaderState();
    renderSideMenuContent();
  };
})();
