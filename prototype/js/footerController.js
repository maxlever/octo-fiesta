
class FooterController extends Controller {
    constructor(view, model) {
        super(view, model);
    }

    notify() {
        let _this = this;
        this.DOM.color.off("click.footer").on("click.footer", function (e) {
            _this.model.color = $(this).index();
        });
    }
}
