/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/src/js/bd_cards.ts":
/*!***********************************!*\
  !*** ./public/src/js/bd_cards.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bd_card: () => (/* binding */ bd_card)
/* harmony export */ });
const bd_card = [
    {
        "id": "M-001",
        "nome": "Zatch Bell",
        "sub_titulo": "Rei Gentil",
        "parceiro": "Kiyo Takamine",
        "raridade": "Super Rara",
        "categoria": "Mamodo",
        "poder": 4000,
        "descricao": "[1MP] Adicione 1000 de poder quando esta carta atacar.",
        "texto_adicional": "Ele foi encontrado e salvo pelo pai de Kiyo em uma floresta da Inglaterra."
    },
    {
        "id": "M-012",
        "nome": "Kanchomé",
        "sub_titulo": "Cara de Sorte",
        "parceiro": "Parco Folgore",
        "raridade": "Incomum",
        "categoria": "Mamodo",
        "poder": 1000,
        "descricao": "[DECLARE PARA USAR] Refaça seu lançamento de moeda. Este efeito só pode ser usado uma vez por turno.",
        "texto_adicional": "'Kanchomé o homem de aço! Kanchomé o invensível!'"
    },
    {
        "id": "M-014",
        "nome": "Tia",
        "sub_titulo": "Parceira Confiável",
        "parceiro": "Megumi",
        "raridade": "Incomum",
        "categoria": "Mamodo",
        "poder": 2000,
        "descricao": "[EM JOGO] Adicione 1000 pontos de poder para todas as suas cartas de mamodo quando mais de 2 mamodos (incluindo está carta) estão em jogo.",
        "texto_adicional": "Ela costumava intimidar o Zatch no mundo dos mamodos."
    },
    {
        "id": "P-001",
        "nome": "Kiyo Takamine",
        "sub_titulo": null,
        "parceiro_mamodo": "Zatch Bell",
        "raridade": "Raro",
        "categoria": "Parceiro",
        "descricao": "[ENVIE ESTA CARTA PARA A PILHA DE DESCARTE] A próxima mágia que o mamodo deste parceiro jogar não poderá ser defendida.",
        "texto_adicional": "Ele é um gênio, mas está entediado com a vida... isso até encontrar Zatch."
    },
    {
        "id": "P-008",
        "nome": "Parco Folgore",
        "sub_titulo": null,
        "parceiro_mamodo": "Kanchomé",
        "raridade": "Super Rara",
        "categoria": "Parceiro",
        "descricao": "[ENVIE ESTA CARTA PARA A PILHA DE DESCARTE] Envie uma carta parceiro em jogo de sua escolha do seu oponente para a pilha de descarte.",
        "texto_adicional": "Ele é um superstar mundialmente fomoso."
    },
    {
        "id": "P-009",
        "nome": "Megumi",
        "sub_titulo": null,
        "parceiro_mamodo": "Tia",
        "raridade": "Super Rara",
        "categoria": "Parceiro",
        "descricao": "[ENVIE ESTA CARTA PARA A PILHA DE DESCARTE] Negue uma carta de mágia que o seu oponente acabou de jogar.",
        "texto_adicional": "Ela é uma ídolo pop popular."
    },
    {
        "id": "S-001",
        "nome": "Zaker",
        "atributo": "Trovão",
        "raridade": "Comum",
        "batalha_tipo": {
            "ataque": true,
            "defesa": true
        },
        "custo": 1,
        "poder": 2000,
        "dano_livro": 1,
        "mamodo": "Zatch Bell",
        "categoria": "Mágia",
        "descricao": "Danifique o livro de poderes do seu oponente quando você vence como atacante.",
        "texto_adicional": "A primeira mágia de Zatch. Um ataque elétrico que faz Zatch disparar raios pela boca."
    },
    {
        "id": "S-002",
        "nome": "Zaker",
        "atributo": "Trovão",
        "raridade": "Raro",
        "batalha_tipo": {
            "ataque": true,
            "defesa": true
        },
        "custo": 2,
        "poder": 2000,
        "dano_livro": 2,
        "mamodo": "Zatch Bell",
        "categoria": "Mágia",
        "descricao": "Danifique o livro de poderes do seu oponente quando você vence a batalha como atacante.",
        "texto_adicional": "1º poder do Zatch. Dependendo do grau de poder dentro de você, a força do poder muda."
    },
    {
        "id": "S-003",
        "nome": "Rashield",
        "atributo": "Trovão",
        "raridade": "Incomum",
        "batalha_tipo": {
            "ataque": false,
            "defesa": true
        },
        "custo": 1,
        "poder": 4000,
        "dano_livro": 1,
        "mamodo": "Zatch Bell",
        "categoria": "Mágia",
        "descricao": "Danifique o livro de poderes do seu oponente quando você vence a batalha como defensor.",
        "texto_adicional": "2º poder do Zatch. Com um choque elétrico, ele rebate o ataque de um oponente."
    },
    {
        "id": "S-004",
        "nome": "Jikerdor",
        "atributo": "Trovão",
        "raridade": "Comum",
        "batalha_tipo": {
            "ataque": true,
            "defesa": false
        },
        "custo": 1,
        "poder": 2000,
        "dano_livro": 1,
        "mamodo": "Zatch Bell",
        "categoria": "Mágia",
        "descricao": "Danifique o livro de poderes do seu oponente quando você vence a batalha como atacante. Quando você causar dano ao livro de poderes do seu oponente ou ferir o mamodo do seu oponente, jogue uma moeda; se der cara, eles não podem jogar cartas de mágia até a próxima FASE FINAL dele.",
        "texto_adicional": "3º poder do Zatch. Um poder com uma força magnética forte que paralisa os movimentos do oponente."
    },
    {
        "id": "S-005",
        "nome": "Bao Zakeruga",
        "atributo": "Trovão",
        "raridade": "Super Rara",
        "batalha_tipo": {
            "ataque": true,
            "defesa": true
        },
        "custo": 6,
        "poder": 6000,
        "dano_livro": 3,
        "mamodo": "Zatch Bell",
        "categoria": "Mágia",
        "descricao": "Danifique o livro de poderes do seu oponente quando você vence a batalha como atacante.",
        "texto_adicional": "4º poder do Zatch. Ele invoca um relâmpago gigante em forma de dragão."
    },
    {
        "id": "S-020",
        "nome": "Poruk",
        "atributo": "",
        "raridade": "Comum",
        "batalha_tipo": {
            "ataque": true,
            "defesa": false
        },
        "custo": 1,
        "poder": 2000,
        "dano_livro": 0,
        "mamodo": "Kanchomé",
        "categoria": "Mágia",
        "descricao": "Quando você vence a batalha como Atacante, reduza o MP do seu oponente em 3.",
        "texto_adicional": "1º poder do Kanchomé. Ele pode se transformar em qualquer coisa que desejar."
    },
    {
        "id": "S-021",
        "nome": "Koporuk",
        "atributo": "",
        "raridade": "Comum",
        "batalha_tipo": {
            "ataque": false,
            "defesa": true
        },
        "custo": 2,
        "poder": "especial",
        "dano_livro": 0,
        "mamodo": "Kanchomé",
        "categoria": "Mágia",
        "descricao": "Lance uma moeda duas vezes; se você tirar cara pelo menos uma vez, negue o ataque do seu oponente.",
        "texto_adicional": "2º poder do Kanchomé. Um poder de encolhimento que o enfraquece."
    },
    {
        "id": "S-022",
        "nome": "Seoshi",
        "atributo": "",
        "raridade": "Comum",
        "batalha_tipo": {
            "ataque": false,
            "defesa": true
        },
        "custo": 1,
        "poder": 4000,
        "dano_livro": 0,
        "mamodo": "Tia",
        "categoria": "Mágia",
        "descricao": "Negue o ataque do seu oponente quando você vence a batalha como defensor.",
        "texto_adicional": "1º poder da Tia. Ela protege contra todo ataque exceto aqueles que vêm do chão."
    },
    {
        "id": "S-023",
        "nome": "Saisu",
        "atributo": "",
        "raridade": "Comum",
        "batalha_tipo": {
            "ataque": true,
            "defesa": false
        },
        "custo": 1,
        "poder": 1000,
        "dano_livro": 1,
        "mamodo": "Tia",
        "categoria": "Mágia",
        "descricao": "Danifique o livro de poderes do seu oponente quando você vence a batalha como atacante.",
        "texto_adicional": "2º poder da Tia. Lâminas de vento cortam os oponentes."
    },
    {
        "id": "S-024",
        "nome": "Ma Seshield",
        "atributo": "",
        "raridade": "Super Rara",
        "batalha_tipo": {
            "ataque": true,
            "defesa": false
        },
        "custo": 3,
        "poder": 8000,
        "dano_livro": 0,
        "mamodo": "Tia",
        "categoria": "Mágia",
        "descricao": "Negue o ataque do seu oponente quando você vence a batalha como defensor.",
        "texto_adicional": "3º poder da Tia. É um dos mais poderosos escudos contra ataque frontal."
    },
    {
        "id": "S-025",
        "nome": "Vamos sair daqui!",
        "atributo": "",
        "raridade": "Incomum",
        "batalha_tipo": {
            "ataque": false,
            "defesa": true
        },
        "custo": 0,
        "poder": "especial",
        "dano_livro": 0,
        "mamodo": "Todos",
        "categoria": "Mágia",
        "descricao": "Jogue uma moeda duas vezes; se você obter cara pelo menos uma vez, negue o ataque do seu oponente.",
        "texto_adicional": "Fugir às vezes é a melhor tática."
    },
    {
        "id": "S-026",
        "nome": "Prepare-se!",
        "atributo": "",
        "raridade": "Raro",
        "batalha_tipo": {
            "ataque": true,
            "defesa": false
        },
        "custo": 0,
        "poder": "especial",
        "dano_livro": 0,
        "mamodo": "Todos",
        "categoria": "Mágia",
        "descricao": "Jogue uma moeda; se obter cara, o próximo poder que você jogar no mesmo turno não poderá ser defendida. Este poder não poderá ser defendido.",
        "texto_adicional": "Continue olhando para a minha mão direita, OK?"
    },
    {
        "id": "S-027",
        "nome": "Mantenha-se firme!",
        "atributo": "",
        "raridade": "Comum",
        "batalha_tipo": {
            "ataque": false,
            "defesa": true
        },
        "custo": 0,
        "poder": "especial",
        "dano_livro": 0,
        "mamodo": "Todos",
        "categoria": "Mágia",
        "descricao": "Jogue uma moeda duas vezes; se você obter cara pelo menos uma vez, reduza o dano que você obter neste turno em 1.",
        "texto_adicional": "Sem chance - Não vou deixar ninguém passar por aqui."
    },
    {
        "id": "E-001",
        "nome": "A vontade de proteger",
        "raridade": "Comum",
        "batalha_tipo": {
            "ataque": true,
            "defesa": false
        },
        "custo": 0,
        "categoria": "Evento",
        "descricao": "Adicione 3000 de poder para 1 de suas cartas mamodo de sua escolha durante o próximo turno do seu oponente.",
        "texto_adicional": "O poder fica cada vez mais forte à medida que pensamos nas pessoas que queremos proteger."
    },
    {
        "id": "E-002",
        "nome": "Tina",
        "raridade": "Comum",
        "batalha_tipo": {
            "ataque": true,
            "defesa": false
        },
        "custo": 2,
        "categoria": "Evento",
        "descricao": "Ambos os jogadores não podem jogar nenhuma carta de poder até a próxima fase final do seu oponente.",
        "texto_adicional": "A boneca que a Lori fez para Kolulu."
    },
    {
        "id": "E-003",
        "nome": "Atum de Nadadeira Amarela",
        "raridade": "Comum",
        "batalha_tipo": {
            "ataque": true,
            "defesa": false
        },
        "custo": 0,
        "categoria": "Evento",
        "descricao": "Adicione 2 MP.",
        "texto_adicional": "Comida favorita do Zatch."
    },
    {
        "id": "E-004",
        "nome": "Curry da Amizade",
        "raridade": "Incomum",
        "batalha_tipo": {
            "ataque": true,
            "defesa": false
        },
        "custo": 5,
        "categoria": "Evento",
        "descricao": "Reduz o MP de todos os jogadores para 0.",
        "texto_adicional": "Kiyo fez o melhor(?) curry com a ajuda dos seus amigos!"
    },
    {
        "id": "E-008",
        "nome": "Suzy Mizuno",
        "raridade": "Incomum",
        "batalha_tipo": {
            "ataque": true,
            "defesa": false
        },
        "custo": 0,
        "categoria": "Evento",
        "descricao": "Ambos os jogadores não podem aplicar qualquer efeitos de cartas de parceiros em jogo durante este turno.",
        "texto_adicional": "Colega de classe do Kiyo, ela o entende muito bem."
    },
    {
        "id": "E-009",
        "nome": "Rei Bondoso",
        "raridade": "Incomum",
        "batalha_tipo": {
            "ataque": true,
            "defesa": false
        },
        "custo": 3,
        "categoria": "Evento",
        "descricao": "Adicione 3000 de poder a 1 das suas cartas mamodo de sua escolha durante este turno.",
        "texto_adicional": "Fiquei tão chateado quando vi Kolulu desaparecer de volta para o mundo mamodo."
    },
    {
        "id": "E-010",
        "nome": "Kiyo Bondoso",
        "raridade": "Incomum",
        "batalha_tipo": {
            "ataque": true,
            "defesa": false
        },
        "custo": 3,
        "categoria": "Evento",
        "descricao": "Use o efeito da carta parceiro do seu oponente, que funciona para as cartas mamodo dele, em 1 de suas cartas mamodo, em vez disso. A carta parceiro não é enviada para a pilha de descarte após o uso.",
        "texto_adicional": "Hoje, Kiyo de repente é gentil e está comendo atum de nadadeira amarela cru. Algo parece diferente..."
    },
    {
        "id": "E-011",
        "nome": "Folgore o Homem de Aço",
        "raridade": "Incomum",
        "batalha_tipo": {
            "ataque": true,
            "defesa": false
        },
        "custo": 3,
        "categoria": "Evento",
        "descricao": "Jogue uma moeda; se der cara, selecione uma carta parceiro da sua pilha de descarte e anexe-a a uma carta mamodo em jogo. Se der coroa, você pode continuar jogando até sair cara, pagando 2 MP para cada oportunidade.",
        "texto_adicional": "Folgore o Invencível ~. Folgore o Homem de Aço ~~!"
    }
];


/***/ }),

/***/ "./public/src/js/classes/Card.ts":
/*!***************************************!*\
  !*** ./public/src/js/classes/Card.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Card {
    constructor(nome, codigo, img, raridade, descricao, texto_adicional) {
        this.nome = nome;
        this.codigo = codigo;
        this.img = img;
        this.raridade = raridade;
        this.descricao = descricao;
        this.texto_adicional = texto_adicional;
    }
    get_nome() {
        return this.nome;
    }
    get_codigo() {
        return this.codigo;
    }
    get_img() {
        return this.img;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);


/***/ }),

/***/ "./public/src/js/classes/Evento.ts":
/*!*****************************************!*\
  !*** ./public/src/js/classes/Evento.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card */ "./public/src/js/classes/Card.ts");

class Evento extends _Card__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(nome, codigo, img, raridade, descricao, texto_adicional, is_ataque, is_defesa) {
        super(nome, codigo, img, raridade, descricao, texto_adicional);
        this.is_ataque = is_ataque !== null && is_ataque !== void 0 ? is_ataque : false;
        this.is_defesa = is_defesa !== null && is_defesa !== void 0 ? is_defesa : false;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Evento);


/***/ }),

/***/ "./public/src/js/classes/Livro/Livro.ts":
/*!**********************************************!*\
  !*** ./public/src/js/classes/Livro/Livro.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Livro {
    constructor() {
        this.paginas = [];
        this.page_view_left = 0;
        this.page_view_right = 1;
    }
    add_page(page) {
        this.paginas.push(page);
    }
    /** Ordenar Livro */
    sort_pages() {
        this.paginas.sort((a, b) => {
            if (a.get_page_number() > b.get_page_number()) {
                return 1;
            }
            else if (a.get_page_number() < b.get_page_number()) {
                return -1;
            }
            else {
                return 0;
            }
        });
    }
    print_livro() {
        this.paginas.forEach((pagina) => {
            console.log(pagina);
        });
    }
    get_page_view_left() {
        return this.page_view_left;
    }
    get_page_view_right() {
        return this.page_view_right;
    }
    /** Seguir para a próxima página do livro */
    next_page_view() {
        this.page_view_left = this.page_view_left + 2;
        this.page_view_right = this.page_view_right + 2;
    }
    prev_page_view() {
        this.page_view_right = this.page_view_right - 2;
        this.page_view_left = this.page_view_left - 2;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Livro);


/***/ }),

/***/ "./public/src/js/classes/Livro/Pagina.ts":
/*!***********************************************!*\
  !*** ./public/src/js/classes/Livro/Pagina.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Pagina {
    constructor(card_pagina, page_number) {
        this.card_pagina = card_pagina;
        this.page_number = page_number;
    }
    get_page_number() {
        return this.page_number;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagina);


/***/ }),

/***/ "./public/src/js/classes/Mamodo.ts":
/*!*****************************************!*\
  !*** ./public/src/js/classes/Mamodo.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card */ "./public/src/js/classes/Card.ts");

class Mamodo extends _Card__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(nome, codigo, img, raridade, descricao, texto_adicional, parceiro, poder) {
        super(nome, codigo, img, raridade, descricao, texto_adicional);
        this.parceiro = parceiro !== null && parceiro !== void 0 ? parceiro : '';
        this.poder = poder !== null && poder !== void 0 ? poder : 0;
    }
    get_parceiro() {
        return this.parceiro;
    }
    get_poder() {
        return this.poder;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mamodo);


/***/ }),

/***/ "./public/src/js/classes/Parceiro.ts":
/*!*******************************************!*\
  !*** ./public/src/js/classes/Parceiro.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card */ "./public/src/js/classes/Card.ts");

class Parceiro extends _Card__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(nome, codigo, img, raridade, descricao, texto_adicional, parceiro_mamodo) {
        super(nome, codigo, img, raridade, descricao, texto_adicional);
        this.parceiro_mamodo = parceiro_mamodo;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Parceiro);


/***/ }),

/***/ "./public/src/js/classes/Poder.ts":
/*!****************************************!*\
  !*** ./public/src/js/classes/Poder.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card */ "./public/src/js/classes/Card.ts");

class Poder extends _Card__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(nome, codigo, img, raridade, descricao, texto_adicional, atributo, poder, dano_livro, mamodo, is_ataque, is_defesa) {
        super(nome, codigo, img, raridade, descricao, texto_adicional);
        this.atributo = atributo;
        this.poder = poder;
        this.dano_livro = dano_livro;
        this.mamodo = mamodo !== null && mamodo !== void 0 ? mamodo : '';
        this.is_ataque = is_ataque !== null && is_ataque !== void 0 ? is_ataque : false;
        this.is_defesa = is_defesa !== null && is_defesa !== void 0 ? is_defesa : false;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Poder);


/***/ }),

/***/ "./public/src/js/classes/sistema/DeckMontados.ts":
/*!*******************************************************!*\
  !*** ./public/src/js/classes/sistema/DeckMontados.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deck_starter_set_1: () => (/* binding */ deck_starter_set_1)
/* harmony export */ });
const deck_starter_set_1 = () => {
    return ([
        "M-001",
        "S-025",
        "S-001",
        "P-001",
        "S-001",
        "M-014",
        "S-027",
        "P-009",
        "S-022",
        "S-026",
        "S-001",
        "S-003",
        "E-004",
        "M-012",
        "S-003",
        "P-008",
        "S-020",
        "S-004",
        "E-009",
        "E-003",
        "S-023",
        "E-008",
        "S-022",
        "E-001",
        "S-023",
        "E-010",
        "S-002",
        "E-011",
        "S-021",
        "E-002",
        "S-024",
        "S-005"
    ]);
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*******************************!*\
  !*** ./public/src/js/main.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_Mamodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Mamodo */ "./public/src/js/classes/Mamodo.ts");
/* harmony import */ var _classes_Poder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Poder */ "./public/src/js/classes/Poder.ts");
/* harmony import */ var _classes_Parceiro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Parceiro */ "./public/src/js/classes/Parceiro.ts");
/* harmony import */ var _classes_Evento__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/Evento */ "./public/src/js/classes/Evento.ts");
/* harmony import */ var _classes_Livro_Pagina__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./classes/Livro/Pagina */ "./public/src/js/classes/Livro/Pagina.ts");
/* harmony import */ var _classes_Livro_Livro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./classes/Livro/Livro */ "./public/src/js/classes/Livro/Livro.ts");
/* harmony import */ var _classes_sistema_DeckMontados__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./classes/sistema/DeckMontados */ "./public/src/js/classes/sistema/DeckMontados.ts");
/* harmony import */ var _bd_cards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bd_cards */ "./public/src/js/bd_cards.ts");








function filtro_card(id) {
    var _a, _b, _c, _d;
    const card = _bd_cards__WEBPACK_IMPORTED_MODULE_7__.bd_card.find((value) => {
        return (value.id === id);
    });
    switch (card === null || card === void 0 ? void 0 : card.categoria) {
        case 'Evento':
            return new _classes_Evento__WEBPACK_IMPORTED_MODULE_3__["default"](card.nome, card.id, `./public/src/img/cards/${card.id}/${card.id}.webp`, card.raridade, card.descricao, card.texto_adicional, (_a = card.batalha_tipo) === null || _a === void 0 ? void 0 : _a.ataque, (_b = card.batalha_tipo) === null || _b === void 0 ? void 0 : _b.defesa);
        case 'Mágia':
            return new _classes_Poder__WEBPACK_IMPORTED_MODULE_1__["default"](card.nome, card.id, `./public/src/img/cards/${card.id}/${card.id}.webp`, card.raridade, card.descricao, card.texto_adicional, card.atributo, card.poder, card.dano_livro, card.mamodo, (_c = card.batalha_tipo) === null || _c === void 0 ? void 0 : _c.ataque, (_d = card.batalha_tipo) === null || _d === void 0 ? void 0 : _d.defesa);
        case 'Mamodo':
            return new _classes_Mamodo__WEBPACK_IMPORTED_MODULE_0__["default"](card.nome, card.id, `./public/src/img/cards/${card.id}/${card.id}.webp`, card.raridade, card.descricao, card.texto_adicional, card.parceiro, card.poder);
        case 'Parceiro':
            return new _classes_Parceiro__WEBPACK_IMPORTED_MODULE_2__["default"](card.nome, card.id, `./public/src/img/cards/${card.id}/${card.id}.webp`, card.raridade, card.descricao, card.texto_adicional, card.parceiro_mamodo);
        default:
            console.log("Não indentificado");
            return undefined;
    }
}
function construir_livro(array_paginas, livro) {
    for (let [index, value] of array_paginas.entries()) {
        const card = filtro_card(value);
        if (card) {
            const pagina = new _classes_Livro_Pagina__WEBPACK_IMPORTED_MODULE_4__["default"](card, index);
            livro.add_page(pagina);
        }
    }
}
/** Declaração dos livros */
const Livro1 = new _classes_Livro_Livro__WEBPACK_IMPORTED_MODULE_5__["default"]();
const Livro2 = new _classes_Livro_Livro__WEBPACK_IMPORTED_MODULE_5__["default"]();
/** Lista de ID das cartas do deck Starter Set 1 */
const array_paginas = (0,_classes_sistema_DeckMontados__WEBPACK_IMPORTED_MODULE_6__.deck_starter_set_1)();
/** Monstando o livro */
construir_livro(array_paginas, Livro1);
Livro1.print_livro();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBR08sTUFBTSxPQUFPLEdBQUc7SUFDbkI7UUFDSSxJQUFJLEVBQUUsT0FBTztRQUNiLE1BQU0sRUFBRSxZQUFZO1FBQ3BCLFlBQVksRUFBRSxZQUFZO1FBQzFCLFVBQVUsRUFBRSxlQUFlO1FBQzNCLFVBQVUsRUFBRSxZQUFZO1FBQ3hCLFdBQVcsRUFBRSxRQUFRO1FBQ3JCLE9BQU8sRUFBRSxJQUFJO1FBQ2IsV0FBVyxFQUFFLHdEQUF3RDtRQUNyRSxpQkFBaUIsRUFBRSw0RUFBNEU7S0FFbEc7SUFDRDtRQUNHLElBQUksRUFBRSxPQUFPO1FBQ2IsTUFBTSxFQUFFLFVBQVU7UUFDbEIsWUFBWSxFQUFFLGVBQWU7UUFDN0IsVUFBVSxFQUFFLGVBQWU7UUFDM0IsVUFBVSxFQUFFLFNBQVM7UUFDckIsV0FBVyxFQUFFLFFBQVE7UUFDckIsT0FBTyxFQUFFLElBQUk7UUFDYixXQUFXLEVBQUUsc0dBQXNHO1FBQ25ILGlCQUFpQixFQUFFLG1EQUFtRDtLQUN4RTtJQUNEO1FBQ0ksSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUUsS0FBSztRQUNiLFlBQVksRUFBRSxvQkFBb0I7UUFDbEMsVUFBVSxFQUFFLFFBQVE7UUFDcEIsVUFBVSxFQUFFLFNBQVM7UUFDckIsV0FBVyxFQUFFLFFBQVE7UUFDckIsT0FBTyxFQUFFLElBQUk7UUFDYixXQUFXLEVBQUUsNElBQTRJO1FBQ3pKLGlCQUFpQixFQUFFLHVEQUF1RDtLQUM3RTtJQUNEO1FBQ0ksSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUUsZUFBZTtRQUN2QixZQUFZLEVBQUUsSUFBSTtRQUNsQixpQkFBaUIsRUFBRSxZQUFZO1FBQy9CLFVBQVUsRUFBRSxNQUFNO1FBQ2xCLFdBQVcsRUFBRSxVQUFVO1FBQ3ZCLFdBQVcsRUFBRSx5SEFBeUg7UUFDdEksaUJBQWlCLEVBQUUsNEVBQTRFO0tBQ2xHO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsT0FBTztRQUNiLE1BQU0sRUFBRSxlQUFlO1FBQ3ZCLFlBQVksRUFBRSxJQUFJO1FBQ2xCLGlCQUFpQixFQUFFLFVBQVU7UUFDN0IsVUFBVSxFQUFFLFlBQVk7UUFDeEIsV0FBVyxFQUFFLFVBQVU7UUFDdkIsV0FBVyxFQUFFLHVJQUF1STtRQUNwSixpQkFBaUIsRUFBRSx5Q0FBeUM7S0FDL0Q7SUFDRDtRQUNJLElBQUksRUFBRSxPQUFPO1FBQ2IsTUFBTSxFQUFFLFFBQVE7UUFDaEIsWUFBWSxFQUFFLElBQUk7UUFDbEIsaUJBQWlCLEVBQUUsS0FBSztRQUN4QixVQUFVLEVBQUUsWUFBWTtRQUN4QixXQUFXLEVBQUUsVUFBVTtRQUN2QixXQUFXLEVBQUUsMEdBQTBHO1FBQ3ZILGlCQUFpQixFQUFFLDhCQUE4QjtLQUNwRDtJQUNEO1FBQ0ksSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUUsT0FBTztRQUNmLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLFVBQVUsRUFBRSxPQUFPO1FBQ25CLGNBQWMsRUFBQztZQUNYLFFBQVEsRUFBRSxJQUFJO1lBQ2QsUUFBUSxFQUFFLElBQUk7U0FDakI7UUFDRCxPQUFPLEVBQUUsQ0FBQztRQUNWLE9BQU8sRUFBRSxJQUFJO1FBQ2IsWUFBWSxFQUFFLENBQUM7UUFDZixRQUFRLEVBQUUsWUFBWTtRQUN0QixXQUFXLEVBQUUsT0FBTztRQUNwQixXQUFXLEVBQUUsK0VBQStFO1FBQzVGLGlCQUFpQixFQUFFLHVGQUF1RjtLQUM3RztJQUNEO1FBQ0ksSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUUsT0FBTztRQUNmLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLFVBQVUsRUFBRSxNQUFNO1FBQ2xCLGNBQWMsRUFBQztZQUNYLFFBQVEsRUFBRSxJQUFJO1lBQ2QsUUFBUSxFQUFFLElBQUk7U0FDakI7UUFDRCxPQUFPLEVBQUUsQ0FBQztRQUNWLE9BQU8sRUFBRSxJQUFJO1FBQ2IsWUFBWSxFQUFFLENBQUM7UUFDZixRQUFRLEVBQUUsWUFBWTtRQUN0QixXQUFXLEVBQUUsT0FBTztRQUNwQixXQUFXLEVBQUUseUZBQXlGO1FBQ3RHLGlCQUFpQixFQUFFLHVGQUF1RjtLQUM3RztJQUNEO1FBQ0ksSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUUsVUFBVTtRQUNsQixVQUFVLEVBQUUsUUFBUTtRQUNwQixVQUFVLEVBQUUsU0FBUztRQUNyQixjQUFjLEVBQUM7WUFDWCxRQUFRLEVBQUUsS0FBSztZQUNmLFFBQVEsRUFBRSxJQUFJO1NBQ2pCO1FBQ0QsT0FBTyxFQUFFLENBQUM7UUFDVixPQUFPLEVBQUUsSUFBSTtRQUNiLFlBQVksRUFBRSxDQUFDO1FBQ2YsUUFBUSxFQUFFLFlBQVk7UUFDdEIsV0FBVyxFQUFFLE9BQU87UUFDcEIsV0FBVyxFQUFFLHlGQUF5RjtRQUN0RyxpQkFBaUIsRUFBRSxnRkFBZ0Y7S0FDdEc7SUFDRDtRQUNJLElBQUksRUFBRSxPQUFPO1FBQ2IsTUFBTSxFQUFFLFVBQVU7UUFDbEIsVUFBVSxFQUFFLFFBQVE7UUFDcEIsVUFBVSxFQUFFLE9BQU87UUFDbkIsY0FBYyxFQUFDO1lBQ1gsUUFBUSxFQUFFLElBQUk7WUFDZCxRQUFRLEVBQUUsS0FBSztTQUNsQjtRQUNELE9BQU8sRUFBRSxDQUFDO1FBQ1YsT0FBTyxFQUFFLElBQUk7UUFDYixZQUFZLEVBQUUsQ0FBQztRQUNmLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFdBQVcsRUFBRSxPQUFPO1FBQ3BCLFdBQVcsRUFBRSwwUkFBMFI7UUFDdlMsaUJBQWlCLEVBQUUsbUdBQW1HO0tBQ3pIO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsT0FBTztRQUNiLE1BQU0sRUFBRSxjQUFjO1FBQ3RCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLFVBQVUsRUFBRSxZQUFZO1FBQ3hCLGNBQWMsRUFBQztZQUNYLFFBQVEsRUFBRSxJQUFJO1lBQ2QsUUFBUSxFQUFFLElBQUk7U0FDakI7UUFDRCxPQUFPLEVBQUUsQ0FBQztRQUNWLE9BQU8sRUFBRSxJQUFJO1FBQ2IsWUFBWSxFQUFFLENBQUM7UUFDZixRQUFRLEVBQUUsWUFBWTtRQUN0QixXQUFXLEVBQUUsT0FBTztRQUNwQixXQUFXLEVBQUUseUZBQXlGO1FBQ3RHLGlCQUFpQixFQUFFLHdFQUF3RTtLQUM5RjtJQUNEO1FBQ0ksSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUUsT0FBTztRQUNmLFVBQVUsRUFBRSxFQUFFO1FBQ2QsVUFBVSxFQUFFLE9BQU87UUFDbkIsY0FBYyxFQUFDO1lBQ1gsUUFBUSxFQUFFLElBQUk7WUFDZCxRQUFRLEVBQUUsS0FBSztTQUNsQjtRQUNELE9BQU8sRUFBRSxDQUFDO1FBQ1YsT0FBTyxFQUFFLElBQUk7UUFDYixZQUFZLEVBQUUsQ0FBQztRQUNmLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSxPQUFPO1FBQ3BCLFdBQVcsRUFBRSw4RUFBOEU7UUFDM0YsaUJBQWlCLEVBQUUsOEVBQThFO0tBQ3BHO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsT0FBTztRQUNiLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLFVBQVUsRUFBRSxFQUFFO1FBQ2QsVUFBVSxFQUFFLE9BQU87UUFDbkIsY0FBYyxFQUFDO1lBQ1gsUUFBUSxFQUFFLEtBQUs7WUFDZixRQUFRLEVBQUUsSUFBSTtTQUNqQjtRQUNELE9BQU8sRUFBRSxDQUFDO1FBQ1YsT0FBTyxFQUFFLFVBQVU7UUFDbkIsWUFBWSxFQUFFLENBQUM7UUFDZixRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUsT0FBTztRQUNwQixXQUFXLEVBQUUsb0dBQW9HO1FBQ2pILGlCQUFpQixFQUFFLGtFQUFrRTtLQUN4RjtJQUNEO1FBQ0ksSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUUsUUFBUTtRQUNoQixVQUFVLEVBQUUsRUFBRTtRQUNkLFVBQVUsRUFBRSxPQUFPO1FBQ25CLGNBQWMsRUFBQztZQUNYLFFBQVEsRUFBRSxLQUFLO1lBQ2YsUUFBUSxFQUFFLElBQUk7U0FDakI7UUFDRCxPQUFPLEVBQUUsQ0FBQztRQUNWLE9BQU8sRUFBRSxJQUFJO1FBQ2IsWUFBWSxFQUFFLENBQUM7UUFDZixRQUFRLEVBQUUsS0FBSztRQUNmLFdBQVcsRUFBRSxPQUFPO1FBQ3BCLFdBQVcsRUFBRSwyRUFBMkU7UUFDeEYsaUJBQWlCLEVBQUUsaUZBQWlGO0tBQ3ZHO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsT0FBTztRQUNiLE1BQU0sRUFBRSxPQUFPO1FBQ2YsVUFBVSxFQUFFLEVBQUU7UUFDZCxVQUFVLEVBQUUsT0FBTztRQUNuQixjQUFjLEVBQUM7WUFDWCxRQUFRLEVBQUUsSUFBSTtZQUNkLFFBQVEsRUFBRSxLQUFLO1NBQ2xCO1FBQ0QsT0FBTyxFQUFFLENBQUM7UUFDVixPQUFPLEVBQUUsSUFBSTtRQUNiLFlBQVksRUFBRSxDQUFDO1FBQ2YsUUFBUSxFQUFFLEtBQUs7UUFDZixXQUFXLEVBQUUsT0FBTztRQUNwQixXQUFXLEVBQUUseUZBQXlGO1FBQ3RHLGlCQUFpQixFQUFFLHdEQUF3RDtLQUM5RTtJQUNEO1FBQ0ksSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUUsYUFBYTtRQUNyQixVQUFVLEVBQUUsRUFBRTtRQUNkLFVBQVUsRUFBRSxZQUFZO1FBQ3hCLGNBQWMsRUFBQztZQUNYLFFBQVEsRUFBRSxJQUFJO1lBQ2QsUUFBUSxFQUFFLEtBQUs7U0FDbEI7UUFDRCxPQUFPLEVBQUUsQ0FBQztRQUNWLE9BQU8sRUFBRSxJQUFJO1FBQ2IsWUFBWSxFQUFFLENBQUM7UUFDZixRQUFRLEVBQUUsS0FBSztRQUNmLFdBQVcsRUFBRSxPQUFPO1FBQ3BCLFdBQVcsRUFBRSwyRUFBMkU7UUFDeEYsaUJBQWlCLEVBQUUseUVBQXlFO0tBQy9GO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsT0FBTztRQUNiLE1BQU0sRUFBRSxtQkFBbUI7UUFDM0IsVUFBVSxFQUFFLEVBQUU7UUFDZCxVQUFVLEVBQUUsU0FBUztRQUNyQixjQUFjLEVBQUM7WUFDWCxRQUFRLEVBQUUsS0FBSztZQUNmLFFBQVEsRUFBRSxJQUFJO1NBQ2pCO1FBQ0QsT0FBTyxFQUFFLENBQUM7UUFDVixPQUFPLEVBQUUsVUFBVTtRQUNuQixZQUFZLEVBQUUsQ0FBQztRQUNmLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFdBQVcsRUFBRSxPQUFPO1FBQ3BCLFdBQVcsRUFBRSxvR0FBb0c7UUFDakgsaUJBQWlCLEVBQUUsbUNBQW1DO0tBQ3pEO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsT0FBTztRQUNiLE1BQU0sRUFBRSxhQUFhO1FBQ3JCLFVBQVUsRUFBRSxFQUFFO1FBQ2QsVUFBVSxFQUFFLE1BQU07UUFDbEIsY0FBYyxFQUFFO1lBQ1osUUFBUSxFQUFFLElBQUk7WUFDZCxRQUFRLEVBQUUsS0FBSztTQUNsQjtRQUNELE9BQU8sRUFBRSxDQUFDO1FBQ1YsT0FBTyxFQUFFLFVBQVU7UUFDbkIsWUFBWSxFQUFFLENBQUM7UUFDZixRQUFRLEVBQUUsT0FBTztRQUNqQixXQUFXLEVBQUUsT0FBTztRQUNwQixXQUFXLEVBQUUsOElBQThJO1FBQzNKLGlCQUFpQixFQUFFLGdEQUFnRDtLQUN0RTtJQUNEO1FBQ0ksSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUUsb0JBQW9CO1FBQzVCLFVBQVUsRUFBRSxFQUFFO1FBQ2QsVUFBVSxFQUFFLE9BQU87UUFDbkIsY0FBYyxFQUFFO1lBQ1osUUFBUSxFQUFFLEtBQUs7WUFDZixRQUFRLEVBQUUsSUFBSTtTQUNqQjtRQUNELE9BQU8sRUFBRSxDQUFDO1FBQ1YsT0FBTyxFQUFFLFVBQVU7UUFDbkIsWUFBWSxFQUFFLENBQUM7UUFDZixRQUFRLEVBQUUsT0FBTztRQUNqQixXQUFXLEVBQUUsT0FBTztRQUNwQixXQUFXLEVBQUUsbUhBQW1IO1FBQ2hJLGlCQUFpQixFQUFFLHNEQUFzRDtLQUM1RTtJQUNEO1FBQ0ksSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUUsdUJBQXVCO1FBQy9CLFVBQVUsRUFBRSxPQUFPO1FBQ25CLGNBQWMsRUFBQztZQUNYLFFBQVEsRUFBRSxJQUFJO1lBQ2QsUUFBUSxFQUFFLEtBQUs7U0FDbEI7UUFDRCxPQUFPLEVBQUUsQ0FBQztRQUNWLFdBQVcsRUFBRSxRQUFRO1FBQ3JCLFdBQVcsRUFBRSw2R0FBNkc7UUFDMUgsaUJBQWlCLEVBQUUsMkZBQTJGO0tBQ2pIO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsT0FBTztRQUNiLE1BQU0sRUFBRSxNQUFNO1FBQ2QsVUFBVSxFQUFFLE9BQU87UUFDbkIsY0FBYyxFQUFDO1lBQ1gsUUFBUSxFQUFFLElBQUk7WUFDZCxRQUFRLEVBQUUsS0FBSztTQUNsQjtRQUNELE9BQU8sRUFBRSxDQUFDO1FBQ1YsV0FBVyxFQUFFLFFBQVE7UUFDckIsV0FBVyxFQUFFLHFHQUFxRztRQUNsSCxpQkFBaUIsRUFBRSxzQ0FBc0M7S0FDNUQ7SUFDRDtRQUNJLElBQUksRUFBRSxPQUFPO1FBQ2IsTUFBTSxFQUFFLDJCQUEyQjtRQUNuQyxVQUFVLEVBQUUsT0FBTztRQUNuQixjQUFjLEVBQUM7WUFDWCxRQUFRLEVBQUUsSUFBSTtZQUNkLFFBQVEsRUFBRSxLQUFLO1NBQ2xCO1FBQ0QsT0FBTyxFQUFFLENBQUM7UUFDVixXQUFXLEVBQUUsUUFBUTtRQUNyQixXQUFXLEVBQUUsZ0JBQWdCO1FBQzdCLGlCQUFpQixFQUFFLDJCQUEyQjtLQUNqRDtJQUNEO1FBQ0ksSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUUsa0JBQWtCO1FBQzFCLFVBQVUsRUFBRSxTQUFTO1FBQ3JCLGNBQWMsRUFBQztZQUNYLFFBQVEsRUFBRSxJQUFJO1lBQ2QsUUFBUSxFQUFFLEtBQUs7U0FDbEI7UUFDRCxPQUFPLEVBQUUsQ0FBQztRQUNWLFdBQVcsRUFBRSxRQUFRO1FBQ3JCLFdBQVcsRUFBRSwwQ0FBMEM7UUFDdkQsaUJBQWlCLEVBQUUseURBQXlEO0tBQy9FO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsT0FBTztRQUNiLE1BQU0sRUFBRSxhQUFhO1FBQ3JCLFVBQVUsRUFBRSxTQUFTO1FBQ3JCLGNBQWMsRUFBQztZQUNYLFFBQVEsRUFBRSxJQUFJO1lBQ2QsUUFBUSxFQUFFLEtBQUs7U0FDbEI7UUFDRCxPQUFPLEVBQUUsQ0FBQztRQUNWLFdBQVcsRUFBRSxRQUFRO1FBQ3JCLFdBQVcsRUFBRSwwR0FBMEc7UUFDdkgsaUJBQWlCLEVBQUUsb0RBQW9EO0tBQzFFO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsT0FBTztRQUNiLE1BQU0sRUFBRSxhQUFhO1FBQ3JCLFVBQVUsRUFBRSxTQUFTO1FBQ3JCLGNBQWMsRUFBQztZQUNYLFFBQVEsRUFBRSxJQUFJO1lBQ2QsUUFBUSxFQUFFLEtBQUs7U0FDbEI7UUFDRCxPQUFPLEVBQUUsQ0FBQztRQUNWLFdBQVcsRUFBRSxRQUFRO1FBQ3JCLFdBQVcsRUFBRSxzRkFBc0Y7UUFDbkcsaUJBQWlCLEVBQUUsZ0ZBQWdGO0tBQ3RHO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsT0FBTztRQUNiLE1BQU0sRUFBRSxjQUFjO1FBQ3RCLFVBQVUsRUFBRSxTQUFTO1FBQ3JCLGNBQWMsRUFBQztZQUNYLFFBQVEsRUFBRSxJQUFJO1lBQ2QsUUFBUSxFQUFFLEtBQUs7U0FDbEI7UUFDRCxPQUFPLEVBQUUsQ0FBQztRQUNWLFdBQVcsRUFBRSxRQUFRO1FBQ3JCLFdBQVcsRUFBRSx3TUFBd007UUFDck4saUJBQWlCLEVBQUUsdUdBQXVHO0tBQzdIO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsT0FBTztRQUNiLE1BQU0sRUFBRSx3QkFBd0I7UUFDaEMsVUFBVSxFQUFFLFNBQVM7UUFDckIsY0FBYyxFQUFDO1lBQ1gsUUFBUSxFQUFFLElBQUk7WUFDZCxRQUFRLEVBQUUsS0FBSztTQUNsQjtRQUNELE9BQU8sRUFBRSxDQUFDO1FBQ1YsV0FBVyxFQUFFLFFBQVE7UUFDckIsV0FBVyxFQUFFLHlOQUF5TjtRQUN0TyxpQkFBaUIsRUFBRSxvREFBb0Q7S0FDMUU7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7O0FDellELE1BQU0sSUFBSTtJQVdOLFlBQVksSUFBVyxFQUFFLE1BQWEsRUFBRSxHQUFVLEVBQUUsUUFBZSxFQUFFLFNBQWlCLEVBQUUsZUFBdUI7UUFDM0csSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztJQUMzQyxDQUFDO0lBRU0sUUFBUTtRQUNYLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRU0sVUFBVTtRQUNiLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRU0sT0FBTztRQUNWLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQixDQUFDO0NBQ0o7QUFFRCxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ007QUFFMUIsTUFBTSxNQUFPLFNBQVEsNkNBQUk7SUFJckIsWUFDSSxJQUFXLEVBQ1gsTUFBYSxFQUNiLEdBQVUsRUFDVixRQUFlLEVBQ2YsU0FBZ0IsRUFDaEIsZUFBc0IsRUFDdEIsU0FBNkIsRUFDN0IsU0FBNkI7UUFFN0IsS0FBSyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFFL0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLGFBQVQsU0FBUyxjQUFULFNBQVMsR0FBSSxLQUFLLENBQUM7UUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLGFBQVQsU0FBUyxjQUFULFNBQVMsR0FBSSxLQUFLLENBQUM7SUFDeEMsQ0FBQztDQUNKO0FBRUQsaUVBQWUsTUFBTTs7Ozs7Ozs7Ozs7Ozs7O0FDckJyQixNQUFNLEtBQUs7SUFBWDtRQUNZLFlBQU8sR0FBWSxFQUFFLENBQUM7UUFDdEIsbUJBQWMsR0FBVSxDQUFDLENBQUM7UUFDMUIsb0JBQWUsR0FBVSxDQUFDLENBQUM7SUFrRHZDLENBQUM7SUFoRFUsUUFBUSxDQUFDLElBQVc7UUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFFRCxvQkFBb0I7SUFDYixVQUFVO1FBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFRLEVBQUUsQ0FBUSxFQUFDLEVBQUU7WUFDcEMsSUFBRyxDQUFDLENBQUMsZUFBZSxFQUFFLEdBQUcsQ0FBQyxDQUFDLGVBQWUsRUFBRSxFQUFDLENBQUM7Z0JBQzFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2IsQ0FBQztpQkFDSSxJQUFHLENBQUMsQ0FBQyxlQUFlLEVBQUUsR0FBRyxDQUFDLENBQUMsZUFBZSxFQUFFLEVBQUMsQ0FBQztnQkFDL0MsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNkLENBQUM7aUJBQ0csQ0FBQztnQkFDRCxPQUFPLENBQUMsQ0FBQztZQUNiLENBQUM7UUFDTCxDQUFDLENBQUM7SUFDTixDQUFDO0lBRU0sV0FBVztRQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFDLEVBQUU7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUM7SUFDTixDQUFDO0lBR00sa0JBQWtCO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUMvQixDQUFDO0lBRU0sbUJBQW1CO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUNoQyxDQUFDO0lBR0QsNENBQTRDO0lBQ3JDLGNBQWM7UUFDakIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFTSxjQUFjO1FBQ2pCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztJQUNsRCxDQUFDO0NBSUo7QUFFRCxpRUFBZSxLQUFLLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3BEckIsTUFBTSxNQUFNO0lBS1IsWUFBWSxXQUEyRCxFQUFFLFdBQWtCO1FBQ3ZGLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ25DLENBQUM7SUFFTSxlQUFlO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDO0NBRUo7QUFFRCxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkk7QUFFMUIsTUFBTSxNQUFPLFNBQVEsNkNBQUk7SUFJckIsWUFDSSxJQUFXLEVBQ1gsTUFBYSxFQUNiLEdBQVUsRUFDVixRQUFlLEVBQ2YsU0FBZ0IsRUFDaEIsZUFBc0IsRUFDdEIsUUFBMkIsRUFDM0IsS0FBaUM7UUFFakMsS0FBSyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLGFBQVIsUUFBUSxjQUFSLFFBQVEsR0FBSSxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLGFBQUwsS0FBSyxjQUFMLEtBQUssR0FBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVNLFlBQVk7UUFDZixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUVNLFNBQVM7UUFDWixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztDQUtKO0FBRUQsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDbENJO0FBRTFCLE1BQU0sUUFBUyxTQUFRLDZDQUFJO0lBR3ZCLFlBQ0ksSUFBVyxFQUNYLE1BQWEsRUFDYixHQUFVLEVBQ1YsUUFBZSxFQUNmLFNBQWdCLEVBQ2hCLGVBQXNCLEVBQ3RCLGVBQWtDO1FBRWxDLEtBQUssQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO0lBQzNDLENBQUM7Q0FDSjtBQUVELGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ25CRTtBQUUxQixNQUFNLEtBQU0sU0FBUSw2Q0FBSTtJQVFwQixZQUNJLElBQVcsRUFDWCxNQUFhLEVBQ2IsR0FBVSxFQUNWLFFBQWUsRUFDZixTQUFnQixFQUNoQixlQUFzQixFQUN0QixRQUEyQixFQUMzQixLQUFpQyxFQUNqQyxVQUE2QixFQUM3QixNQUF5QixFQUN6QixTQUE2QixFQUM3QixTQUE2QjtRQUU3QixLQUFLLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxlQUFlLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sYUFBTixNQUFNLGNBQU4sTUFBTSxHQUFJLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsYUFBVCxTQUFTLGNBQVQsU0FBUyxHQUFJLEtBQUssQ0FBQztRQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsYUFBVCxTQUFTLGNBQVQsU0FBUyxHQUFJLEtBQUssQ0FBQztJQUN4QyxDQUFDO0NBQ0o7QUFFRCxpRUFBZSxLQUFLLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2pDZCxNQUFNLGtCQUFrQixHQUFHLEdBQUcsRUFBRTtJQUNuQyxPQUFNLENBQ0Y7UUFDSSxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztLQUNWLENBQ0o7QUFDTCxDQUFDOzs7Ozs7O1VDdENEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05zQztBQUNGO0FBQ007QUFDSjtBQUVNO0FBQ0Y7QUFJMEI7QUFFakM7QUFHbkMsU0FBUyxXQUFXLENBQUMsRUFBUzs7SUFDMUIsTUFBTSxJQUFJLEdBQUcsOENBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUMsRUFBRTtRQUMvQixPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFDNUIsQ0FBQyxDQUFDO0lBRUYsUUFBTyxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsU0FBUyxFQUFDLENBQUM7UUFDcEIsS0FBSyxRQUFRO1lBQ1QsT0FBTyxJQUFJLHVEQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLDBCQUEwQixJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxVQUFJLENBQUMsWUFBWSwwQ0FBRSxNQUFNLEVBQUUsVUFBSSxDQUFDLFlBQVksMENBQUUsTUFBTSxDQUFDLENBQUM7UUFDMU0sS0FBSyxPQUFPO1lBQ1IsT0FBTyxJQUFJLHNEQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLDBCQUEwQixJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLFVBQUksQ0FBQyxZQUFZLDBDQUFFLE1BQU0sRUFBRSxVQUFJLENBQUMsWUFBWSwwQ0FBRSxNQUFNLENBQUM7UUFDalEsS0FBSyxRQUFRO1lBQ1QsT0FBTyxJQUFJLHVEQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLDBCQUEwQixJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvSyxLQUFLLFVBQVU7WUFDWCxPQUFPLElBQUkseURBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsMEJBQTBCLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM1SztZQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUNqQyxPQUFPLFNBQVMsQ0FBQztJQUN6QixDQUFDO0FBQ0wsQ0FBQztBQUVELFNBQVMsZUFBZSxDQUFDLGFBQXNCLEVBQUUsS0FBVztJQUN4RCxLQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksYUFBYSxDQUFDLE9BQU8sRUFBRSxFQUFDLENBQUM7UUFFL0MsTUFBTSxJQUFJLEdBQWtELFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvRSxJQUFHLElBQUksRUFBQyxDQUFDO1lBQ0wsTUFBTSxNQUFNLEdBQVUsSUFBSSw2REFBTSxDQUFDLElBQUksRUFBQyxLQUFLLENBQUMsQ0FBQztZQUM3QyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLENBQUM7SUFDTCxDQUFDO0FBQ0wsQ0FBQztBQUdELDRCQUE0QjtBQUM1QixNQUFNLE1BQU0sR0FBRyxJQUFJLDREQUFLLEVBQUUsQ0FBQztBQUMzQixNQUFNLE1BQU0sR0FBRyxJQUFJLDREQUFLLEVBQUUsQ0FBQztBQUUzQixtREFBbUQ7QUFDbkQsTUFBTSxhQUFhLEdBQVksaUZBQWtCLEVBQUUsQ0FBQztBQUVwRCx3QkFBd0I7QUFDeEIsZUFBZSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUd2QyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL2pzL2JkX2NhcmRzLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9zcmMvanMvY2xhc3Nlcy9DYXJkLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9zcmMvanMvY2xhc3Nlcy9FdmVudG8udHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3NyYy9qcy9jbGFzc2VzL0xpdnJvL0xpdnJvLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9zcmMvanMvY2xhc3Nlcy9MaXZyby9QYWdpbmEudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3NyYy9qcy9jbGFzc2VzL01hbW9kby50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL2pzL2NsYXNzZXMvUGFyY2Vpcm8udHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3NyYy9qcy9jbGFzc2VzL1BvZGVyLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9zcmMvanMvY2xhc3Nlcy9zaXN0ZW1hL0RlY2tNb250YWRvcy50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGJkX2NhcmQgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgXCJpZFwiOiBcIk0tMDAxXCIsXHJcbiAgICAgICAgXCJub21lXCI6IFwiWmF0Y2ggQmVsbFwiLFxyXG4gICAgICAgIFwic3ViX3RpdHVsb1wiOiBcIlJlaSBHZW50aWxcIixcclxuICAgICAgICBcInBhcmNlaXJvXCI6IFwiS2l5byBUYWthbWluZVwiLFxyXG4gICAgICAgIFwicmFyaWRhZGVcIjogXCJTdXBlciBSYXJhXCIsXHJcbiAgICAgICAgXCJjYXRlZ29yaWFcIjogXCJNYW1vZG9cIixcclxuICAgICAgICBcInBvZGVyXCI6IDQwMDAsXHJcbiAgICAgICAgXCJkZXNjcmljYW9cIjogXCJbMU1QXSBBZGljaW9uZSAxMDAwIGRlIHBvZGVyIHF1YW5kbyBlc3RhIGNhcnRhIGF0YWNhci5cIixcclxuICAgICAgICBcInRleHRvX2FkaWNpb25hbFwiOiBcIkVsZSBmb2kgZW5jb250cmFkbyBlIHNhbHZvIHBlbG8gcGFpIGRlIEtpeW8gZW0gdW1hIGZsb3Jlc3RhIGRhIEluZ2xhdGVycmEuXCJcclxuXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgXCJpZFwiOiBcIk0tMDEyXCIsXHJcbiAgICAgICBcIm5vbWVcIjogXCJLYW5jaG9tw6lcIixcclxuICAgICAgIFwic3ViX3RpdHVsb1wiOiBcIkNhcmEgZGUgU29ydGVcIixcclxuICAgICAgIFwicGFyY2Vpcm9cIjogXCJQYXJjbyBGb2xnb3JlXCIsXHJcbiAgICAgICBcInJhcmlkYWRlXCI6IFwiSW5jb211bVwiLFxyXG4gICAgICAgXCJjYXRlZ29yaWFcIjogXCJNYW1vZG9cIixcclxuICAgICAgIFwicG9kZXJcIjogMTAwMCxcclxuICAgICAgIFwiZGVzY3JpY2FvXCI6IFwiW0RFQ0xBUkUgUEFSQSBVU0FSXSBSZWZhw6dhIHNldSBsYW7Dp2FtZW50byBkZSBtb2VkYS4gRXN0ZSBlZmVpdG8gc8OzIHBvZGUgc2VyIHVzYWRvIHVtYSB2ZXogcG9yIHR1cm5vLlwiLFxyXG4gICAgICAgXCJ0ZXh0b19hZGljaW9uYWxcIjogXCInS2FuY2hvbcOpIG8gaG9tZW0gZGUgYcOnbyEgS2FuY2hvbcOpIG8gaW52ZW5zw612ZWwhJ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiaWRcIjogXCJNLTAxNFwiLFxyXG4gICAgICAgIFwibm9tZVwiOiBcIlRpYVwiLFxyXG4gICAgICAgIFwic3ViX3RpdHVsb1wiOiBcIlBhcmNlaXJhIENvbmZpw6F2ZWxcIixcclxuICAgICAgICBcInBhcmNlaXJvXCI6IFwiTWVndW1pXCIsXHJcbiAgICAgICAgXCJyYXJpZGFkZVwiOiBcIkluY29tdW1cIixcclxuICAgICAgICBcImNhdGVnb3JpYVwiOiBcIk1hbW9kb1wiLFxyXG4gICAgICAgIFwicG9kZXJcIjogMjAwMCxcclxuICAgICAgICBcImRlc2NyaWNhb1wiOiBcIltFTSBKT0dPXSBBZGljaW9uZSAxMDAwIHBvbnRvcyBkZSBwb2RlciBwYXJhIHRvZGFzIGFzIHN1YXMgY2FydGFzIGRlIG1hbW9kbyBxdWFuZG8gbWFpcyBkZSAyIG1hbW9kb3MgKGluY2x1aW5kbyBlc3TDoSBjYXJ0YSkgZXN0w6NvIGVtIGpvZ28uXCIsXHJcbiAgICAgICAgXCJ0ZXh0b19hZGljaW9uYWxcIjogXCJFbGEgY29zdHVtYXZhIGludGltaWRhciBvIFphdGNoIG5vIG11bmRvIGRvcyBtYW1vZG9zLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiaWRcIjogXCJQLTAwMVwiLFxyXG4gICAgICAgIFwibm9tZVwiOiBcIktpeW8gVGFrYW1pbmVcIixcclxuICAgICAgICBcInN1Yl90aXR1bG9cIjogbnVsbCxcclxuICAgICAgICBcInBhcmNlaXJvX21hbW9kb1wiOiBcIlphdGNoIEJlbGxcIixcclxuICAgICAgICBcInJhcmlkYWRlXCI6IFwiUmFyb1wiLFxyXG4gICAgICAgIFwiY2F0ZWdvcmlhXCI6IFwiUGFyY2Vpcm9cIixcclxuICAgICAgICBcImRlc2NyaWNhb1wiOiBcIltFTlZJRSBFU1RBIENBUlRBIFBBUkEgQSBQSUxIQSBERSBERVNDQVJURV0gQSBwcsOzeGltYSBtw6FnaWEgcXVlIG8gbWFtb2RvIGRlc3RlIHBhcmNlaXJvIGpvZ2FyIG7Do28gcG9kZXLDoSBzZXIgZGVmZW5kaWRhLlwiLFxyXG4gICAgICAgIFwidGV4dG9fYWRpY2lvbmFsXCI6IFwiRWxlIMOpIHVtIGfDqm5pbywgbWFzIGVzdMOhIGVudGVkaWFkbyBjb20gYSB2aWRhLi4uIGlzc28gYXTDqSBlbmNvbnRyYXIgWmF0Y2guXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJpZFwiOiBcIlAtMDA4XCIsXHJcbiAgICAgICAgXCJub21lXCI6IFwiUGFyY28gRm9sZ29yZVwiLFxyXG4gICAgICAgIFwic3ViX3RpdHVsb1wiOiBudWxsLFxyXG4gICAgICAgIFwicGFyY2Vpcm9fbWFtb2RvXCI6IFwiS2FuY2hvbcOpXCIsXHJcbiAgICAgICAgXCJyYXJpZGFkZVwiOiBcIlN1cGVyIFJhcmFcIixcclxuICAgICAgICBcImNhdGVnb3JpYVwiOiBcIlBhcmNlaXJvXCIsXHJcbiAgICAgICAgXCJkZXNjcmljYW9cIjogXCJbRU5WSUUgRVNUQSBDQVJUQSBQQVJBIEEgUElMSEEgREUgREVTQ0FSVEVdIEVudmllIHVtYSBjYXJ0YSBwYXJjZWlybyBlbSBqb2dvIGRlIHN1YSBlc2NvbGhhIGRvIHNldSBvcG9uZW50ZSBwYXJhIGEgcGlsaGEgZGUgZGVzY2FydGUuXCIsXHJcbiAgICAgICAgXCJ0ZXh0b19hZGljaW9uYWxcIjogXCJFbGUgw6kgdW0gc3VwZXJzdGFyIG11bmRpYWxtZW50ZSBmb21vc28uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJpZFwiOiBcIlAtMDA5XCIsXHJcbiAgICAgICAgXCJub21lXCI6IFwiTWVndW1pXCIsXHJcbiAgICAgICAgXCJzdWJfdGl0dWxvXCI6IG51bGwsXHJcbiAgICAgICAgXCJwYXJjZWlyb19tYW1vZG9cIjogXCJUaWFcIixcclxuICAgICAgICBcInJhcmlkYWRlXCI6IFwiU3VwZXIgUmFyYVwiLFxyXG4gICAgICAgIFwiY2F0ZWdvcmlhXCI6IFwiUGFyY2Vpcm9cIixcclxuICAgICAgICBcImRlc2NyaWNhb1wiOiBcIltFTlZJRSBFU1RBIENBUlRBIFBBUkEgQSBQSUxIQSBERSBERVNDQVJURV0gTmVndWUgdW1hIGNhcnRhIGRlIG3DoWdpYSBxdWUgbyBzZXUgb3BvbmVudGUgYWNhYm91IGRlIGpvZ2FyLlwiLFxyXG4gICAgICAgIFwidGV4dG9fYWRpY2lvbmFsXCI6IFwiRWxhIMOpIHVtYSDDrWRvbG8gcG9wIHBvcHVsYXIuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJpZFwiOiBcIlMtMDAxXCIsXHJcbiAgICAgICAgXCJub21lXCI6IFwiWmFrZXJcIixcclxuICAgICAgICBcImF0cmlidXRvXCI6IFwiVHJvdsOjb1wiLFxyXG4gICAgICAgIFwicmFyaWRhZGVcIjogXCJDb211bVwiLFxyXG4gICAgICAgIFwiYmF0YWxoYV90aXBvXCI6e1xyXG4gICAgICAgICAgICBcImF0YXF1ZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImRlZmVzYVwiOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImN1c3RvXCI6IDEsXHJcbiAgICAgICAgXCJwb2RlclwiOiAyMDAwLFxyXG4gICAgICAgIFwiZGFub19saXZyb1wiOiAxLFxyXG4gICAgICAgIFwibWFtb2RvXCI6IFwiWmF0Y2ggQmVsbFwiLFxyXG4gICAgICAgIFwiY2F0ZWdvcmlhXCI6IFwiTcOhZ2lhXCIsXHJcbiAgICAgICAgXCJkZXNjcmljYW9cIjogXCJEYW5pZmlxdWUgbyBsaXZybyBkZSBwb2RlcmVzIGRvIHNldSBvcG9uZW50ZSBxdWFuZG8gdm9jw6ogdmVuY2UgY29tbyBhdGFjYW50ZS5cIixcclxuICAgICAgICBcInRleHRvX2FkaWNpb25hbFwiOiBcIkEgcHJpbWVpcmEgbcOhZ2lhIGRlIFphdGNoLiBVbSBhdGFxdWUgZWzDqXRyaWNvIHF1ZSBmYXogWmF0Y2ggZGlzcGFyYXIgcmFpb3MgcGVsYSBib2NhLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiaWRcIjogXCJTLTAwMlwiLFxyXG4gICAgICAgIFwibm9tZVwiOiBcIlpha2VyXCIsXHJcbiAgICAgICAgXCJhdHJpYnV0b1wiOiBcIlRyb3bDo29cIixcclxuICAgICAgICBcInJhcmlkYWRlXCI6IFwiUmFyb1wiLFxyXG4gICAgICAgIFwiYmF0YWxoYV90aXBvXCI6e1xyXG4gICAgICAgICAgICBcImF0YXF1ZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImRlZmVzYVwiOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImN1c3RvXCI6IDIsXHJcbiAgICAgICAgXCJwb2RlclwiOiAyMDAwLFxyXG4gICAgICAgIFwiZGFub19saXZyb1wiOiAyLFxyXG4gICAgICAgIFwibWFtb2RvXCI6IFwiWmF0Y2ggQmVsbFwiLFxyXG4gICAgICAgIFwiY2F0ZWdvcmlhXCI6IFwiTcOhZ2lhXCIsXHJcbiAgICAgICAgXCJkZXNjcmljYW9cIjogXCJEYW5pZmlxdWUgbyBsaXZybyBkZSBwb2RlcmVzIGRvIHNldSBvcG9uZW50ZSBxdWFuZG8gdm9jw6ogdmVuY2UgYSBiYXRhbGhhIGNvbW8gYXRhY2FudGUuXCIsXHJcbiAgICAgICAgXCJ0ZXh0b19hZGljaW9uYWxcIjogXCIxwrogcG9kZXIgZG8gWmF0Y2guIERlcGVuZGVuZG8gZG8gZ3JhdSBkZSBwb2RlciBkZW50cm8gZGUgdm9jw6osIGEgZm9yw6dhIGRvIHBvZGVyIG11ZGEuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJpZFwiOiBcIlMtMDAzXCIsXHJcbiAgICAgICAgXCJub21lXCI6IFwiUmFzaGllbGRcIixcclxuICAgICAgICBcImF0cmlidXRvXCI6IFwiVHJvdsOjb1wiLFxyXG4gICAgICAgIFwicmFyaWRhZGVcIjogXCJJbmNvbXVtXCIsXHJcbiAgICAgICAgXCJiYXRhbGhhX3RpcG9cIjp7XHJcbiAgICAgICAgICAgIFwiYXRhcXVlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICBcImRlZmVzYVwiOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImN1c3RvXCI6IDEsXHJcbiAgICAgICAgXCJwb2RlclwiOiA0MDAwLFxyXG4gICAgICAgIFwiZGFub19saXZyb1wiOiAxLFxyXG4gICAgICAgIFwibWFtb2RvXCI6IFwiWmF0Y2ggQmVsbFwiLFxyXG4gICAgICAgIFwiY2F0ZWdvcmlhXCI6IFwiTcOhZ2lhXCIsXHJcbiAgICAgICAgXCJkZXNjcmljYW9cIjogXCJEYW5pZmlxdWUgbyBsaXZybyBkZSBwb2RlcmVzIGRvIHNldSBvcG9uZW50ZSBxdWFuZG8gdm9jw6ogdmVuY2UgYSBiYXRhbGhhIGNvbW8gZGVmZW5zb3IuXCIsXHJcbiAgICAgICAgXCJ0ZXh0b19hZGljaW9uYWxcIjogXCIywrogcG9kZXIgZG8gWmF0Y2guIENvbSB1bSBjaG9xdWUgZWzDqXRyaWNvLCBlbGUgcmViYXRlIG8gYXRhcXVlIGRlIHVtIG9wb25lbnRlLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiaWRcIjogXCJTLTAwNFwiLFxyXG4gICAgICAgIFwibm9tZVwiOiBcIkppa2VyZG9yXCIsXHJcbiAgICAgICAgXCJhdHJpYnV0b1wiOiBcIlRyb3bDo29cIixcclxuICAgICAgICBcInJhcmlkYWRlXCI6IFwiQ29tdW1cIixcclxuICAgICAgICBcImJhdGFsaGFfdGlwb1wiOntcclxuICAgICAgICAgICAgXCJhdGFxdWVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJkZWZlc2FcIjogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiY3VzdG9cIjogMSxcclxuICAgICAgICBcInBvZGVyXCI6IDIwMDAsXHJcbiAgICAgICAgXCJkYW5vX2xpdnJvXCI6IDEsXHJcbiAgICAgICAgXCJtYW1vZG9cIjogXCJaYXRjaCBCZWxsXCIsXHJcbiAgICAgICAgXCJjYXRlZ29yaWFcIjogXCJNw6FnaWFcIixcclxuICAgICAgICBcImRlc2NyaWNhb1wiOiBcIkRhbmlmaXF1ZSBvIGxpdnJvIGRlIHBvZGVyZXMgZG8gc2V1IG9wb25lbnRlIHF1YW5kbyB2b2PDqiB2ZW5jZSBhIGJhdGFsaGEgY29tbyBhdGFjYW50ZS4gUXVhbmRvIHZvY8OqIGNhdXNhciBkYW5vIGFvIGxpdnJvIGRlIHBvZGVyZXMgZG8gc2V1IG9wb25lbnRlIG91IGZlcmlyIG8gbWFtb2RvIGRvIHNldSBvcG9uZW50ZSwgam9ndWUgdW1hIG1vZWRhOyBzZSBkZXIgY2FyYSwgZWxlcyBuw6NvIHBvZGVtIGpvZ2FyIGNhcnRhcyBkZSBtw6FnaWEgYXTDqSBhIHByw7N4aW1hIEZBU0UgRklOQUwgZGVsZS5cIixcclxuICAgICAgICBcInRleHRvX2FkaWNpb25hbFwiOiBcIjPCuiBwb2RlciBkbyBaYXRjaC4gVW0gcG9kZXIgY29tIHVtYSBmb3LDp2EgbWFnbsOpdGljYSBmb3J0ZSBxdWUgcGFyYWxpc2Egb3MgbW92aW1lbnRvcyBkbyBvcG9uZW50ZS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImlkXCI6IFwiUy0wMDVcIixcclxuICAgICAgICBcIm5vbWVcIjogXCJCYW8gWmFrZXJ1Z2FcIixcclxuICAgICAgICBcImF0cmlidXRvXCI6IFwiVHJvdsOjb1wiLFxyXG4gICAgICAgIFwicmFyaWRhZGVcIjogXCJTdXBlciBSYXJhXCIsXHJcbiAgICAgICAgXCJiYXRhbGhhX3RpcG9cIjp7XHJcbiAgICAgICAgICAgIFwiYXRhcXVlXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiZGVmZXNhXCI6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiY3VzdG9cIjogNixcclxuICAgICAgICBcInBvZGVyXCI6IDYwMDAsXHJcbiAgICAgICAgXCJkYW5vX2xpdnJvXCI6IDMsXHJcbiAgICAgICAgXCJtYW1vZG9cIjogXCJaYXRjaCBCZWxsXCIsXHJcbiAgICAgICAgXCJjYXRlZ29yaWFcIjogXCJNw6FnaWFcIixcclxuICAgICAgICBcImRlc2NyaWNhb1wiOiBcIkRhbmlmaXF1ZSBvIGxpdnJvIGRlIHBvZGVyZXMgZG8gc2V1IG9wb25lbnRlIHF1YW5kbyB2b2PDqiB2ZW5jZSBhIGJhdGFsaGEgY29tbyBhdGFjYW50ZS5cIixcclxuICAgICAgICBcInRleHRvX2FkaWNpb25hbFwiOiBcIjTCuiBwb2RlciBkbyBaYXRjaC4gRWxlIGludm9jYSB1bSByZWzDom1wYWdvIGdpZ2FudGUgZW0gZm9ybWEgZGUgZHJhZ8Ojby5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImlkXCI6IFwiUy0wMjBcIixcclxuICAgICAgICBcIm5vbWVcIjogXCJQb3J1a1wiLFxyXG4gICAgICAgIFwiYXRyaWJ1dG9cIjogXCJcIixcclxuICAgICAgICBcInJhcmlkYWRlXCI6IFwiQ29tdW1cIixcclxuICAgICAgICBcImJhdGFsaGFfdGlwb1wiOntcclxuICAgICAgICAgICAgXCJhdGFxdWVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJkZWZlc2FcIjogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiY3VzdG9cIjogMSxcclxuICAgICAgICBcInBvZGVyXCI6IDIwMDAsXHJcbiAgICAgICAgXCJkYW5vX2xpdnJvXCI6IDAsXHJcbiAgICAgICAgXCJtYW1vZG9cIjogXCJLYW5jaG9tw6lcIixcclxuICAgICAgICBcImNhdGVnb3JpYVwiOiBcIk3DoWdpYVwiLFxyXG4gICAgICAgIFwiZGVzY3JpY2FvXCI6IFwiUXVhbmRvIHZvY8OqIHZlbmNlIGEgYmF0YWxoYSBjb21vIEF0YWNhbnRlLCByZWR1emEgbyBNUCBkbyBzZXUgb3BvbmVudGUgZW0gMy5cIixcclxuICAgICAgICBcInRleHRvX2FkaWNpb25hbFwiOiBcIjHCuiBwb2RlciBkbyBLYW5jaG9tw6kuIEVsZSBwb2RlIHNlIHRyYW5zZm9ybWFyIGVtIHF1YWxxdWVyIGNvaXNhIHF1ZSBkZXNlamFyLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiaWRcIjogXCJTLTAyMVwiLFxyXG4gICAgICAgIFwibm9tZVwiOiBcIktvcG9ydWtcIixcclxuICAgICAgICBcImF0cmlidXRvXCI6IFwiXCIsXHJcbiAgICAgICAgXCJyYXJpZGFkZVwiOiBcIkNvbXVtXCIsXHJcbiAgICAgICAgXCJiYXRhbGhhX3RpcG9cIjp7XHJcbiAgICAgICAgICAgIFwiYXRhcXVlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICBcImRlZmVzYVwiOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImN1c3RvXCI6IDIsXHJcbiAgICAgICAgXCJwb2RlclwiOiBcImVzcGVjaWFsXCIsXHJcbiAgICAgICAgXCJkYW5vX2xpdnJvXCI6IDAsXHJcbiAgICAgICAgXCJtYW1vZG9cIjogXCJLYW5jaG9tw6lcIixcclxuICAgICAgICBcImNhdGVnb3JpYVwiOiBcIk3DoWdpYVwiLFxyXG4gICAgICAgIFwiZGVzY3JpY2FvXCI6IFwiTGFuY2UgdW1hIG1vZWRhIGR1YXMgdmV6ZXM7IHNlIHZvY8OqIHRpcmFyIGNhcmEgcGVsbyBtZW5vcyB1bWEgdmV6LCBuZWd1ZSBvIGF0YXF1ZSBkbyBzZXUgb3BvbmVudGUuXCIsXHJcbiAgICAgICAgXCJ0ZXh0b19hZGljaW9uYWxcIjogXCIywrogcG9kZXIgZG8gS2FuY2hvbcOpLiBVbSBwb2RlciBkZSBlbmNvbGhpbWVudG8gcXVlIG8gZW5mcmFxdWVjZS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImlkXCI6IFwiUy0wMjJcIixcclxuICAgICAgICBcIm5vbWVcIjogXCJTZW9zaGlcIixcclxuICAgICAgICBcImF0cmlidXRvXCI6IFwiXCIsXHJcbiAgICAgICAgXCJyYXJpZGFkZVwiOiBcIkNvbXVtXCIsXHJcbiAgICAgICAgXCJiYXRhbGhhX3RpcG9cIjp7XHJcbiAgICAgICAgICAgIFwiYXRhcXVlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICBcImRlZmVzYVwiOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImN1c3RvXCI6IDEsXHJcbiAgICAgICAgXCJwb2RlclwiOiA0MDAwLFxyXG4gICAgICAgIFwiZGFub19saXZyb1wiOiAwLFxyXG4gICAgICAgIFwibWFtb2RvXCI6IFwiVGlhXCIsXHJcbiAgICAgICAgXCJjYXRlZ29yaWFcIjogXCJNw6FnaWFcIixcclxuICAgICAgICBcImRlc2NyaWNhb1wiOiBcIk5lZ3VlIG8gYXRhcXVlIGRvIHNldSBvcG9uZW50ZSBxdWFuZG8gdm9jw6ogdmVuY2UgYSBiYXRhbGhhIGNvbW8gZGVmZW5zb3IuXCIsXHJcbiAgICAgICAgXCJ0ZXh0b19hZGljaW9uYWxcIjogXCIxwrogcG9kZXIgZGEgVGlhLiBFbGEgcHJvdGVnZSBjb250cmEgdG9kbyBhdGFxdWUgZXhjZXRvIGFxdWVsZXMgcXVlIHbDqm0gZG8gY2jDo28uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJpZFwiOiBcIlMtMDIzXCIsXHJcbiAgICAgICAgXCJub21lXCI6IFwiU2Fpc3VcIixcclxuICAgICAgICBcImF0cmlidXRvXCI6IFwiXCIsXHJcbiAgICAgICAgXCJyYXJpZGFkZVwiOiBcIkNvbXVtXCIsXHJcbiAgICAgICAgXCJiYXRhbGhhX3RpcG9cIjp7XHJcbiAgICAgICAgICAgIFwiYXRhcXVlXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiZGVmZXNhXCI6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImN1c3RvXCI6IDEsXHJcbiAgICAgICAgXCJwb2RlclwiOiAxMDAwLFxyXG4gICAgICAgIFwiZGFub19saXZyb1wiOiAxLFxyXG4gICAgICAgIFwibWFtb2RvXCI6IFwiVGlhXCIsXHJcbiAgICAgICAgXCJjYXRlZ29yaWFcIjogXCJNw6FnaWFcIixcclxuICAgICAgICBcImRlc2NyaWNhb1wiOiBcIkRhbmlmaXF1ZSBvIGxpdnJvIGRlIHBvZGVyZXMgZG8gc2V1IG9wb25lbnRlIHF1YW5kbyB2b2PDqiB2ZW5jZSBhIGJhdGFsaGEgY29tbyBhdGFjYW50ZS5cIixcclxuICAgICAgICBcInRleHRvX2FkaWNpb25hbFwiOiBcIjLCuiBwb2RlciBkYSBUaWEuIEzDom1pbmFzIGRlIHZlbnRvIGNvcnRhbSBvcyBvcG9uZW50ZXMuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJpZFwiOiBcIlMtMDI0XCIsXHJcbiAgICAgICAgXCJub21lXCI6IFwiTWEgU2VzaGllbGRcIixcclxuICAgICAgICBcImF0cmlidXRvXCI6IFwiXCIsXHJcbiAgICAgICAgXCJyYXJpZGFkZVwiOiBcIlN1cGVyIFJhcmFcIixcclxuICAgICAgICBcImJhdGFsaGFfdGlwb1wiOntcclxuICAgICAgICAgICAgXCJhdGFxdWVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJkZWZlc2FcIjogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiY3VzdG9cIjogMyxcclxuICAgICAgICBcInBvZGVyXCI6IDgwMDAsXHJcbiAgICAgICAgXCJkYW5vX2xpdnJvXCI6IDAsXHJcbiAgICAgICAgXCJtYW1vZG9cIjogXCJUaWFcIixcclxuICAgICAgICBcImNhdGVnb3JpYVwiOiBcIk3DoWdpYVwiLFxyXG4gICAgICAgIFwiZGVzY3JpY2FvXCI6IFwiTmVndWUgbyBhdGFxdWUgZG8gc2V1IG9wb25lbnRlIHF1YW5kbyB2b2PDqiB2ZW5jZSBhIGJhdGFsaGEgY29tbyBkZWZlbnNvci5cIixcclxuICAgICAgICBcInRleHRvX2FkaWNpb25hbFwiOiBcIjPCuiBwb2RlciBkYSBUaWEuIMOJIHVtIGRvcyBtYWlzIHBvZGVyb3NvcyBlc2N1ZG9zIGNvbnRyYSBhdGFxdWUgZnJvbnRhbC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImlkXCI6IFwiUy0wMjVcIixcclxuICAgICAgICBcIm5vbWVcIjogXCJWYW1vcyBzYWlyIGRhcXVpIVwiLFxyXG4gICAgICAgIFwiYXRyaWJ1dG9cIjogXCJcIixcclxuICAgICAgICBcInJhcmlkYWRlXCI6IFwiSW5jb211bVwiLFxyXG4gICAgICAgIFwiYmF0YWxoYV90aXBvXCI6e1xyXG4gICAgICAgICAgICBcImF0YXF1ZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgXCJkZWZlc2FcIjogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJjdXN0b1wiOiAwLFxyXG4gICAgICAgIFwicG9kZXJcIjogXCJlc3BlY2lhbFwiLFxyXG4gICAgICAgIFwiZGFub19saXZyb1wiOiAwLFxyXG4gICAgICAgIFwibWFtb2RvXCI6IFwiVG9kb3NcIixcclxuICAgICAgICBcImNhdGVnb3JpYVwiOiBcIk3DoWdpYVwiLFxyXG4gICAgICAgIFwiZGVzY3JpY2FvXCI6IFwiSm9ndWUgdW1hIG1vZWRhIGR1YXMgdmV6ZXM7IHNlIHZvY8OqIG9idGVyIGNhcmEgcGVsbyBtZW5vcyB1bWEgdmV6LCBuZWd1ZSBvIGF0YXF1ZSBkbyBzZXUgb3BvbmVudGUuXCIsXHJcbiAgICAgICAgXCJ0ZXh0b19hZGljaW9uYWxcIjogXCJGdWdpciDDoHMgdmV6ZXMgw6kgYSBtZWxob3IgdMOhdGljYS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImlkXCI6IFwiUy0wMjZcIixcclxuICAgICAgICBcIm5vbWVcIjogXCJQcmVwYXJlLXNlIVwiLFxyXG4gICAgICAgIFwiYXRyaWJ1dG9cIjogXCJcIixcclxuICAgICAgICBcInJhcmlkYWRlXCI6IFwiUmFyb1wiLFxyXG4gICAgICAgIFwiYmF0YWxoYV90aXBvXCI6IHtcclxuICAgICAgICAgICAgXCJhdGFxdWVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJkZWZlc2FcIjogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiY3VzdG9cIjogMCxcclxuICAgICAgICBcInBvZGVyXCI6IFwiZXNwZWNpYWxcIixcclxuICAgICAgICBcImRhbm9fbGl2cm9cIjogMCxcclxuICAgICAgICBcIm1hbW9kb1wiOiBcIlRvZG9zXCIsXHJcbiAgICAgICAgXCJjYXRlZ29yaWFcIjogXCJNw6FnaWFcIixcclxuICAgICAgICBcImRlc2NyaWNhb1wiOiBcIkpvZ3VlIHVtYSBtb2VkYTsgc2Ugb2J0ZXIgY2FyYSwgbyBwcsOzeGltbyBwb2RlciBxdWUgdm9jw6ogam9nYXIgbm8gbWVzbW8gdHVybm8gbsOjbyBwb2RlcsOhIHNlciBkZWZlbmRpZGEuIEVzdGUgcG9kZXIgbsOjbyBwb2RlcsOhIHNlciBkZWZlbmRpZG8uXCIsXHJcbiAgICAgICAgXCJ0ZXh0b19hZGljaW9uYWxcIjogXCJDb250aW51ZSBvbGhhbmRvIHBhcmEgYSBtaW5oYSBtw6NvIGRpcmVpdGEsIE9LP1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiaWRcIjogXCJTLTAyN1wiLFxyXG4gICAgICAgIFwibm9tZVwiOiBcIk1hbnRlbmhhLXNlIGZpcm1lIVwiLFxyXG4gICAgICAgIFwiYXRyaWJ1dG9cIjogXCJcIixcclxuICAgICAgICBcInJhcmlkYWRlXCI6IFwiQ29tdW1cIixcclxuICAgICAgICBcImJhdGFsaGFfdGlwb1wiOiB7XHJcbiAgICAgICAgICAgIFwiYXRhcXVlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICBcImRlZmVzYVwiOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImN1c3RvXCI6IDAsXHJcbiAgICAgICAgXCJwb2RlclwiOiBcImVzcGVjaWFsXCIsXHJcbiAgICAgICAgXCJkYW5vX2xpdnJvXCI6IDAsXHJcbiAgICAgICAgXCJtYW1vZG9cIjogXCJUb2Rvc1wiLFxyXG4gICAgICAgIFwiY2F0ZWdvcmlhXCI6IFwiTcOhZ2lhXCIsXHJcbiAgICAgICAgXCJkZXNjcmljYW9cIjogXCJKb2d1ZSB1bWEgbW9lZGEgZHVhcyB2ZXplczsgc2Ugdm9jw6ogb2J0ZXIgY2FyYSBwZWxvIG1lbm9zIHVtYSB2ZXosIHJlZHV6YSBvIGRhbm8gcXVlIHZvY8OqIG9idGVyIG5lc3RlIHR1cm5vIGVtIDEuXCIsXHJcbiAgICAgICAgXCJ0ZXh0b19hZGljaW9uYWxcIjogXCJTZW0gY2hhbmNlIC0gTsOjbyB2b3UgZGVpeGFyIG5pbmd1w6ltIHBhc3NhciBwb3IgYXF1aS5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImlkXCI6IFwiRS0wMDFcIixcclxuICAgICAgICBcIm5vbWVcIjogXCJBIHZvbnRhZGUgZGUgcHJvdGVnZXJcIixcclxuICAgICAgICBcInJhcmlkYWRlXCI6IFwiQ29tdW1cIixcclxuICAgICAgICBcImJhdGFsaGFfdGlwb1wiOntcclxuICAgICAgICAgICAgXCJhdGFxdWVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJkZWZlc2FcIjogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiY3VzdG9cIjogMCxcclxuICAgICAgICBcImNhdGVnb3JpYVwiOiBcIkV2ZW50b1wiLFxyXG4gICAgICAgIFwiZGVzY3JpY2FvXCI6IFwiQWRpY2lvbmUgMzAwMCBkZSBwb2RlciBwYXJhIDEgZGUgc3VhcyBjYXJ0YXMgbWFtb2RvIGRlIHN1YSBlc2NvbGhhIGR1cmFudGUgbyBwcsOzeGltbyB0dXJubyBkbyBzZXUgb3BvbmVudGUuXCIsXHJcbiAgICAgICAgXCJ0ZXh0b19hZGljaW9uYWxcIjogXCJPIHBvZGVyIGZpY2EgY2FkYSB2ZXogbWFpcyBmb3J0ZSDDoCBtZWRpZGEgcXVlIHBlbnNhbW9zIG5hcyBwZXNzb2FzIHF1ZSBxdWVyZW1vcyBwcm90ZWdlci5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImlkXCI6IFwiRS0wMDJcIixcclxuICAgICAgICBcIm5vbWVcIjogXCJUaW5hXCIsXHJcbiAgICAgICAgXCJyYXJpZGFkZVwiOiBcIkNvbXVtXCIsXHJcbiAgICAgICAgXCJiYXRhbGhhX3RpcG9cIjp7XHJcbiAgICAgICAgICAgIFwiYXRhcXVlXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiZGVmZXNhXCI6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImN1c3RvXCI6IDIsXHJcbiAgICAgICAgXCJjYXRlZ29yaWFcIjogXCJFdmVudG9cIixcclxuICAgICAgICBcImRlc2NyaWNhb1wiOiBcIkFtYm9zIG9zIGpvZ2Fkb3JlcyBuw6NvIHBvZGVtIGpvZ2FyIG5lbmh1bWEgY2FydGEgZGUgcG9kZXIgYXTDqSBhIHByw7N4aW1hIGZhc2UgZmluYWwgZG8gc2V1IG9wb25lbnRlLlwiLFxyXG4gICAgICAgIFwidGV4dG9fYWRpY2lvbmFsXCI6IFwiQSBib25lY2EgcXVlIGEgTG9yaSBmZXogcGFyYSBLb2x1bHUuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJpZFwiOiBcIkUtMDAzXCIsXHJcbiAgICAgICAgXCJub21lXCI6IFwiQXR1bSBkZSBOYWRhZGVpcmEgQW1hcmVsYVwiLFxyXG4gICAgICAgIFwicmFyaWRhZGVcIjogXCJDb211bVwiLFxyXG4gICAgICAgIFwiYmF0YWxoYV90aXBvXCI6e1xyXG4gICAgICAgICAgICBcImF0YXF1ZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImRlZmVzYVwiOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJjdXN0b1wiOiAwLFxyXG4gICAgICAgIFwiY2F0ZWdvcmlhXCI6IFwiRXZlbnRvXCIsXHJcbiAgICAgICAgXCJkZXNjcmljYW9cIjogXCJBZGljaW9uZSAyIE1QLlwiLFxyXG4gICAgICAgIFwidGV4dG9fYWRpY2lvbmFsXCI6IFwiQ29taWRhIGZhdm9yaXRhIGRvIFphdGNoLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiaWRcIjogXCJFLTAwNFwiLFxyXG4gICAgICAgIFwibm9tZVwiOiBcIkN1cnJ5IGRhIEFtaXphZGVcIixcclxuICAgICAgICBcInJhcmlkYWRlXCI6IFwiSW5jb211bVwiLFxyXG4gICAgICAgIFwiYmF0YWxoYV90aXBvXCI6e1xyXG4gICAgICAgICAgICBcImF0YXF1ZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImRlZmVzYVwiOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJjdXN0b1wiOiA1LFxyXG4gICAgICAgIFwiY2F0ZWdvcmlhXCI6IFwiRXZlbnRvXCIsXHJcbiAgICAgICAgXCJkZXNjcmljYW9cIjogXCJSZWR1eiBvIE1QIGRlIHRvZG9zIG9zIGpvZ2Fkb3JlcyBwYXJhIDAuXCIsXHJcbiAgICAgICAgXCJ0ZXh0b19hZGljaW9uYWxcIjogXCJLaXlvIGZleiBvIG1lbGhvcig/KSBjdXJyeSBjb20gYSBhanVkYSBkb3Mgc2V1cyBhbWlnb3MhXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJpZFwiOiBcIkUtMDA4XCIsXHJcbiAgICAgICAgXCJub21lXCI6IFwiU3V6eSBNaXp1bm9cIixcclxuICAgICAgICBcInJhcmlkYWRlXCI6IFwiSW5jb211bVwiLFxyXG4gICAgICAgIFwiYmF0YWxoYV90aXBvXCI6e1xyXG4gICAgICAgICAgICBcImF0YXF1ZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImRlZmVzYVwiOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJjdXN0b1wiOiAwLFxyXG4gICAgICAgIFwiY2F0ZWdvcmlhXCI6IFwiRXZlbnRvXCIsXHJcbiAgICAgICAgXCJkZXNjcmljYW9cIjogXCJBbWJvcyBvcyBqb2dhZG9yZXMgbsOjbyBwb2RlbSBhcGxpY2FyIHF1YWxxdWVyIGVmZWl0b3MgZGUgY2FydGFzIGRlIHBhcmNlaXJvcyBlbSBqb2dvIGR1cmFudGUgZXN0ZSB0dXJuby5cIixcclxuICAgICAgICBcInRleHRvX2FkaWNpb25hbFwiOiBcIkNvbGVnYSBkZSBjbGFzc2UgZG8gS2l5bywgZWxhIG8gZW50ZW5kZSBtdWl0byBiZW0uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJpZFwiOiBcIkUtMDA5XCIsXHJcbiAgICAgICAgXCJub21lXCI6IFwiUmVpIEJvbmRvc29cIixcclxuICAgICAgICBcInJhcmlkYWRlXCI6IFwiSW5jb211bVwiLFxyXG4gICAgICAgIFwiYmF0YWxoYV90aXBvXCI6e1xyXG4gICAgICAgICAgICBcImF0YXF1ZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImRlZmVzYVwiOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJjdXN0b1wiOiAzLFxyXG4gICAgICAgIFwiY2F0ZWdvcmlhXCI6IFwiRXZlbnRvXCIsXHJcbiAgICAgICAgXCJkZXNjcmljYW9cIjogXCJBZGljaW9uZSAzMDAwIGRlIHBvZGVyIGEgMSBkYXMgc3VhcyBjYXJ0YXMgbWFtb2RvIGRlIHN1YSBlc2NvbGhhIGR1cmFudGUgZXN0ZSB0dXJuby5cIixcclxuICAgICAgICBcInRleHRvX2FkaWNpb25hbFwiOiBcIkZpcXVlaSB0w6NvIGNoYXRlYWRvIHF1YW5kbyB2aSBLb2x1bHUgZGVzYXBhcmVjZXIgZGUgdm9sdGEgcGFyYSBvIG11bmRvIG1hbW9kby5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImlkXCI6IFwiRS0wMTBcIixcclxuICAgICAgICBcIm5vbWVcIjogXCJLaXlvIEJvbmRvc29cIixcclxuICAgICAgICBcInJhcmlkYWRlXCI6IFwiSW5jb211bVwiLFxyXG4gICAgICAgIFwiYmF0YWxoYV90aXBvXCI6e1xyXG4gICAgICAgICAgICBcImF0YXF1ZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImRlZmVzYVwiOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJjdXN0b1wiOiAzLFxyXG4gICAgICAgIFwiY2F0ZWdvcmlhXCI6IFwiRXZlbnRvXCIsXHJcbiAgICAgICAgXCJkZXNjcmljYW9cIjogXCJVc2UgbyBlZmVpdG8gZGEgY2FydGEgcGFyY2Vpcm8gZG8gc2V1IG9wb25lbnRlLCBxdWUgZnVuY2lvbmEgcGFyYSBhcyBjYXJ0YXMgbWFtb2RvIGRlbGUsIGVtIDEgZGUgc3VhcyBjYXJ0YXMgbWFtb2RvLCBlbSB2ZXogZGlzc28uIEEgY2FydGEgcGFyY2Vpcm8gbsOjbyDDqSBlbnZpYWRhIHBhcmEgYSBwaWxoYSBkZSBkZXNjYXJ0ZSBhcMOzcyBvIHVzby5cIixcclxuICAgICAgICBcInRleHRvX2FkaWNpb25hbFwiOiBcIkhvamUsIEtpeW8gZGUgcmVwZW50ZSDDqSBnZW50aWwgZSBlc3TDoSBjb21lbmRvIGF0dW0gZGUgbmFkYWRlaXJhIGFtYXJlbGEgY3J1LiBBbGdvIHBhcmVjZSBkaWZlcmVudGUuLi5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImlkXCI6IFwiRS0wMTFcIixcclxuICAgICAgICBcIm5vbWVcIjogXCJGb2xnb3JlIG8gSG9tZW0gZGUgQcOnb1wiLFxyXG4gICAgICAgIFwicmFyaWRhZGVcIjogXCJJbmNvbXVtXCIsXHJcbiAgICAgICAgXCJiYXRhbGhhX3RpcG9cIjp7XHJcbiAgICAgICAgICAgIFwiYXRhcXVlXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiZGVmZXNhXCI6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImN1c3RvXCI6IDMsXHJcbiAgICAgICAgXCJjYXRlZ29yaWFcIjogXCJFdmVudG9cIixcclxuICAgICAgICBcImRlc2NyaWNhb1wiOiBcIkpvZ3VlIHVtYSBtb2VkYTsgc2UgZGVyIGNhcmEsIHNlbGVjaW9uZSB1bWEgY2FydGEgcGFyY2Vpcm8gZGEgc3VhIHBpbGhhIGRlIGRlc2NhcnRlIGUgYW5leGUtYSBhIHVtYSBjYXJ0YSBtYW1vZG8gZW0gam9nby4gU2UgZGVyIGNvcm9hLCB2b2PDqiBwb2RlIGNvbnRpbnVhciBqb2dhbmRvIGF0w6kgc2FpciBjYXJhLCBwYWdhbmRvIDIgTVAgcGFyYSBjYWRhIG9wb3J0dW5pZGFkZS5cIixcclxuICAgICAgICBcInRleHRvX2FkaWNpb25hbFwiOiBcIkZvbGdvcmUgbyBJbnZlbmPDrXZlbCB+LiBGb2xnb3JlIG8gSG9tZW0gZGUgQcOnbyB+fiFcIlxyXG4gICAgfVxyXG5dIiwiY2xhc3MgQ2FyZHtcclxuXHJcbiAgICBcclxuXHJcbiAgICBwcml2YXRlIG5vbWU6IHN0cmluZztcclxuICAgIHByaXZhdGUgY29kaWdvOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGltZzogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSByYXJpZGFkZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBkZXNjcmljYW86IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICAgIHByaXZhdGUgdGV4dG9fYWRpY2lvbmFsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgY29uc3RydWN0b3Iobm9tZTpzdHJpbmcsIGNvZGlnbzpzdHJpbmcsIGltZzpzdHJpbmcsIHJhcmlkYWRlOnN0cmluZywgZGVzY3JpY2FvPzpzdHJpbmcsIHRleHRvX2FkaWNpb25hbD86c3RyaW5nKXtcclxuICAgICAgICB0aGlzLm5vbWUgPSBub21lO1xyXG4gICAgICAgIHRoaXMuY29kaWdvID0gY29kaWdvO1xyXG4gICAgICAgIHRoaXMuaW1nID0gaW1nO1xyXG4gICAgICAgIHRoaXMucmFyaWRhZGUgPSByYXJpZGFkZTtcclxuICAgICAgICB0aGlzLmRlc2NyaWNhbyA9IGRlc2NyaWNhbztcclxuICAgICAgICB0aGlzLnRleHRvX2FkaWNpb25hbCA9IHRleHRvX2FkaWNpb25hbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0X25vbWUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5ub21lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRfY29kaWdvKCk6c3RyaW5ne1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvZGlnbztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0X2ltZygpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmltZztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDsiLCJpbXBvcnQgQ2FyZCBmcm9tIFwiLi9DYXJkXCI7XHJcblxyXG5jbGFzcyBFdmVudG8gZXh0ZW5kcyBDYXJke1xyXG4gICAgcHJpdmF0ZSBpc19hdGFxdWU6Ym9vbGVhbiB8IHVuZGVmaW5lZDtcclxuICAgIHByaXZhdGUgaXNfZGVmZXNhOmJvb2xlYW4gfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgbm9tZTpzdHJpbmcsXHJcbiAgICAgICAgY29kaWdvOnN0cmluZyxcclxuICAgICAgICBpbWc6c3RyaW5nLFxyXG4gICAgICAgIHJhcmlkYWRlOnN0cmluZyxcclxuICAgICAgICBkZXNjcmljYW86c3RyaW5nLFxyXG4gICAgICAgIHRleHRvX2FkaWNpb25hbDpzdHJpbmcsXHJcbiAgICAgICAgaXNfYXRhcXVlOmJvb2xlYW4gfCB1bmRlZmluZWQsXHJcbiAgICAgICAgaXNfZGVmZXNhOmJvb2xlYW4gfCB1bmRlZmluZWRcclxuICAgICl7XHJcbiAgICAgICAgc3VwZXIobm9tZSwgY29kaWdvLCBpbWcsIHJhcmlkYWRlLCBkZXNjcmljYW8sIHRleHRvX2FkaWNpb25hbCk7XHJcblxyXG4gICAgICAgIHRoaXMuaXNfYXRhcXVlID0gaXNfYXRhcXVlID8/IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNfZGVmZXNhID0gaXNfZGVmZXNhID8/IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFdmVudG8iLCJpbXBvcnQgUGFnaW5hIGZyb20gXCIuL1BhZ2luYVwiO1xyXG5cclxuY2xhc3MgTGl2cm97XHJcbiAgICBwcml2YXRlIHBhZ2luYXM6UGFnaW5hW10gPSBbXTtcclxuICAgIHByaXZhdGUgcGFnZV92aWV3X2xlZnQ6bnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgcGFnZV92aWV3X3JpZ2h0Om51bWJlciA9IDE7XHJcblxyXG4gICAgcHVibGljIGFkZF9wYWdlKHBhZ2U6UGFnaW5hKXtcclxuICAgICAgICB0aGlzLnBhZ2luYXMucHVzaChwYWdlKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBPcmRlbmFyIExpdnJvICovXHJcbiAgICBwdWJsaWMgc29ydF9wYWdlcygpe1xyXG4gICAgICAgIHRoaXMucGFnaW5hcy5zb3J0KChhOlBhZ2luYSwgYjpQYWdpbmEpPT57XHJcbiAgICAgICAgICAgIGlmKGEuZ2V0X3BhZ2VfbnVtYmVyKCkgPiBiLmdldF9wYWdlX251bWJlcigpKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoYS5nZXRfcGFnZV9udW1iZXIoKSA8IGIuZ2V0X3BhZ2VfbnVtYmVyKCkpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHByaW50X2xpdnJvKCl7XHJcbiAgICAgICAgdGhpcy5wYWdpbmFzLmZvckVhY2goKHBhZ2luYSk9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocGFnaW5hKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgZ2V0X3BhZ2Vfdmlld19sZWZ0KCk6bnVtYmVye1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhZ2Vfdmlld19sZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRfcGFnZV92aWV3X3JpZ2h0KCk6bnVtYmVye1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhZ2Vfdmlld19yaWdodDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqIFNlZ3VpciBwYXJhIGEgcHLDs3hpbWEgcMOhZ2luYSBkbyBsaXZybyAqL1xyXG4gICAgcHVibGljIG5leHRfcGFnZV92aWV3KCl7XHJcbiAgICAgICAgdGhpcy5wYWdlX3ZpZXdfbGVmdCA9IHRoaXMucGFnZV92aWV3X2xlZnQgKyAyO1xyXG4gICAgICAgIHRoaXMucGFnZV92aWV3X3JpZ2h0ID0gdGhpcy5wYWdlX3ZpZXdfcmlnaHQgKyAyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwcmV2X3BhZ2Vfdmlldygpe1xyXG4gICAgICAgIHRoaXMucGFnZV92aWV3X3JpZ2h0ID0gdGhpcy5wYWdlX3ZpZXdfcmlnaHQgLSAyO1xyXG4gICAgICAgIHRoaXMucGFnZV92aWV3X2xlZnQgPSB0aGlzLnBhZ2Vfdmlld19sZWZ0IC0gMjtcclxuICAgIH1cclxuICAgIFxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpdnJvOyIsImltcG9ydCBNYW1vZG8gZnJvbSBcIi4uL01hbW9kb1wiO1xyXG5pbXBvcnQgUGFyY2Vpcm8gZnJvbSBcIi4uL1BhcmNlaXJvXCI7XHJcbmltcG9ydCBQb2RlciBmcm9tIFwiLi4vUG9kZXJcIjtcclxuaW1wb3J0IEV2ZW50byBmcm9tIFwiLi4vRXZlbnRvXCI7XHJcblxyXG5jbGFzcyBQYWdpbmF7XHJcblxyXG4gICAgcHJpdmF0ZSBjYXJkX3BhZ2luYTogTWFtb2RvIHwgUG9kZXIgfCBQYXJjZWlybyB8IEV2ZW50byB8IHVuZGVmaW5lZDtcclxuICAgIHByaXZhdGUgcGFnZV9udW1iZXI6IG51bWJlcjtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoY2FyZF9wYWdpbmE6IE1hbW9kbyB8IFBvZGVyIHwgUGFyY2Vpcm8gfCBFdmVudG8gfCB1bmRlZmluZWQsIHBhZ2VfbnVtYmVyOm51bWJlcil7XHJcbiAgICAgICAgdGhpcy5jYXJkX3BhZ2luYSA9IGNhcmRfcGFnaW5hO1xyXG4gICAgICAgIHRoaXMucGFnZV9udW1iZXIgPSBwYWdlX251bWJlcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0X3BhZ2VfbnVtYmVyKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnZV9udW1iZXI7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hOyIsImltcG9ydCBDYXJkIGZyb20gXCIuL0NhcmRcIjtcclxuXHJcbmNsYXNzIE1hbW9kbyBleHRlbmRzIENhcmR7XHJcbiAgICBwcml2YXRlIHBhcmNlaXJvOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHBvZGVyOiBudW1iZXIgfCBzdHJpbmcgfCB1bmRlZmluZWQgO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIG5vbWU6c3RyaW5nLFxyXG4gICAgICAgIGNvZGlnbzpzdHJpbmcsXHJcbiAgICAgICAgaW1nOnN0cmluZyxcclxuICAgICAgICByYXJpZGFkZTpzdHJpbmcsXHJcbiAgICAgICAgZGVzY3JpY2FvOnN0cmluZyxcclxuICAgICAgICB0ZXh0b19hZGljaW9uYWw6c3RyaW5nLFxyXG4gICAgICAgIHBhcmNlaXJvOnN0cmluZyB8IHVuZGVmaW5lZCxcclxuICAgICAgICBwb2RlcjpudW1iZXIgfCBzdHJpbmcgfCB1bmRlZmluZWRcclxuICAgICl7XHJcbiAgICAgICAgc3VwZXIobm9tZSwgY29kaWdvLCBpbWcsIHJhcmlkYWRlLCBkZXNjcmljYW8sIHRleHRvX2FkaWNpb25hbCk7XHJcbiAgICAgICAgdGhpcy5wYXJjZWlybyA9IHBhcmNlaXJvID8/ICcnO1xyXG4gICAgICAgIHRoaXMucG9kZXIgPSBwb2RlciA/PyAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRfcGFyY2Vpcm8oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXJjZWlybztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0X3BvZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9kZXI7XHJcbiAgICB9XHJcblxyXG4gICBcclxuICAgIFxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFtb2RvOyIsImltcG9ydCBDYXJkIGZyb20gXCIuL0NhcmRcIjtcclxuXHJcbmNsYXNzIFBhcmNlaXJvIGV4dGVuZHMgQ2FyZHtcclxuICAgIHByaXZhdGUgcGFyY2Vpcm9fbWFtb2RvOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgbm9tZTpzdHJpbmcsXHJcbiAgICAgICAgY29kaWdvOnN0cmluZyxcclxuICAgICAgICBpbWc6c3RyaW5nLFxyXG4gICAgICAgIHJhcmlkYWRlOnN0cmluZyxcclxuICAgICAgICBkZXNjcmljYW86c3RyaW5nLFxyXG4gICAgICAgIHRleHRvX2FkaWNpb25hbDpzdHJpbmcsXHJcbiAgICAgICAgcGFyY2Vpcm9fbWFtb2RvOnN0cmluZyB8IHVuZGVmaW5lZFxyXG4gICAgKXtcclxuICAgICAgICBzdXBlcihub21lLCBjb2RpZ28sIGltZywgcmFyaWRhZGUsIGRlc2NyaWNhbywgdGV4dG9fYWRpY2lvbmFsKTtcclxuICAgICAgICB0aGlzLnBhcmNlaXJvX21hbW9kbyA9IHBhcmNlaXJvX21hbW9kbztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFyY2Vpcm87IiwiaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZFwiO1xyXG5cclxuY2xhc3MgUG9kZXIgZXh0ZW5kcyBDYXJke1xyXG4gICAgcHJpdmF0ZSBhdHJpYnV0bzogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gICAgcHJpdmF0ZSBwb2RlcjogbnVtYmVyIHwgc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gICAgcHJpdmF0ZSBkYW5vX2xpdnJvOiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcbiAgICBwcml2YXRlIG1hbW9kbzogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gICAgcHJpdmF0ZSBpc19hdGFxdWU6Ym9vbGVhbiB8IHVuZGVmaW5lZDtcclxuICAgIHByaXZhdGUgaXNfZGVmZXNhOmJvb2xlYW4gfCB1bmRlZmluZWQ7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIG5vbWU6c3RyaW5nLFxyXG4gICAgICAgIGNvZGlnbzpzdHJpbmcsXHJcbiAgICAgICAgaW1nOnN0cmluZyxcclxuICAgICAgICByYXJpZGFkZTpzdHJpbmcsXHJcbiAgICAgICAgZGVzY3JpY2FvOnN0cmluZyxcclxuICAgICAgICB0ZXh0b19hZGljaW9uYWw6c3RyaW5nLFxyXG4gICAgICAgIGF0cmlidXRvOnN0cmluZyB8IHVuZGVmaW5lZCxcclxuICAgICAgICBwb2RlcjpudW1iZXIgfCBzdHJpbmcgfCB1bmRlZmluZWQsXHJcbiAgICAgICAgZGFub19saXZybzpudW1iZXIgfCB1bmRlZmluZWQsXHJcbiAgICAgICAgbWFtb2RvOnN0cmluZyB8IHVuZGVmaW5lZCxcclxuICAgICAgICBpc19hdGFxdWU6Ym9vbGVhbiB8IHVuZGVmaW5lZCxcclxuICAgICAgICBpc19kZWZlc2E6Ym9vbGVhbiB8IHVuZGVmaW5lZFxyXG4gICAgKXtcclxuICAgICAgICBzdXBlcihub21lLCBjb2RpZ28sIGltZywgcmFyaWRhZGUsIGRlc2NyaWNhbywgdGV4dG9fYWRpY2lvbmFsKTtcclxuICAgICAgICB0aGlzLmF0cmlidXRvID0gYXRyaWJ1dG87XHJcbiAgICAgICAgdGhpcy5wb2RlciA9IHBvZGVyO1xyXG4gICAgICAgIHRoaXMuZGFub19saXZybyA9IGRhbm9fbGl2cm87XHJcbiAgICAgICAgdGhpcy5tYW1vZG8gPSBtYW1vZG8gPz8gJyc7XHJcbiAgICAgICAgdGhpcy5pc19hdGFxdWUgPSBpc19hdGFxdWUgPz8gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc19kZWZlc2EgPSBpc19kZWZlc2EgPz8gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvZGVyOyIsIlxyXG5leHBvcnQgY29uc3QgZGVja19zdGFydGVyX3NldF8xID0gKCkgPT57XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICBcIk0tMDAxXCIsXHJcbiAgICAgICAgICAgIFwiUy0wMjVcIixcclxuICAgICAgICAgICAgXCJTLTAwMVwiLFxyXG4gICAgICAgICAgICBcIlAtMDAxXCIsXHJcbiAgICAgICAgICAgIFwiUy0wMDFcIixcclxuICAgICAgICAgICAgXCJNLTAxNFwiLFxyXG4gICAgICAgICAgICBcIlMtMDI3XCIsXHJcbiAgICAgICAgICAgIFwiUC0wMDlcIixcclxuICAgICAgICAgICAgXCJTLTAyMlwiLFxyXG4gICAgICAgICAgICBcIlMtMDI2XCIsXHJcbiAgICAgICAgICAgIFwiUy0wMDFcIixcclxuICAgICAgICAgICAgXCJTLTAwM1wiLFxyXG4gICAgICAgICAgICBcIkUtMDA0XCIsXHJcbiAgICAgICAgICAgIFwiTS0wMTJcIixcclxuICAgICAgICAgICAgXCJTLTAwM1wiLFxyXG4gICAgICAgICAgICBcIlAtMDA4XCIsXHJcbiAgICAgICAgICAgIFwiUy0wMjBcIixcclxuICAgICAgICAgICAgXCJTLTAwNFwiLFxyXG4gICAgICAgICAgICBcIkUtMDA5XCIsXHJcbiAgICAgICAgICAgIFwiRS0wMDNcIixcclxuICAgICAgICAgICAgXCJTLTAyM1wiLFxyXG4gICAgICAgICAgICBcIkUtMDA4XCIsXHJcbiAgICAgICAgICAgIFwiUy0wMjJcIixcclxuICAgICAgICAgICAgXCJFLTAwMVwiLFxyXG4gICAgICAgICAgICBcIlMtMDIzXCIsXHJcbiAgICAgICAgICAgIFwiRS0wMTBcIixcclxuICAgICAgICAgICAgXCJTLTAwMlwiLFxyXG4gICAgICAgICAgICBcIkUtMDExXCIsXHJcbiAgICAgICAgICAgIFwiUy0wMjFcIixcclxuICAgICAgICAgICAgXCJFLTAwMlwiLFxyXG4gICAgICAgICAgICBcIlMtMDI0XCIsXHJcbiAgICAgICAgICAgIFwiUy0wMDVcIlxyXG4gICAgICAgIF1cclxuICAgIClcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IE1hbW9kbyBmcm9tIFwiLi9jbGFzc2VzL01hbW9kb1wiO1xyXG5pbXBvcnQgUG9kZXIgZnJvbSBcIi4vY2xhc3Nlcy9Qb2RlclwiO1xyXG5pbXBvcnQgUGFyY2Vpcm8gZnJvbSBcIi4vY2xhc3Nlcy9QYXJjZWlyb1wiO1xyXG5pbXBvcnQgRXZlbnRvIGZyb20gXCIuL2NsYXNzZXMvRXZlbnRvXCI7XHJcblxyXG5pbXBvcnQgUGFnaW5hIGZyb20gXCIuL2NsYXNzZXMvTGl2cm8vUGFnaW5hXCI7XHJcbmltcG9ydCBMaXZybyBmcm9tIFwiLi9jbGFzc2VzL0xpdnJvL0xpdnJvXCI7XHJcblxyXG5cclxuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9jbGFzc2VzL3Npc3RlbWEvUGxheWVyXCI7XHJcbmltcG9ydCB7IGRlY2tfc3RhcnRlcl9zZXRfMSB9IGZyb20gXCIuL2NsYXNzZXMvc2lzdGVtYS9EZWNrTW9udGFkb3NcIjtcclxuXHJcbmltcG9ydCB7YmRfY2FyZH0gZnJvbSBcIi4vYmRfY2FyZHNcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBmaWx0cm9fY2FyZChpZDpzdHJpbmcpe1xyXG4gICAgY29uc3QgY2FyZCA9IGJkX2NhcmQuZmluZCgodmFsdWUpPT57XHJcbiAgICAgICAgcmV0dXJuICh2YWx1ZS5pZCA9PT0gaWQpXHJcbiAgICB9KVxyXG5cclxuICAgIHN3aXRjaChjYXJkPy5jYXRlZ29yaWEpe1xyXG4gICAgICAgIGNhc2UgJ0V2ZW50byc6XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXZlbnRvKGNhcmQubm9tZSwgY2FyZC5pZCwgYC4vcHVibGljL3NyYy9pbWcvY2FyZHMvJHtjYXJkLmlkfS8ke2NhcmQuaWR9LndlYnBgLCBjYXJkLnJhcmlkYWRlLCBjYXJkLmRlc2NyaWNhbywgY2FyZC50ZXh0b19hZGljaW9uYWwsIGNhcmQuYmF0YWxoYV90aXBvPy5hdGFxdWUsIGNhcmQuYmF0YWxoYV90aXBvPy5kZWZlc2EpO1xyXG4gICAgICAgIGNhc2UgJ03DoWdpYSc6XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUG9kZXIoY2FyZC5ub21lLCBjYXJkLmlkLCBgLi9wdWJsaWMvc3JjL2ltZy9jYXJkcy8ke2NhcmQuaWR9LyR7Y2FyZC5pZH0ud2VicGAsIGNhcmQucmFyaWRhZGUsIGNhcmQuZGVzY3JpY2FvLCBjYXJkLnRleHRvX2FkaWNpb25hbCwgY2FyZC5hdHJpYnV0bywgY2FyZC5wb2RlciwgY2FyZC5kYW5vX2xpdnJvLCBjYXJkLm1hbW9kbywgY2FyZC5iYXRhbGhhX3RpcG8/LmF0YXF1ZSwgY2FyZC5iYXRhbGhhX3RpcG8/LmRlZmVzYSlcclxuICAgICAgICBjYXNlICdNYW1vZG8nOlxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1hbW9kbyhjYXJkLm5vbWUsIGNhcmQuaWQsIGAuL3B1YmxpYy9zcmMvaW1nL2NhcmRzLyR7Y2FyZC5pZH0vJHtjYXJkLmlkfS53ZWJwYCwgY2FyZC5yYXJpZGFkZSwgY2FyZC5kZXNjcmljYW8sIGNhcmQudGV4dG9fYWRpY2lvbmFsLCBjYXJkLnBhcmNlaXJvLCBjYXJkLnBvZGVyKTtcclxuICAgICAgICBjYXNlICdQYXJjZWlybyc6XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUGFyY2Vpcm8oY2FyZC5ub21lLCBjYXJkLmlkLCBgLi9wdWJsaWMvc3JjL2ltZy9jYXJkcy8ke2NhcmQuaWR9LyR7Y2FyZC5pZH0ud2VicGAsIGNhcmQucmFyaWRhZGUsIGNhcmQuZGVzY3JpY2FvLCBjYXJkLnRleHRvX2FkaWNpb25hbCwgY2FyZC5wYXJjZWlyb19tYW1vZG8pO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTsOjbyBpbmRlbnRpZmljYWRvXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb25zdHJ1aXJfbGl2cm8oYXJyYXlfcGFnaW5hczpzdHJpbmdbXSwgbGl2cm86TGl2cm8pe1xyXG4gICAgZm9yKGxldCBbaW5kZXgsIHZhbHVlXSBvZiBhcnJheV9wYWdpbmFzLmVudHJpZXMoKSl7XHJcblxyXG4gICAgICAgIGNvbnN0IGNhcmQ6RXZlbnRvIHwgUG9kZXIgfCBNYW1vZG8gfCBQYXJjZWlybyB8IHVuZGVmaW5lZCA9IGZpbHRyb19jYXJkKHZhbHVlKTtcclxuICAgICAgICBpZihjYXJkKXtcclxuICAgICAgICAgICAgY29uc3QgcGFnaW5hOlBhZ2luYSA9IG5ldyBQYWdpbmEoY2FyZCxpbmRleCk7XHJcbiAgICAgICAgICAgIGxpdnJvLmFkZF9wYWdlKHBhZ2luYSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLyoqIERlY2xhcmHDp8OjbyBkb3MgbGl2cm9zICovXHJcbmNvbnN0IExpdnJvMSA9IG5ldyBMaXZybygpO1xyXG5jb25zdCBMaXZybzIgPSBuZXcgTGl2cm8oKTtcclxuXHJcbi8qKiBMaXN0YSBkZSBJRCBkYXMgY2FydGFzIGRvIGRlY2sgU3RhcnRlciBTZXQgMSAqL1xyXG5jb25zdCBhcnJheV9wYWdpbmFzOnN0cmluZ1tdID0gZGVja19zdGFydGVyX3NldF8xKCk7XHJcblxyXG4vKiogTW9uc3RhbmRvIG8gbGl2cm8gKi9cclxuY29uc3RydWlyX2xpdnJvKGFycmF5X3BhZ2luYXMsIExpdnJvMSk7XHJcblxyXG5cclxuTGl2cm8xLnByaW50X2xpdnJvKCk7XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9