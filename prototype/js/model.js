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
            "title": "file",
            "items": [{
                    "title": "file1",
                    "items": [{
                            "title": "img4"
                        },
                        {
                            "title": "img5"
                        }
                    ]
                },
                {
                    "title": "file2",
                    "items": [{
                            "title": "bla1"
                        },
                        {
                            "title": "bla2",
                            "items": [{
                                    "title": "img1"
                                },
                                {
                                    "title": "img2"
                                }
                            ]
                        }
                    ]
                }
            ]
        }, {
            "title": "edit"
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
