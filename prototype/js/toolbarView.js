class ToolbarView extends View {
    constructor(model) {
        super(model);
        this.DOMselectors = {
            tool: '.tool'
        };
        this.DOM = {
            templateIn: $('#toolbar-template'),
            templateOut: $('.toolbar')
        };
        this._init();
    }

    _getData() {
        return {
            tools: this.model.tools,
            currentTool: this.model.tool
        }
    }
    notify() {
        super.notify();
        this.DOM.tool.removeClass('selected');
        $('#' + this._getData().currentTool + '').addClass('selected');
        var disabled = "#fill,"+
                " #select-rect,"+
                " #line";
        $(disabled).addClass("disabled");
        // todo: make this less hacky
    }
}
