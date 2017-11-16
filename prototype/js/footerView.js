
class FooterView extends View {
    constructor(model) {
        super(model);
        this.DOMselectors = {
            color: '.palette__picker .color'
        };
        this.DOM = {
            templateIn: $('#footer-template'),
            templateOut: $('.footer')
        };
        this._init();
    }

    _getData() {
        return {
            colors: this.model.colors,
            currentColor: this.model.color
        }
    }

    notify() {
        super.notify();
    }
}
