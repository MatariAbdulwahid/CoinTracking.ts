/*! For license information please see main.js.LICENSE.txt */
    :host {
    
    }
  `,this._baseController=new Ve,this.loadOrders()}async loadOrders(){await this.load("https://abdul.alrshdi.com/cryorder.php")}async load(n){const o=await fetch(n),t=await o.json();let e=[];t.forEach((n=>{e.push(n)})),this._orders=e;let r=this._orders.filter((n=>"PORTFOLIO"!=n.Platform.toUpperCase()));this._allOrders=r,this._orders=r,this._orders=this._baseController.filterOrders(this._orders),this._currentOrders=this._orders,this.requestUpdate()}getAllOrder(){this._orders=this._currentOrders,this._showBtn||(this._showBtn=!this._showBtn),this.requestUpdate()}filter(n){const o=n.target;if("BUTTON"!=o.tagName)return;const t=o;console.log(n),console.log(o);let e="";t&&t.nodeValue}showCoinOrders(n){const o=n.target;if("BUTTON"!=o.tagName)return;const t=o.attributes.symbol;let e="";t&&(e=t.nodeValue),this._showBtn&&(this._showBtn=!this._showBtn),this._orders=this._allOrders.filter((n=>n.Symbol==e)),this.requestUpdate()}showPortfolio(){this.getAllOrder()}showKuCoin(){0==this._ordersKuCoin.length&&(this._ordersKuCoin=this._baseController.showPlatformOrders(this._allOrders,Xe.KUCOIN)),this._orders=this._ordersKuCoin,this.requestUpdate()}showGold(){0==this._ordersGold.length&&(this._ordersGold=this._baseController.showPlatformOrders(this._allOrders,Xe.GOLD)),this._orders=this._ordersGold,this.requestUpdate()}showCoinmerce(){0==this._ordersCoinmerce.length&&(this._ordersCoinmerce=this._baseController.showPlatformOrders(this._allOrders,Xe.COINMERCE)),this._orders=this._ordersCoinmerce,this.requestUpdate()}showBinace(){0==this._ordersBinance.length&&(this._ordersBinance=this._baseController.showPlatformOrders(this._allOrders,Xe.BINANCE)),this._orders=this._ordersBinance,this.requestUpdate()}showHotBit(){0==this._ordersHotBit.length&&(this._ordersHotBit=this._baseController.showPlatformOrders(this._allOrders,Xe.HOTBIT)),this._orders=this._ordersHotBit,this.requestUpdate()}getSumOfTotalFiat(n){let o=0;if(this._orders.length>0)try{this._orders.forEach((t=>{o=n?+parseFloat(t.TotalFiatAmount.toString()):null==t.PriceCostAverage?0:+parseFloat(t.PriceCostAverage.toString())}))}catch(n){return 0}return o}render(){return Dr`

    <script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
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

    <div class="row">
      <span style="margin:15px;" class="col-4"> Coin traking app </span>
    </div>

    <div class="row">
      <ul style="display:flex;margin-left:50px;">
        <li class="col-2">
          <a class="nav-link active" aria-current="page" href="#" @click="${this.showPortfolio}">Portfoilo</a>
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
        <li class="col-2">
          <a class="nav-link" href="#"  @click="${this.showCoinmerce}">Coinmerce</a>
        </li>    
      </ul>
    </div>
    


    <table class="table table-sm table-hover" style="margin:15px;">
    <thead>
      <th>Coin symoble</th>
      <th>Total Fiat Amount</th>
      <th>Current Amount</th>
      <th>Price Cost Average</th>
      <th>Price By Quantity</th>   
      <th>CurrentPrice</th>
      ${this._showBtn?"":Dr`<th> Order type `} </th>
      ${this._showBtn?"":Dr`<th> Platform `} </th>
      ${this._showBtn?"":Dr`<th><button type="button" class="btn btn-alert"  @click=${this.getAllOrder} data-toggle="modal" data-target="#exampleModal"> show all </button> `}
      </th>
    </thead>
    
    <tbody> 
      ${this.show?"":Dr`  
        
        ${this._orders.map((n=>Dr`
        <tr>        
          
          <td> ${n.Symbol} </td>
          <td> ${n.TotalFiatAmount} </td>
          <td> ${n.CurrentAmount} </td>
          <td style="font-weight:bold;color: green;"> ${n.Price} </td>                 
          <td> ${n.PriceByQuantity} </td>      
          <td> ${this._baseController.getCurrentPrice(n)} </td>
          ${this._showBtn?"":Dr`<th> ${n.TypeOrder} `} </th>
          ${this._showBtn?"":Dr`<td> ${n.Platform} `} </td>
          <td> ${this._showBtn?Dr`<button type="button" class="btn btn-outline-success" symbol=${n.Symbol} @click=${this.showCoinOrders} data-toggle="modal" data-target="#exampleModal"> show more </button> </td>`:""}
        </tr>
        `))}  `}
      
    </tbody>
    </table> 
    
    <div class="row" style="margin-left:10px;">
      <span> Count : ${this._orders.length} , Sum of Total Fiat Amount : ${this.getSumOfTotalFiat(!0)} , sum of Total Cost Averge ${this.getSumOfTotalFiat(!1)} </span>
    </div>
    
    </div>

    `}};ra([ta({type:Array,reflect:!0}),ta({type:Boolean}),aa("design:type",Object)],ia.prototype,"show",void 0),ra([ta({type:Boolean}),aa("design:type",Object)],ia.prototype,"_showBtn",void 0),ia=ra([n=>"function"==typeof n?((n,o)=>(customElements.define("coin-tracking-app",o),o))(0,n):((n,o)=>{const{kind:t,elements:e}=o;return{kind:t,elements:e,finisher(n){customElements.define("coin-tracking-app",n)}}})(0,n),aa("design:paramtypes",[])],ia)})()})();
//# sourceMappingURL=main.js.map