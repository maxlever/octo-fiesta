class CanvasView extends View {
    constructor(model) {
        super(model);
        this.DOMselectors = {
            tool: '.tool'
        };
        this.DOM = {
            canvas: $("#canvas")
        };
        this.ctx = this.DOM.canvas[0].getContext("2d");

    }


    drawLine(x1, y1, x2, y2, color, lineWidth) {
       this.ctx.beginPath();
       this.ctx.moveTo(x1, y1);
       this.ctx.lineTo(x2, y2);
       this.ctx.strokeStyle = color;
       this.ctx.lineWidth = lineWidth;
       this.ctx.stroke();
       this.ctx.closePath();
    }

    drawDot(x, y, color, width) {
        this.ctx.beginPath();
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, width, width);
        this.ctx.closePath();
    }

    notify() {

    }
}
