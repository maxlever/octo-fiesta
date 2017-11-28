/**
 *  Model holds data with access and modify methods.
 *  register() adds items to subject.  When model state
 *  changes calls subject.notifyObservers();
 */
class Model {
    constructor() {
        this.subject = new Subject();
        this.colors = [
            "black", "blue", "green", "red",
            "yellow", "orange", "white"
        ];
        this.tools = [
            "pencil", "eraser", "text",
            "line", "select", "fill"
        ];
        this.items = [{
            "title": "File",
            "items": [{
                    "title": "New"
                },
                {
                    "title": "Import Image",
                    "items": [{
                            "title": "From PowerPoint"
                        },
                        {
                            "title": "From Computer",
                            "items": [{
                                    "title": "Desktop",
                                    "items": [
                                            {
                                                "title": "Sort by name",
                                                "items": [{"title": "cat.png"}]
                                            },
                                            {"title": "Sort by date"},
                                            {"title": "Sort by extension"}
                                        ]
                                },
                                {
                                    "title": "Documents"
                                }
                            ]
                        }
                    ]
                }
            ]
        }, {
            "title": "edit",
            "items": [
                {"title": "cut"},
                {"title": "copy"},
                {"title": "paste"}
            ]
        }];
        this.currentColor = 0;
        this.currentTool = 0;
    }
    get tool() {
        return this.tools[this.currentTool];
    }
    get color() {
        return this.colors[this.currentColor];
    }
    set tool(idx) {
        this.currentTool = idx;
        this.subject.notifyObservers();
    }
    set color(idx) {
        this.currentColor = idx;
        this.subject.notifyObservers();
    }
    // observer
    register() {
        this.subject.removeAll();
        for (var i = 0; i < arguments.length; i++) {
            this.subject.add(arguments[i]);
        }
        this.subject.notifyObservers();
    }


}
