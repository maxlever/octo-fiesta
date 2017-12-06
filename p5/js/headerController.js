
class HeaderController extends Controller {
    constructor(view, model) {
        super(view, model);
    }

    notify() {
        let _this = this;
        this.DOM.item.on('click', function (e) {
            let item = $(e.target.parentElement);
            let itemName = e.target.innerText;
            _this.DOM.item.removeClass('selected');
            item.addClass('selected');
            item.parents('.menu-item').addClass('selected');
        });
        $(".container, .topbar, .footer").click(function (e) {
           _this.DOM.item.removeClass('selected');
        })
        $(".menu-item--cat_png").click(function (e) {
            var ctx = $('#canvas')[0].getContext('2d');
            var base_image = new Image();
            base_image.src = 'images/cat.png';
            base_image.onload = function(){
                ctx.drawImage(base_image, 50, 50);
            }
            _this.DOM.item.removeClass('selected');
            $(".menu-item--cat_png").off('click');
        });
    }
}
