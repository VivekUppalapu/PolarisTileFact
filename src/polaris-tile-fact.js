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
      /* Overall box itself and it's design */
      :host {
        display: block;
        margin-left: 5px;
        margin-right: 5px;
      }
/* The outerLayer property is the outer layer for each tile, making sure that they align properly and look like the website alignment */
      .outerLayer
      {
        display: grid;
        height: 36vw;
        padding: 0 14% 0 14%;
        margin-top: 32px;
        
      }
      /* This the same thing as above, but for the multiline tiles(white) */
      .outerLayerML
      {
        display: grid;
        padding: 0 14% 0 14%;

      }
      /* Each tileChange variable and type reflect the different tiles and their backgrounds */
      /* type1 = Blue tile */
      :host([tileChange=type1]) 
      {
        width: 336px;
        height: 280.8px;
        background-color: #1e407c;

      }
      /* The textChange and text are the text configurations on the tile and there are only two variations
      thus only having two different options */
     :host([textChange=text1])
      {
        font-size: 1.75rem;
        font-weight: 700px;
        margin-bottom: 1rem;
        font-family: Roboto,"Franklin Gothic Medium",Tahoma,sans-serif;
        color: white; 
      }
      /* This tile change is for the multiline white background tiles */
      /* type2 = white tiles */
      :host([tileChange=type2])
      {
        width: 336px;
        height: 280.8px;
        background-color:white;
        
      }
      /* Text to go along with it */
      :host([textChange=text2])
      {
        font-family: Roboto,"Franklin Gothic Medium",Tahoma,sans-serif;
        font-size: 1.75rem;
        color:  #001e44;
        font-weight: 900 px;
      }
      /* Dark blue tile */
      :host([tileChange=type3])
      {
        width: 336px;
        height: 280.8px;
        background-color: #001e44;
      }
      /* Graident blue */
      :host([tileChange=type4])
      {
        width: 336px;
        height: 280.8px;
        background: linear-gradient(180deg, rgba(30,64,124,1) 0%, rgba(0,30,68,1) 65%, rgba(0,30,68,1) 100%);
      }
      /*Image 1*/
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
      /* Image 2 */
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
      /* paragraph tag for multiline */
      .paraText{
        font-size: 1rem;
        font-weight: 400;
        color: #001e44;
        font-family: Roboto,"Franklin Gothic Medium",Tahoma,sans-serif;
      }
      /* the line in multiline */
      .borderColor{
      margin-top: 1.35rem;
      margin-bottom: 1rem;
      background-color: #1e407c;
      height: 3px;
      }
      /* linked to websites for the images */
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
    // textFact is the text to type
    this.textFact = '';

    //tileChange is the change of tile
    this.tileChange = ''

    //textChange is the change of text depending on the tile
    this.textChange = '';
    //whether multiline is there or not

    this.multiline = false;
    // whether link is there or not
    this.hasLink = false;

    // inserting link
    this.link='';

    // paragraph text for multiline
    this.paraText = '';

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