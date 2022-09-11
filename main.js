/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/PlatformType.ts
var PlatformType;
(function (PlatformType) {
    PlatformType[PlatformType["NULL"] = 0] = "NULL";
    PlatformType[PlatformType["COINMERCE"] = 1] = "COINMERCE";
    PlatformType[PlatformType["HOTBIT"] = 2] = "HOTBIT";
    PlatformType[PlatformType["KUCOIN"] = 3] = "KUCOIN";
    PlatformType[PlatformType["BINANCE"] = 4] = "BINANCE";
    PlatformType[PlatformType["PORTFOLIO"] = 5] = "PORTFOLIO";
    PlatformType[PlatformType["O500STG"] = 6] = "O500STG";
    PlatformType[PlatformType["STGNOV100"] = 7] = "STGNOV100";
    PlatformType[PlatformType["BITCOIN"] = 8] = "BITCOIN";
    PlatformType[PlatformType["GOLD"] = 9] = "GOLD";
})(PlatformType || (PlatformType = {}));

;// CONCATENATED MODULE: ./src/coinMarketCap.ts
class CoinMarketCap {
    /**
     *
     */
    constructor() {
        this.BASECOIN360_URL = "https://coin360.com/site-api/coins/";
        this.CURRENCIE_USD = "&vs_currencies=usd";
        this.CURRENCIE_EURO = "&vs_currencies=eur";
        this.BASE_URL = "https://api.coingecko.com/api/v3/simple/price?";
        this.Assets = new Map();
        this.coinInfo = [];
        //Kucoin
        this.Assets.set("BLOK", "bloktopia");
        this.Assets.set("BOLT", "Bolt");
        this.Assets.set("CAPP", "cappasity");
        this.Assets.set("CARR", "carnomaly");
        this.Assets.set("CERE", "cere-network");
        this.Assets.set("KAI", "kardiachain");
        this.Assets.set("KCS", "kucoin-shares");
        this.Assets.set("MANA", "Decentraland");
        this.Assets.set("OOE", "openocean");
        this.Assets.set("RMRK", "RMRK");
        this.Assets.set("SCLP", "scallop");
        this.Assets.set("SHILL", "SHILL-Token");
        this.Assets.set("STX", "Stacks");
        this.Assets.set("SWASH", "Swash");
        this.Assets.set("VRA", "verasity");
        this.Assets.set("WAXP", "wax");
        this.Assets.set("WILD", "wilder-world");
        this.Assets.set("IMX", "immutable-x");
        this.Assets.set("SFUND", "seedify-fund");
        this.Assets.set("KMA", "calamari-network");
        this.Assets.set("THETA", "theta-network");
        this.Assets.set("CEEK", "ceek-smart-vr-token");
        this.Assets.set("STAKE", "stake");
        this.Assets.set("RNDR", "render-token");
        //Coinmerce
        this.Assets.set("ETH", "etherum");
        this.Assets.set("BTC", "bitcoin");
        this.Assets.set("DOT", "polkadot");
        this.Assets.set("SOL", "solana");
        this.Assets.set("SAND", "sandbox");
        this.Assets.set("ALGO", "algorand");
        this.Assets.set("ENJ", "enjin-coin");
        this.Assets.set("AVAX", "avalanche");
        this.Assets.set("EGLD", "elrond");
        this.Assets.set("ZIL", "sandbox");
        this.Assets.set("VET", "vechain");
        this.Assets.set("XRP", "XRP");
        this.Assets.set("MINA", "mina-protocol");
        this.Assets.set("KDA", "kadena");
        this.Assets.set("LINK", "chainlink");
        this.Assets.set("FTM", "fantom");
        this.Assets.set("MATIC", "polygon");
        this.Assets.set("SYS", "syscoin");
        this.Assets.set("HNT", "helium");
        this.Assets.set("CHZ", "sandbox");
        this.Assets.set("ICP", "internet-computer");
        this.Assets.set("ZKT", "zktube");
        this.Assets.set("DAPPT", "sandbox");
        this.Assets.set("CWAR", "dapp-com");
        this.Assets.set("GALA", "gala");
        this.Assets.set("BITCOIN", "bitcoin");
        this.Assets.set("ATLAS", "atlas");
        //binance
        this.Assets.set("IOTX", "iota");
        this.Assets.set("BNB", "binance-coin");
        this.Assets.set("HIVE", "hive");
        this.Assets.set("LUNA", "terra-luna");
        this.Assets.set("SLP", "smooth-love-potion");
        //Gold
        this.Assets.set("PAXG", "pax-gold");
        this.Assets.set("GOLD", "pax-gold");
        //
        this.Assets.set("PYR", "vulcan-forged");
    }
    /**
   *
   * @param currencey
   * @returns
   */
    async getPrice(currencey) {
        let coinPrices = new Map();
        for (let coin of this.Assets.keys()) {
            let coinName = this.Assets.get(coin);
            try {
                if (coinName) {
                    let url = "";
                    if (!currencey)
                        url = this.BASE_URL + "ids=" + coinName.toLowerCase() + this.CURRENCIE_USD;
                    else
                        url = this.BASE_URL + "ids=" + coinName.toLowerCase() + this.CURRENCIE_EURO;
                    const response = await fetch(url);
                    const jsonOrders = await response.json();
                    if (jsonOrders[coinName.toLowerCase()]) {
                        if (jsonOrders[coinName.toLowerCase()]['usd'] != undefined) {
                            coinPrices.set(coin, jsonOrders[coinName.toLowerCase()]['usd'].toString());
                        }
                        else {
                            coinPrices.set(coin, '0');
                        }
                    }
                    else {
                        coinPrices.set(coin, '0');
                    }
                }
            }
            catch (e) {
                // coinPrices.set(coin, '0');
            }
        }
        return coinPrices;
    }
    async getCoinPrice(currency = null) {
        let coinPrices = new Map();
        for (let coin of this.Assets.keys()) {
            let coinName = this.coinInfo.filter(x => x.Symobl == coin)[0].CoinName;
            let url = '';
            if (!currency)
                url = this.BASECOIN360_URL + coinName + "/card?currency=USD";
            else
                url = this.BASECOIN360_URL + coinName + "/card?currency=EUR";
            const response = await fetch(url);
            const jsonOrders = await response.json();
            console.log(jsonOrders['price']);
        }
    }
}

;// CONCATENATED MODULE: ./src/baseController.ts


class BaseController {
    /**
     *
     */
    constructor(coinPrices) {
        this._coinPrices = coinPrices;
    }
    showPlatformOrders(_orders, platform) {
        switch (platform) {
            case PlatformType.BINANCE:
                return this.filterOrders(_orders.filter(p => p.Platform.toUpperCase() == 'BINANCE'));
            case PlatformType.KUCOIN:
                return this.filterOrders(_orders.filter(p => p.Platform.toUpperCase() == 'KUCOIN'));
            case PlatformType.HOTBIT:
                return this.filterOrders(_orders.filter(p => p.Platform.toUpperCase() == 'HOTBIT'));
            case PlatformType.GOLD:
                return this.filterOrders(_orders.filter(p => p.Platform.toUpperCase() == 'GOLD'));
            case PlatformType.COINMERCE:
                return this.filterOrders(_orders.filter(p => p.Platform.toUpperCase() == 'COINMERCE'));
        }
        return null;
    }
    /**
   *
   * @param coin
   * @returns
   */
    splitCoin(coin) {
        let pairs = ["BTC", "ETH", "USDT", "USDC", "TUSD", "USDT", "BUSD"];
        let currenCoin = coin;
        for (let pair of pairs) {
            if (coin.toUpperCase() != pair.toUpperCase() && coin.endsWith(pair)) {
                currenCoin = coin.replace(pair, "");
                break;
            }
        }
        return currenCoin;
    }
    filterOrders(_orders, _coinPrices, isPortfolio = false) {
        let ordersTarget = [];
        _orders.forEach(order => {
            let average = 0;
            let count = 0;
            let amount = 0;
            let fiatTotal = 0;
            if (ordersTarget.length == 0 || ordersTarget.every(x => this.splitCoin(x.Symbol) != this.splitCoin(order.Symbol))) {
                _orders.forEach(o => {
                    if (this.splitCoin(order.Symbol.toUpperCase()) == this.splitCoin(o.Symbol.toUpperCase())) {
                        if (o.TypeOrder.toUpperCase() == 'BUY') {
                            amount = amount + parseFloat(o.Amount.toString());
                            if (amount == 0) {
                                average = 0;
                                count = 0;
                                fiatTotal = 0;
                            }
                            else {
                                average = average + this.round(o.Price);
                                fiatTotal = fiatTotal + parseFloat(o.TotalFiatAmount.toString());
                                count++;
                            }
                        }
                        else {
                            amount = amount - this.round(o.Amount);
                            if (amount == 0) {
                                average = 0;
                                fiatTotal = 0;
                                count = 0;
                            }
                            else {
                                average -= parseFloat(o.Price.toString());
                                fiatTotal -= parseFloat(o.TotalFiatAmount.toString());
                                count--;
                            }
                        }
                    }
                });
                if (amount > 0) {
                    let target = this.getInstanceOfCoin();
                    if (count <= 0)
                        count = 1;
                    target.CurrentAmount = this.round(amount);
                    target.TotalFiatAmount = this.round(fiatTotal);
                    if (this._coinPrices.size > 0)
                        target.CurrentCoinPrice = parseFloat(this._coinPrices.get(order.Symbol)) == undefined ? 0 : parseFloat(this._coinPrices.get(order.Symbol));
                    else {
                        this._coinPrices = _coinPrices;
                        let tempPrice = this._coinPrices.get(order.Symbol) == undefined ? '0' : this._coinPrices.get(order.Symbol);
                        target.CurrentCoinPrice = parseFloat(tempPrice);
                    }
                    // Current price Dollar cost average DAC => Amount / 
                    target.PriceCostAverage = this.round(fiatTotal / target.CurrentAmount);
                    target.PriceByQuantity = this.round(target.PriceCostAverage * target.CurrentAmount);
                    //order.CurrentCoinPrice = this.GetPriceCash(order.Symbol, order.Platform);
                    if (target.TotalFiatAmount < 0) {
                        //order.TotalFiatAmount = this.round(order.CurrentAmount * order.CurrentCoinPrice);
                        target.PriceByQuantity = target.TotalFiatAmount;
                    }
                    if (target.CurrentCoinPrice >= 0)
                        target.CurrentCoinPriceByQuantity = target.CurrentAmount * target.CurrentCoinPrice;
                    target.DiffrentPrice = order.PriceByQuantity - order.CurrentCoinPriceByQuantity;
                    target.Symbol = this.splitCoin(order.Symbol);
                    if (isPortfolio)
                        target.TypeOrder = "BUY";
                    else
                        target.TypeOrder = order.TypeOrder;
                    //CHECK Current ammount
                    if (amount < 1 && amount > 0)
                        target.CurrentAmount = 0;
                    if (target.CurrentAmount > 0 && target.TotalFiatAmount > 1) {
                        ordersTarget.push(this.roundOrder(target));
                    }
                }
            }
        });
        let sorted = ordersTarget.sort(x => x.TotalFiatAmount);
        sorted.sort(function (x, y) {
            if (x.TotalFiatAmount < y.TotalFiatAmount) {
                return 1;
            }
            if (x.TotalFiatAmount > y.TotalFiatAmount) {
                return -1;
            }
            return 0;
        });
        return sorted;
    }
    getInstanceOfCoin() {
        let targetCoin = {
            Id: "",
            Name: "",
            Symbol: "",
            TypeOrder: "",
            Price: 0,
            Amount: 0,
            TotalFiatAmount: 0,
            CurrentAmount: 0,
            PriceCostAverage: 0,
            PriceByQuantity: 0,
            Datum: "",
            Platform: "",
            DiffrentPrice: 0,
            CurrentCoinPrice: 0,
            CurrentCoinPriceByQuantity: 0,
            Note: ""
        };
        return targetCoin;
    }
    roundOrder(order) {
        let newOrder = order;
        newOrder.Amount = this.round(order.Amount, true);
        newOrder.TotalFiatAmount = this.round(order.TotalFiatAmount, true);
        newOrder.Price = this.round(order.Price, true);
        newOrder.CurrentAmount = this.round(order.CurrentAmount, true);
        newOrder.PriceCostAverage = this.round(order.PriceCostAverage, true);
        newOrder.CurrentCoinPriceByQuantity = this.round(order.CurrentCoinPriceByQuantity, true);
        return newOrder;
    }
    async getCurrentPrice(id = null) {
        let cap = new CoinMarketCap();
        return await cap.getPrice();
    }
    GetPriceCash(Symbol, Platform) {
        return 0;
    }
    round(num, round = false, decimalPlaces = 4) {
        // if (!round)
        //     return num;
        let p = Math.pow(10, decimalPlaces);
        return Math.round(num * p) / p;
    }
}

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/css-tag.js
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const css_tag_t=window,css_tag_e=css_tag_t.ShadowRoot&&(void 0===css_tag_t.ShadyCSS||css_tag_t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap;class css_tag_o{constructor(t,e,n){if(this._$cssResult$=!0,n!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(css_tag_e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n.set(s,t))}return t}toString(){return this.cssText}}const r=t=>new css_tag_o("string"==typeof t?t:t+"",void 0,s),i=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new css_tag_o(n,t,s)},S=(s,n)=>{css_tag_e?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=css_tag_t.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n)}))},c=css_tag_e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r(e)})(t):t;
//# sourceMappingURL=css-tag.js.map

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/reactive-element.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var reactive_element_s;const reactive_element_e=window,reactive_element_r=reactive_element_e.trustedTypes,h=reactive_element_r?reactive_element_r.emptyScript:"",reactive_element_o=reactive_element_e.reactiveElementPolyfillSupport,reactive_element_n={toAttribute(t,i){switch(i){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},a=(t,i)=>i!==t&&(i==i||t==t),l={attribute:!0,type:String,converter:reactive_element_n,reflect:!1,hasChanged:a};class d extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;null!==(i=this.h)&&void 0!==i||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e))})),t}static createProperty(t,i=l){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c(i))}else void 0!==i&&s.push(c(i));return s}static _$Ep(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])}))}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$EO(t,i,s=l){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:reactive_element_n).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:reactive_element_n;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek()}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s)}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}d.finalized=!0,d.elementProperties=new Map,d.elementStyles=[],d.shadowRootOptions={mode:"open"},null==reactive_element_o||reactive_element_o({ReactiveElement:d}),(null!==(reactive_element_s=reactive_element_e.reactiveElementVersions)&&void 0!==reactive_element_s?reactive_element_s:reactive_element_e.reactiveElementVersions=[]).push("1.4.0");
//# sourceMappingURL=reactive-element.js.map

;// CONCATENATED MODULE: ./node_modules/lit-html/lit-html.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var lit_html_t;const lit_html_i=window,lit_html_s=lit_html_i.trustedTypes,lit_html_e=lit_html_s?lit_html_s.createPolicy("lit-html",{createHTML:t=>t}):void 0,lit_html_o=`lit$${(Math.random()+"").slice(9)}$`,lit_html_n="?"+lit_html_o,lit_html_l=`<${lit_html_n}>`,lit_html_h=document,lit_html_r=(t="")=>lit_html_h.createComment(t),lit_html_d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,lit_html_c=t=>u(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,lit_html_a=/-->/g,f=/>/g,_=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),m=/'/g,p=/"/g,$=/^(?:script|style|textarea|title)$/i,g=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),y=g(1),w=g(2),x=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),T=new WeakMap,A=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new lit_html_S(i.insertBefore(lit_html_r(),t),t,void 0,null!=s?s:{})}return l._$AI(t),l},E=lit_html_h.createTreeWalker(lit_html_h,129,null,!1),C=(t,i)=>{const s=t.length-1,n=[];let h,r=2===i?"<svg>":"",d=v;for(let i=0;i<s;i++){const s=t[i];let e,u,c=-1,g=0;for(;g<s.length&&(d.lastIndex=g,u=d.exec(s),null!==u);)g=d.lastIndex,d===v?"!--"===u[1]?d=lit_html_a:void 0!==u[1]?d=f:void 0!==u[2]?($.test(u[2])&&(h=RegExp("</"+u[2],"g")),d=_):void 0!==u[3]&&(d=_):d===_?">"===u[0]?(d=null!=h?h:v,c=-1):void 0===u[1]?c=-2:(c=d.lastIndex-u[2].length,e=u[1],d=void 0===u[3]?_:'"'===u[3]?p:m):d===p||d===m?d=_:d===lit_html_a||d===f?d=v:(d=_,h=void 0);const y=d===_&&t[i+1].startsWith("/>")?" ":"";r+=d===v?s+lit_html_l:c>=0?(n.push(e),s.slice(0,c)+"$lit$"+s.slice(c)+lit_html_o+y):s+lit_html_o+(-2===c?(n.push(void 0),i):y)}const u=r+(t[s]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==lit_html_e?lit_html_e.createHTML(u):u,n]};class P{constructor({strings:t,_$litType$:i},e){let l;this.parts=[];let h=0,d=0;const u=t.length-1,c=this.parts,[v,a]=C(t,i);if(this.el=P.createElement(v,e),E.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(l=E.nextNode())&&c.length<u;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const i of l.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(lit_html_o)){const s=a[d++];if(t.push(i),void 0!==s){const t=l.getAttribute(s.toLowerCase()+"$lit$").split(lit_html_o),i=/([.?@])?(.*)/.exec(s);c.push({type:1,index:h,name:i[2],strings:t,ctor:"."===i[1]?R:"?"===i[1]?H:"@"===i[1]?I:M})}else c.push({type:6,index:h})}for(const i of t)l.removeAttribute(i)}if($.test(l.tagName)){const t=l.textContent.split(lit_html_o),i=t.length-1;if(i>0){l.textContent=lit_html_s?lit_html_s.emptyScript:"";for(let s=0;s<i;s++)l.append(t[s],lit_html_r()),E.nextNode(),c.push({type:2,index:++h});l.append(t[i],lit_html_r())}}}else if(8===l.nodeType)if(l.data===lit_html_n)c.push({type:2,index:h});else{let t=-1;for(;-1!==(t=l.data.indexOf(lit_html_o,t+1));)c.push({type:7,index:h}),t+=lit_html_o.length-1}h++}}static createElement(t,i){const s=lit_html_h.createElement("template");return s.innerHTML=t,s}}function V(t,i,s=t,e){var o,n,l,h;if(i===x)return i;let r=void 0!==e?null===(o=s._$Cl)||void 0===o?void 0:o[e]:s._$Cu;const u=lit_html_d(i)?void 0:i._$litDirective$;return(null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Cl)&&void 0!==l?l:h._$Cl=[])[e]=r:s._$Cu=r),void 0!==r&&(i=V(t,r._$AS(t,i.values),r,e)),i}class N{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:lit_html_h).importNode(s,!0);E.currentNode=o;let n=E.nextNode(),l=0,r=0,d=e[0];for(;void 0!==d;){if(l===d.index){let i;2===d.type?i=new lit_html_S(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new L(n,this,t)),this.v.push(i),d=e[++r]}l!==(null==d?void 0:d.index)&&(n=E.nextNode(),l++)}return o}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class lit_html_S{constructor(t,i,s,e){var o;this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$C_=null===(o=null==e?void 0:e.isConnected)||void 0===o||o}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$C_}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=V(this,t,i),lit_html_d(t)?t===b||null==t||""===t?(this._$AH!==b&&this._$AR(),this._$AH=b):t!==this._$AH&&t!==x&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):lit_html_c(t)?this.O(t):this.$(t)}S(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}$(t){this._$AH!==b&&lit_html_d(this._$AH)?this._$AA.nextSibling.data=t:this.k(lit_html_h.createTextNode(t)),this._$AH=t}T(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=P.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(s);else{const t=new N(o,this),i=t.p(this.options);t.m(s),this.k(i),this._$AH=t}}_$AC(t){let i=T.get(t.strings);return void 0===i&&T.set(t.strings,i=new P(t)),i}O(t){u(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new lit_html_S(this.S(lit_html_r()),this.S(lit_html_r()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$C_=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class M{constructor(t,i,s,e,o){this.type=1,this._$AH=b,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=b}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=V(this,t,i,0),n=!lit_html_d(t)||t!==this._$AH&&t!==x,n&&(this._$AH=t);else{const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=V(this,e[s+l],i,l),h===x&&(h=this._$AH[l]),n||(n=!lit_html_d(h)||h!==this._$AH[l]),h===b?t=b:t!==b&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h}n&&!e&&this.P(t)}P(t){t===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class R extends M{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===b?void 0:t}}const k=lit_html_s?lit_html_s.emptyScript:"";class H extends M{constructor(){super(...arguments),this.type=4}P(t){t&&t!==b?this.element.setAttribute(this.name,k):this.element.removeAttribute(this.name)}}class I extends M{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5}_$AI(t,i=this){var s;if((t=null!==(s=V(this,t,i,0))&&void 0!==s?s:b)===x)return;const e=this._$AH,o=t===b&&e!==b||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==b&&(e===b||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){V(this,t)}}const z={A:"$lit$",M:lit_html_o,C:lit_html_n,L:1,R:C,D:N,V:lit_html_c,I:V,H:lit_html_S,N:M,U:H,B:I,F:R,W:L},Z=lit_html_i.litHtmlPolyfillSupport;null==Z||Z(P,lit_html_S),(null!==(lit_html_t=lit_html_i.litHtmlVersions)&&void 0!==lit_html_t?lit_html_t:lit_html_i.litHtmlVersions=[]).push("2.3.0");
//# sourceMappingURL=lit-html.js.map

;// CONCATENATED MODULE: ./node_modules/lit-element/lit-element.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var lit_element_l,lit_element_o;const lit_element_r=(/* unused pure expression or super */ null && (t));class lit_element_s extends d{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=A(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return x}}lit_element_s.finalized=!0,lit_element_s._$litElement$=!0,null===(lit_element_l=globalThis.litElementHydrateSupport)||void 0===lit_element_l||lit_element_l.call(globalThis,{LitElement:lit_element_s});const lit_element_n=globalThis.litElementPolyfillSupport;null==lit_element_n||lit_element_n({LitElement:lit_element_s});const lit_element_h={_$AK:(t,e,i)=>{t._$AK(e,i)},_$AL:t=>t._$AL};(null!==(lit_element_o=globalThis.litElementVersions)&&void 0!==lit_element_o?lit_element_o:globalThis.litElementVersions=[]).push("3.2.2");
//# sourceMappingURL=lit-element.js.map

;// CONCATENATED MODULE: ./node_modules/lit/index.js

//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/decorators/custom-element.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const custom_element_e=e=>n=>"function"==typeof n?((e,n)=>(customElements.define(e,n),n))(e,n):((e,n)=>{const{kind:t,elements:s}=n;return{kind:t,elements:s,finisher(n){customElements.define(e,n)}}})(e,n);
//# sourceMappingURL=custom-element.js.map

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/decorators/property.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const property_i=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,i)}};function property_e(e){return(n,t)=>void 0!==t?((i,e,n)=>{e.constructor.createProperty(n,i)})(e,n,t):property_i(e,n)}
//# sourceMappingURL=property.js.map

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/decorators/query-assigned-elements.js

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var query_assigned_elements_n;const query_assigned_elements_e=null!=(null===(query_assigned_elements_n=window.HTMLSlotElement)||void 0===query_assigned_elements_n?void 0:query_assigned_elements_n.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));function query_assigned_elements_l(n){const{slot:l,selector:t}=null!=n?n:{};return o({descriptor:o=>({get(){var o;const r="slot"+(l?`[name=${l}]`:":not([name])"),i=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(r),s=null!=i?query_assigned_elements_e(i,n):[];return t?s.filter((o=>o.matches(t))):s},enumerable:!0,configurable:!0})})}
//# sourceMappingURL=query-assigned-elements.js.map

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/decorators/query-assigned-nodes.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function query_assigned_nodes_o(o,n,r){let l,s=o;return"object"==typeof o?(s=o.slot,l=o):l={flatten:n},r?t({slot:s,flatten:n,selector:r}):e({descriptor:e=>({get(){var e,t;const o="slot"+(s?`[name=${s}]`:":not([name])"),n=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(o);return null!==(t=null==n?void 0:n.assignedNodes(l))&&void 0!==t?t:[]},enumerable:!0,configurable:!0})})}
//# sourceMappingURL=query-assigned-nodes.js.map

;// CONCATENATED MODULE: ./node_modules/lit/decorators.js

//# sourceMappingURL=decorators.js.map

;// CONCATENATED MODULE: ./src/app.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var App_1;




// import   './portfolioState';
let App = App_1 = class App extends lit_element_s {
    /**
    *
    */
    constructor() {
        super();
        // @property({ type: Array<Coin>, reflect: true })
        this.show = false;
        this._showBtn = true;
        this._allOrders = [];
        this._myOrders = [];
        this._currentOrders = [];
        this._orders = [];
        this._ordersBinance = [];
        this._ordersKuCoin = [];
        this._ordersHotBit = [];
        this._ordersGold = [];
        this._ordersCoinmerce = [];
        this._selectedCoin = '';
        this._sumTotalFiat = 0;
        this._sumRightTotalFiat = 0;
        this._coinPrices = new Map();
        this.styles = i `
    :host {
    
    }
  `;
        this._baseController = new BaseController(this._coinPrices);
        this.loadOrders();
    }
    static { this.AllOrders = []; }
    /**
     *
     */
    async loadOrders() {
        const url = 'https://abdul.alrshdi.com/cryorder.php';
        await this.load(url);
    }
    async load(url) {
        const response = await fetch(url);
        const jsonOrders = await response.json();
        let myorders = [];
        jsonOrders.forEach(order => {
            myorders.push(order);
        });
        const prices = await this._baseController.getCurrentPrice();
        this._coinPrices = prices;
        this._orders = myorders;
        this._myOrders = myorders;
        this._allOrders = myorders;
        App_1.AllOrders = myorders;
        this._orders = this._baseController.filterOrders(this._allOrders, this._coinPrices, true);
        this._currentOrders = this._orders;
        this.requestUpdate();
    }
    getAllOrder() {
        this._orders = this._currentOrders;
        if (!this._showBtn)
            this._showBtn = !this._showBtn;
        this.requestUpdate();
    }
    /**
     * filter
     */
    filter(e) {
        const target = e.target;
        if ('BUTTON' != target.tagName)
            return;
        const symbol = target;
        console.log(e);
        console.log(target);
        let coin = '';
        if (symbol) {
            coin = symbol.nodeValue;
        }
    }
    showCoinOrders(e) {
        const target = e.target;
        if ('BUTTON' != target.tagName)
            return;
        const symbol = target.attributes['symbol'];
        let coin = '';
        if (symbol) {
            coin = symbol.nodeValue;
        }
        if (this._showBtn)
            this._showBtn = !this._showBtn;
        this._selectedCoin = coin;
        this._orders = null;
        this._orders = this._allOrders.filter(x => x.Symbol == coin);
        this.requestUpdate();
    }
    showPortfolio() {
        this.getAllOrder();
    }
    showKuCoin() {
        if (this._ordersKuCoin.length == 0)
            this._ordersKuCoin = this._baseController.showPlatformOrders(this._allOrders, PlatformType.KUCOIN);
        this._orders = this._ordersKuCoin;
        this.requestUpdate();
    }
    showGold() {
        if (this._ordersGold.length == 0)
            this._ordersGold = this._baseController.showPlatformOrders(this._allOrders, PlatformType.GOLD);
        this._orders = this._ordersGold;
        this.requestUpdate();
    }
    showCoinmerce() {
        if (this._ordersCoinmerce.length == 0)
            this._ordersCoinmerce = this._baseController.showPlatformOrders(this._allOrders, PlatformType.COINMERCE);
        this._orders = this._ordersCoinmerce;
        this.requestUpdate();
    }
    showBinace() {
        if (this._ordersBinance.length == 0)
            this._ordersBinance = this._baseController.showPlatformOrders(this._allOrders, PlatformType.BINANCE);
        this._orders = this._ordersBinance;
        this.requestUpdate();
    }
    showHotBit() {
        if (this._ordersHotBit.length == 0)
            this._ordersHotBit = this._baseController.showPlatformOrders(this._allOrders, PlatformType.HOTBIT);
        this._orders = this._ordersHotBit;
        this.requestUpdate();
    }
    getSumOfTotalFiat(isTotalFialt) {
        this._sumTotalFiat = 0;
        if (this._orders.length > 0)
            try {
                this._orders.forEach(o => {
                    if (isTotalFialt)
                        if (o.TypeOrder.toUpperCase() === 'BUY')
                            this._sumTotalFiat = this._sumTotalFiat + parseFloat(o.TotalFiatAmount.toString());
                        else
                            this._sumTotalFiat = this._sumTotalFiat - parseFloat(o.TotalFiatAmount.toString());
                    else if (o.PriceCostAverage == undefined)
                        this._sumTotalFiat = +0;
                    else
                        this._sumTotalFiat = this._sumTotalFiat + parseFloat(o.PriceCostAverage.toString());
                });
            }
            catch (e) {
                return 0;
            }
        this.requestUpdate();
        return Math.round(this._sumTotalFiat);
    }
    render() {
        return y `

    <script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>

    <div>      
      <nav class="navbar navbar-expand-lg bg-light btn-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Coin tracking app</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#" @click="${this.showPortfolio}">Portfoilo</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click="${this.showKuCoin}">KuCoin</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"  @click="${this.showBinace}">Binance</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"  @click="${this.showHotBit}">Hotbit</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"  @click="${this.showGold}">Gold</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Data
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Add order</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="search">
            <button class="btn btn-outline-success" symbol="filterCoin" @click="${this.filter}" >Search</button>
          </form>
        </div>
      </div>
    </nav>  

    <!-- <portfolio-stat></portfolio-stat> -->

    <div class="row">
      <span style="margin:15px;" class="col-4"> Coin traking app </span>
    </div>

    <div class="row">
      <ul style="display:flex;margin-left:50px;">
        <li class="col-2">
          <a class="nav-link active" aria-current="page" href="#" @click="${this.showPortfolio}">Portfoilo</a>
        </li>
        <li class="col-2">
          <a class="nav-link" href="#"  @click="${this.showCoinmerce}">Coinmerce</a>
        </li>  
        <li class="col-2">
          <a class="nav-link" href="#" @click="${this.showKuCoin}">KuCoin</a>
        </li>
        <li class="col-2">
          <a class="nav-link" href="#"  @click="${this.showBinace}">Binance</a>
        </li>
        <li class="col-2">
          <a class="nav-link" href="#"  @click="${this.showHotBit}">Hotbit</a>
        </li>
        <li class="col-2">
          <a class="nav-link" href="#"  @click="${this.showGold}">Gold</a>
        </li>    
          
      </ul>
    </div>
    


    <table class="table table-sm table-hover" style="margin:15px;">
    <thead>
      <th>#</th>
      <th>Coin symoble</th>
      <th>Total Fiat Amount</th>
      <th>Current Amount</th>
      <th>Price Cost Average</th>
      <th>Price By Quantity</th>   
      <th>Current Price</th>
      ${!this._showBtn ? y `<th> Order type ` : ''} </th>
      ${!this._showBtn ? y `<th> Date ` : ''} </th>
      ${!this._showBtn ? y `<th> Platform ` : ''} </th>
      ${!this._showBtn ? y `<th><button type="button" class="btn btn-alert"  @click=${this.getAllOrder} data-toggle="modal" data-target="#exampleModal"> show all </button> ` : ''}
      </th>
    </thead>
    
    <tbody> 
      ${!this.show ? y `  
        
        ${this._orders.map(i => y `
        <tr>        
          
          <td> ${i.Id} </td>
          <td> ${i.Symbol} </td>
          <td> ${i.TotalFiatAmount} </td>
          <td> ${!this._showBtn ? y ` ${i.Amount} ` : i.CurrentAmount} </td>
          <td style="font-weight:bold;color: green;"> ${i.PriceCostAverage} </td>                 
          <td> ${i.CurrentCoinPriceByQuantity} </td>      
          <td> ${i.CurrentCoinPrice} </td>
          ${!this._showBtn ? y `<td> ${i.TypeOrder} ` : ''} </td>
          ${!this._showBtn ? y `<td> ${i.Datum} ` : ''} </td>
          ${!this._showBtn ? y `<td> ${i.Platform} ` : ''} </td>
          <td> ${this._showBtn ? y `<button type="button" class="btn btn-outline-success" symbol=${i.Symbol} @click=${this.showCoinOrders} data-toggle="modal" data-target="#exampleModal"> show more </button> </td>` : ''}
        </tr>
        `)}  ` : ''}
      
    </tbody>
    </table> 
    
    <div class="row" style="margin-left:10px;">
      <span> Count : ${this._orders.length} , Sum of Total Fiat Amount : ${this.getSumOfTotalFiat(true)} , sum of Total Cost Averge: ${this.getSumOfTotalFiat(false)} , Current Coin Price for ${this._selectedCoin} : <span style="font-weight:bold;color: green;"> ${this._coinPrices.get(this._selectedCoin)} </span> </span>
    </div>
    
    </div>

    `;
    }
};
__decorate([
    property_e({ type: Boolean }),
    __metadata("design:type", Object)
], App.prototype, "show", void 0);
__decorate([
    property_e({ type: Boolean }),
    __metadata("design:type", Object)
], App.prototype, "_showBtn", void 0);
__decorate([
    property_e({ type: Number }),
    __metadata("design:type", Object)
], App.prototype, "_sumTotalFiat", void 0);
__decorate([
    property_e({ type: Number }),
    __metadata("design:type", Object)
], App.prototype, "_sumRightTotalFiat", void 0);
App = App_1 = __decorate([
    custom_element_e('coin-tracking-app'),
    __metadata("design:paramtypes", [])
], App);


;// CONCATENATED MODULE: ./src/index.ts
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.js'    
// import 'bootstrap';





/******/ })()
;
//# sourceMappingURL=main.js.map