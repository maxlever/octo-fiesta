class ClippyController extends Controller {

    constructor(view, model) {
        super(view, model);
        this.dialogueText = $("#dialogueText");
        this.errorText = $(".inner-text");
    }

    notify() {
        this._dialogue(".dialogue-box", "");

        this._dialogue("#pencil", "Oh no! That's not how a pencil should act. In a well-designed " +
            "interface, tools should match their functions in the real world. That synchronicity " +
            "allows users to easily understand the functions of the interface.");

        this._dialogue("#text", "Oh no! This text is no longer editable. In a well-designed " +
            "interface, users are able to easily undo their previous actions. This gives users " +
            "more control over their interactions, and reduces the time spent re-doing rather than un-doing.");

        this._dialogue(".menu-item--import-image button", "Hm..another menu.");

        this._dialogue(".menu-item--from-computer button", "Yet another menu!");

        this._dialogue(".menu-item--desktop button", "Wow, still more menus?");

        this._dialogue(".menu-item--sort-by-name button", "This is an absurd amount of menus.");

        this._dialogue(".menu-item--cat-png button", "Oh no! That sure was a lot of menus. In a well-designed " +
            "interface, common actions are quick and often have shortcuts. This allows users to be " +
            "more efficient.");

        this._dialogue(".menu-item--new button", "Oh no! That new tool is a little unconventinal. " +
            "While it does give the user control and freedom to redo, a better well-designed " +
            "interface would give users clearly marked exits and support undo-ing and re-doing " +
            "the undesired action. ");

        var _this = this;
	this._helper("#move", function(e) {
            _this.dialogueText.text("Oh no! Not only is that tool hidden out of sight inside " +
                "a submenu, it doesn't relate to the rest of the tools. A well-designed " +
                "interface displays necessary tools where users can see them. This reduces the user's " +
                "memory load, and allows them to learn the interface more easily.");
	    var _this = _this;
            _this._helper("#canvas", function(e) {
                _this.dialogueText.text("Oh no! That move tool is acting a little funny. " +
                    "A well-designed interface would try to match the system to the real world " +
                    "and not erase everything moved outside of the main canvas area");
            });
        });
	    
        this._error("#fill, #line, #select-rect", "");
    }

    _error(triggerObj, text) {
	var _this = this;
        this._helper(triggerObj, function (e) {
            var dialog = $(".error-box");
	    var textPlace = _this.errorText;
            dialog.show();
	    _this._helper(".ok-button", function(e) {
                dialog.hide();
            });
        });
    }

    // shows the given text when the given object is clicked
    _dialogue(triggerObj, text) {
	var textPlace = this.dialogueText; 
        this._helper(triggerObj, function(e) {
            textPlace.text(text);
        });
    }

    _helper(triggerObj, handler) {
        var obj = $(triggerObj);
        var namespace = "clippy";
        var trigger = "click";
        var namespacedTrigger = trigger + "." + namespace;
        obj.off(namespacedTrigger).on(namespacedTrigger, handler);
    }
}
