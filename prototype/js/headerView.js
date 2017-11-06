class HeaderView extends View {
    constructor(model) {
        super(model);
        this.DOMselectors = {
            item: '.menu-item'
        };
        this.DOM = {
            templateIn: $('#header-template'),
            templateOut: $('.header')
        };
        this._init();
    }

    _getData() {
        return {
            items: this.model.items
        }
    }

    notify() {
        super.notify();
    }
}
