class CanvasController extends Controller {
    constructor(view, model) {
        super(view, model);
        this.canvas = this.DOM.canvas; // $ elem
        this.c = this.canvas[0]; // js
        this.ctx = this.c.getContext('2d');
        this.w = this.c.width, this.h = this.c.height,
        this.flag = false, this.dot_flag = false,
        this.lineWidth = 2,
        this.prevX = 0, this.currX = 0, this.prevY = 0, this.currY = 0;
        this.isDragging = false;
        this.move = false;
    }

    pencilSelected() {
        this.lineWidth = 2;
        this.color = this.model.color;
        this._brushSelected();
    }

    selectSelected() {
      $("#select-submenu").toggle();
      $("#select").click( function(e){
          $("#select-submenu").toggle();
      });
      let _this = this;
      $("#move").click(function() {
          _this.move = true;
          $("#select-submenu").toggle();
          _this.moveSelected();

      })
    }

    moveSelected() {

        let _this = this;
        this.canvas.on({
            "mousemove": function(e) {
                if (_this.move) {
                    _this.moveCanvas("move", e);
                }
            },
            "mousedown": function(e) {
                if (_this.move) {
                    _this.moveCanvas("down", e);
                }
            },
            "mouseup": function(e) {
                if (_this.move) {
                    _this.moveCanvas("up", e);
                }
            },
            "mouseout": function(e) {
                if (_this.move) {
                    _this.moveCanvas("out", e);
                }
            }
        });
    }

    moveCanvas(res, e) {
        switch (res) {
            case "down":
                this.isDragging = true;
                this.image = new Image();
                this.image.src = this.c.toDataURL();
                this.image.setAttribute('crossOrigin', 'anonymous');
                break;
            case "move":
                if( this.isDragging == true )
                {
                    var x = this._mouseX(e);
                    var y = this._mouseY(e);
                    this.buildCanvasOffset(x - this.w/2, y - this.h/2);
                }

                break;
            case "out":
            case "up":
                this.isDragging = false;
                break;
            default:
                break;
        }
    }

    buildCanvasOffset(x, y) {
        this.ctx.clearRect(0, 0, this.w, this.h);
        // console.log("Drawing offset " +  x  +" " + y);
        this.ctx.drawImage(this.image, x, y, this.w, this.h);
    }

    fillSelected() {

    }

    textSelected() {
        this.textFlag = false;
        this.color = this.model.color;
        var ctx = this.c.getContext("2d");
        ctx.font = "18px Arial";

        this.keyHistory = "";

        window.addEventListener("keyup", keyUpHandler, true);

        function addletter(letter) {
            _this.keyHistory += letter;
            ctx.fillStyle = _this.color;
            ctx.fillText(_this.keyHistory, _this.textX, _this.textY);
        }

        let _this = this;
        function keyUpHandler(event) {
            if (_this.textFlag) {
                var letters = "abcdefghijklmnopqrstuvwxyz";
                var key = event.keyCode;
                if (key > 64 && key < 91) {
                    var letter = letters.substring(key - 64, key - 65);
                    addletter(letter);
                }
            }
        }
        this.c.style.cursor = 'text';
        this.canvas.click(function (e) {
            if (_this.textFlag == false) {
                _this.textFlag = true;
            }
            _this.keyHistory = "";
            _this.textX = parseInt(_this._mouseX(e));
            _this.textY = parseInt(_this._mouseY(e));
            _this.c.style.cursor = '';
        });
    }

    lineSelected() {

    }

    eraserSelected() {
        this.lineWidth = 20;
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

    _mouseX(e) {
        var rect = this.c.getBoundingClientRect();
        return (e.clientX - rect.left) / (rect.right - rect.left) * this.c.width;
    }
    _mouseY(e) {
        var rect = this.c.getBoundingClientRect();
        return (e.clientY - rect.top) / (rect.bottom - rect.top) * this.c.height;
    }

    findXY(res, e) {
        switch (res) {
            case "down":
                this.prevX = this.currX;
                this.prevY = this.currY;
                this.currX = this._mouseX(e);
                this.currY = this._mouseY(e);

                this.flag = true;
                this.dot_flag = true;
                if (this.dot_flag) {
                    this.view.drawDot(this.currX, this.currY, this.color, this.lineWidth);
                    if(this.model.tool === "pencil") {this.view.drawDot(this.currX+50, this.currY, this.color, this.lineWidth);};
                    this.dot_flag = false;
                }
                break;
            case "move":
                if (this.flag) {
                    this.prevX = this.currX;
                    this.prevY = this.currY;
                    this.currX = this._mouseX(e);
                    this.currY = this._mouseY(e);
                    this.view.drawLine(this.prevX, this.prevY, this.currX, this.currY, this.color, this.lineWidth);
                    if(this.model.tool === "pencil"){this.view.drawLine(this.prevX+50, this.prevY, this.currX+50, this.currY, this.color, this.lineWidth);}
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
        this.canvas.off();
        this.c.style.cursor = '';
        this.isDragging = false;
        this.move = false;
        $('#select-submenu').hide();
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
