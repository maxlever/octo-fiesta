/**
 *  View handle output to template.  On init gets DOM refs,
 *  and expose to controller.  When model calls notify(),
 *  View queries model for data and data performs pres. logic.
 */
class View {
    constructor(model) {
        this.model = model;
    }

    _getData() {
        return {
            colors: this.model.colors,
            tools: this.model.tools,
            currentTool: this.model.tool,
            currentColor: this.model.color
        }
    }

    _updateSelectors() {
        for (var selector in this.DOMselectors) {
            if (this.DOMselectors.hasOwnProperty(selector)) {
                this.DOM[selector] = $(this.DOMselectors[selector]);
            }
        }
    }

    _init() {
        this.templateFnc =
            Handlebars.compile(this.DOM.templateIn.html());
        this._updateSelectors();
    }

    getDOM() {
        return this.DOM;
    }
    notify() {
        if (this.templateFnc) {
            const html = this.templateFnc(this._getData());
            this.DOM.templateOut.html(html);
        }
        this._updateSelectors();
    }
}
