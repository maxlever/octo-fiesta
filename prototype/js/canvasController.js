class CanvasController extends Controller {
    constructor(view, model) {
        super(view, model);
        this.canvas = this.DOM.canvas; // $ elem
        this.c = this.canvas[0]; // js
        this.w = this.c.width, this.h = this.c.height,
        this.flag = false, this.dot_flag = false,
        this.lineWidth = 2,
        this.prevX = 0, this.currX = 0, this.prevY = 0, this.currY = 0;
    }

    pencilSelected() {
        this.lineWidth = 2;
        this.color = this.model.color;
        this._brushSelected();
    }

    selectSelected() {

    }

    fillSelected() {

    }

    textSelected() {

    }

    lineSelected() {

    }

    eraserSelected() {
        this.lineWidth = 3;
        this.color = (this.c.style.backgroundColor == "") ?
            "white" : this.c.style.backgroundColor;
        this._brushSelected();
    }

    _brushSelected() {
        let _this = this;
        this.canvas.on({
            "mousemove": function(e) {
                _this.findXY("move", e);
            },
            "mousedown": function(e) {
                _this.findXY("down", e);
            },
            "mouseup": function(e) {
                _this.findXY("up", e);
            },
            "mouseout": function(e) {
                _this.findXY("out", e);
            }
        });
    }

    findXY(res, e) {
        var rect = this.c.getBoundingClientRect();
        switch (res) {
            case "down":
                this.prevX = this.currX;
                this.prevY = this.currY;
                this.currX = (e.clientX - rect.left) / (rect.right - rect.left) * this.c.width;
                this.currY = (e.clientY - rect.top) / (rect.bottom - rect.top) * this.c.height;

                this.flag = true;
                this.dot_flag = true;
                if (this.dot_flag) {
                    this.view.drawDot(this.currX, this.currY, this.color, this.lineWidth);
                    this.dot_flag = false;
                }
                break;
            case "move":
                if (this.flag) {
                    this.prevX = this.currX;
                    this.prevY = this.currY;
                    this.currX = (e.clientX - rect.left) / (rect.right - rect.left) * this.c.width;
                    this.currY = (e.clientY - rect.top) / (rect.bottom - rect.top) * this.c.height;
                    this.view.drawLine(this.prevX, this.prevY, this.currX, this.currY, this.color, this.lineWidth);
                    this.view.drawLine(this.prevX+50, this.prevY, this.currX+50, this.currY, this.color, this.lineWidth);
                }
                break;
            case "out":
            case "up":
                this.flag = false;
                break;
            default:
                break;
        }
    }

    notify() {
        let _this = this;
        switch (this.model.tool) {
            case ("pencil"):
                this.pencilSelected();
                break;
            case ("select"):
                this.selectSelected();
                break;
            case ("fill"):
                this.fillSelected();
                break;
            case ("text"):
                this.textSelected();
                break;
            case ("line"):
                this.lineSelected();
                break;
            case ("eraser"):
                this.eraserSelected();
                break;
            default:
                break;
        }
    }
}
