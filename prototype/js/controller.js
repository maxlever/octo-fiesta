/**
*  Controllers handle input.  Gets DOM refs from View.
*  then sets event handlers for input text box to add new
*  item.  Performs register() of both View and itself
*  to set up list checkbox and remove click event handlers
*  after DOM rebuilt.
*/
class Controller {
    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.DOM = view.DOM;
    }
    notify() {
    }
}
