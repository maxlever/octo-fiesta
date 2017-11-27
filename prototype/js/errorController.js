class ErrorController extends Controller {
    constructor(view, model) {
        super(view, model);
    }

    notify() {
        let _this = this;
        this.DOM.color.click(function (e) {
            _this.model.color = $(this).index();
        });
    }
}
