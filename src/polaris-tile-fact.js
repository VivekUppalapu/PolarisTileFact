import { LitElement, html, css } from 'lit';



class PolarisTileFact extends LitElement {
  static get properties() {   
    return {

      outerLayer:{},
      outerLayerML:{},
      tileChange:{type: String, reflect: true},
      textChange:{type: String, reflect: true},
      textFact: {type:String},
      multiline: {type: Boolean},
      hasLink:{type: Boolean},
      paraText:{},
      borderColor: {},
      link: {type: String},
    };
  }

  static get styles() {
    return css`

      :host {
        display: block;
        margin-left: 5px;
        margin-right: 5px;
      }

      .outerLayer
      {
        display: grid;
        height: 36vw;
        padding: 0 14% 0 14%;
        margin-top: 32px;
        
      }
      .outerLayerML
      {
        display: grid;
        padding: 0 14% 0 14%;

      }
      :host([tileChange=type1]) 
      {
        width: 336px;
        height: 280.8px;
        background-color: #1e407c;

      }
     :host([textChange=text1])
      {
        font-size: 1.75rem;
        font-weight: 700px;
        margin-bottom: 1rem;
        font-family: Roboto,"Franklin Gothic Medium",Tahoma,sans-serif;
        color: white; 
      }
      :host([tileChange=type2])
      {
        width: 336px;
        height: 280.8px;
        background-color:white;
        
      }
      :host([textChange=text2])
      {
        font-family: Roboto,"Franklin Gothic Medium",Tahoma,sans-serif;
        font-size: 1.75rem;
        color:  #001e44;
        font-weight: 900 px;
      }
      :host([tileChange=type3])
      {
        width: 336px;
        height: 280.8px;
        background-color: #001e44;
      }
      :host([tileChange=type4])
      {
        width: 336px;
        height: 280.8px;
        background: linear-gradient(180deg, rgba(30,64,124,1) 0%, rgba(0,30,68,1) 65%, rgba(0,30,68,1) 100%);
      }

      :host([tileChange=type5])
      {
        width: 336px;
        height: 280.8px;
        background-color: rgba(0, 3, 33, 0.5);
        background-image: url(../assets/penn-state-tuition.jpg);
        background-size: cover;
        background-position: center;
        background-blend-mode: multiply;
      }
      
      :host([tileChange=type6])
      {
        width: 336px;
        height: 280.8px;
        background-color: rgba(0, 3, 33, 0.5);
        background-image: url(../assets/data-digest.jpg);
        background-size: cover;
        background-position: center;
        background-blend-mode: multiply;
      }
      .paraText{
        font-size: 1rem;
        font-weight: 400;
        color: #001e44;
        font-family: Roboto,"Franklin Gothic Medium",Tahoma,sans-serif;
      }
      .borderColor{
      margin-top: 1.35rem;
      margin-bottom: 1rem;
      background-color: #1e407c;
      height: 3px;
      }
      .link
      {
        font-family: Roboto,"Franklin Gothic Medium",Tahoma,sans-serif;
        color: white; 
        text-decoration: none;
      }
      

    `;
  }

  constructor() {
    super();
    this.textFact = '';
    this.tileChange = ''
    this.textChange = '';
    this.multiline = false;
    this.hasLink = false;
    this.link='';
    this.paraText;

  }

  render() {
    if(this.multiline == true){
      return html`
      <div class="outerLayerML">
      <div class=${this.tileChange}><h3 class=${this.textChange}><slot>${this.textFact}</slot></h3></div>
      <b class="borderColor"> </b>
      <p class="paraText"> ${this.paraText} </p>
      </div>
      `;
    }
    if(this.hasLink == true)
    {
      return html`
      <div class="outerLayer">
      <a class="link" href="${this.link}">
      <div class=${this.tileChange}><h3 class=${this.textChange}><slot>${this.textFact}</slot></h3></div>
     </a>
      </div>
      `
    }
    else
    { 
        return html`
        <div class="outerLayer">
      <div class=${this.tileChange}><h3 class=${this.textChange}><slot>${this.textFact}</slot></h3></div>
      </div>
    ` ;
    }  
  }
}

customElements.define('polaris-tile-fact', PolarisTileFact);