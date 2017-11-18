
class HeaderController extends Controller {
    constructor(view, model) {
        super(view, model);
        this.namespace = "header";
    }

    notify() {
        let _this = this;
        this.DOM.item.on("click." + this.namespace, function (e) {
            let item = $(e.target.parentElement);
            let itemName = e.target.innerText;
            _this.DOM.item.removeClass('selected');
            item.addClass('selected');
            item.parents('.menu-item').addClass('selected');
        });
        $(".container, .topbar, .footer").on("click." + this.namespace, function (e) {
           _this.DOM.item.removeClass('selected');
        })
        $(".menu-item--new button").on("click." + this.namespace, function(e) {
          var ctx = $('#canvas')[0].getContext('2d');
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        })
        $(".menu-item--cat-png button").on("click." + this.namespace, function (e) {
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
