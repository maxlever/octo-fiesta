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
        var disabled = ".menu-item--cut .menu-link,"+
                " .menu-item--paste .menu-link,"+
                " .menu-item--copy .menu-link,"+
                " .menu-item--from-powerpoint .menu-link,"+
                " .menu-item--documents .menu-link,"+
                " .menu-item--sort-by-date .menu-link,"+
                " .menu-item--sort-by-extension .menu-link";
        $(disabled).addClass("disabled");


    }
}
