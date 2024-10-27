import {createFormTemplate, BUTTON_TEXT} from "./view-templates/forms-view-template";
import {createElement} from "../render";


export default class FormEditView {
  getTemplate(){
    return createFormTemplate(BUTTON_TEXT.EDIT_FORM);
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
