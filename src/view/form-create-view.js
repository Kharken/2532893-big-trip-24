import {createFormTemplate, BUTTON_TEXT} from "./view-templates/forms-view-template";
import {createElement} from "../render";


export default class FormCreateView {
  getTemplate(){
    return createFormTemplate(BUTTON_TEXT.CREATE_FORM);
  }

  getElement(){
    if (!this.element){
      this.element = createElement(this.getTemplate())
    }

    return this.element;
  }

  removeElement(){
    this.element = null;
  }
}
