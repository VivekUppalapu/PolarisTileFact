import { LitElement, html, css } from 'lit';



class PolarisTileFact extends LitElement {
  static get properties() {   
    return {
      outerLayer:{},
      outerLayer1:{},
      type1Fact:{},
      textFact1:{type: String},
      type2Fact:{},
      textFact2:{type: String},
      type3Fact: {},
      textFact3:{type: String},
      type4Fact:{},
      textFact4:{type: String},
    };
  }

  static get styles() {
    return css`

      :host {
        display: block;
        margin-left: 40px;
        margin-right: 40px;
        //background-color: #8ac3f3;
      }

      .outerLayer
      {
        display: flex;
        margin-top: 32px;
      }
      .outerLayer1
      {
        display: flex;
        margin-top: 32px;
      }
      .type1Fact{ 
        width: 336px;
        height: 280.8px;
        background-color: #1e407c;
      }
      .textFact1{
        padding: 0 14% 0 14%;
        text-align: center;
        font-family: Roboto,"Franklin Gothic Medium",Tahoma,sans-serif;
        font-size: 32px;
        color: white;
      }
      .type2Fact{
        width: 336px;
        height: 280.8px;
        background-color: white;
      }
      .type3Fact{
        width: 336px;
        height: 280.8px;
        background-color: #001e44;
      }
      .type4Fact{
        width: 336px;
        height: 280.8px;
        //background-color: #001e44;
        background: linear-gradient(180deg, rgba(30,64,124,1) 0%, rgba(0,30,68,1) 65%, rgba(0,30,68,1) 100%);
      }
      .textFact4{
        padding: 0 14% 0 14%;
        text-align: center;
        font-family: Roboto,"Franklin Gothic Medium",Tahoma,sans-serif;
        font-size: 32px;
        color: white;
      }
    `;
  }

  constructor() {
    super();
    this.textFact1 = '';
    this.textFact2 = '';
    this.textFact3 = '';
    this.textFact4 = '';

  }

  render() {
    return html`
    <div class="outerLayer">
    <div class="type1Fact"><h3 class="textFact1"><slot>${this.textFact1}</slot></h3></div>
    <div class="type2Fact"><h3 class="textFact2"><slot>${this.textFact2}</slot></h3></div>
    <div class = "type4Fact"><h3 class = "textFact4"><slot>${this.textFact4}</slot></h3></div>
    </div>
    <div class="outerLayer">
    <div class="type1Fact"><h3 class="textFact1"><slot>${this.textFact1}</slot></h3></div>
    <div class="type3Fact"><h3 class="textFact3"><slot>${this.textFact3}</slot></h3></div>
    </div>
    ` ;
  }
}

customElements.define('polaris-tile-fact', PolarisTileFact);