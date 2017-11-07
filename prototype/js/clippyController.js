class ClippyController extends Controller {

    constructor(view, model) {
        super(view, model);
    }

    notify() {
      var pencil = document.getElementById("pencil");
      var eraser = document.getElementById("eraser");
      var text = document.getElementById("text");
      var line = document.getElementById("line");
      var select = document.getElementById("select");
      var fill = document.getElementById("fill");

      var dialogueText = document.getElementById("dialogueText");

      pencil.addEventListener("click", function (e) {
          dialogueText.innerHTML = "Annoying Pencil Event Text"
      }, false);
      text.addEventListener("click", function (e) {
            dialogueText.innerHTML = "Annoying Text Event Text"
      }, false);
    }
}
