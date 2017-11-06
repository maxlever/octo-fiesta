

class ToolbarController extends Controller {
    constructor(view, model) {
        super(view, model);
    }

    notify() {
        let _this = this;
        this.DOM.tool.on('click', function (e) {
            _this.model.tool = $(this).index();
        });
    }
}
