

class ToolbarController extends Controller {
    constructor(view, model) {
        super(view, model);
    }

    notify() {
        let _this = this;
        this.DOM.tool.on('click', function (e) {
            if (e.currentTarget.id == "line" ||
                e.currentTarget.id == "fill" ||
                e.currentTarget.id == "select-rect") {

            }
            else if (e.currentTarget.id == "move") {
                _this.model.tool = 4;
            } else {
                _this.model.tool = $(this).index();
            }
        });
    }
}
