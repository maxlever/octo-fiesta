
class HeaderController extends Controller {
    constructor(view, model) {
        super(view, model);
        this.namespace = "header";
    }

    notify() {
        let _this = this;
        this.DOM.item.off("click." + this.namespace).on("click." + this.namespace, function (e) {
            let item = $(e.target.parentElement);
            let itemName = e.target.id;
            _this.DOM.item.removeClass('selected');
            if (itemName === "menu-new") {
                menuNew(e);
            } else if (itemName === "menu-cat-png") {
                menuCat(e);
            } else {
                item.addClass('selected');
                item.parents('.menu-item').addClass('selected');
            }
        });

        $(document).off("click." + this.namespace).on("click." + this.namespace, function (e) {
            if (!_this.DOM.item.is(e.target) && _this.DOM.item.has(e.target).length === 0) 
            {
                   _this.DOM.item.removeClass('selected');
            }
        })

        function menuNew(e) {
          var ctx = $('#canvas')[0].getContext('2d');
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        function menuCat(e) {
            var ctx = $('#canvas')[0].getContext('2d');
            var base_image = new Image();
            base_image.src = 'images/cat.png';
            base_image.onload = function(){
                ctx.drawImage(base_image, 50, 50);
            }
        }
    }
}
