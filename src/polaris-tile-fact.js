import { LitElement, html, css } from 'lit';



class PolarisTileFact extends LitElement {
  static get properties() {
    return {
      type1Fact:{},
      textFact1:{type: String},
      type2Fact:{},
      textFact2:{type: String},
      type3Fact: {},
      textFact3:{type: String},
      type4Fact:{},
    };
  }

  static get styles() {
    return css`
      :host {
        display: grid;
        margin-top: 32px;
        margin-left: 40px;
        background-color: grey;
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
    `;
  }

  constructor() {
    super();
    this.textFact1 = '';
    this.textFact2 = '';
    this.textFact3 = '';

  }

  render() {
    return html`<div class="type1Fact"><h1 class="textFact1"><slot>${this.textFact1}</slot></h1></div>
    <div class="type2Fact"><h1 class="textFact2"><slot>${this.textFact2}</slot></h1></div>
    <div class="type3Fact"><h1 class="textFact3"><slot>${this.textFact3}</slot></h1></div>
    <div class = "type4Fact"><h1 class = "textFact4"><slot>${this.textFact4}</slot></h1></div>
    ` ;
  }
}

customElements.define('polaris-tile-fact', PolarisTileFact);