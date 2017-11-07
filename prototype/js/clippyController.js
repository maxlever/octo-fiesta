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

      var mi = document.getElementsByClassName("menu-item");

      var dialogueText = document.getElementById("dialogueText");

      pencil.addEventListener("click", function (e) {
        setTimeout(function(){
          dialogueText.innerHTML = "Annoying Pencil Event Text"
        },5000);
      }, false);
      text.addEventListener("click", function (e) {
        setTimeout(function(){
          dialogueText.innerHTML = "Annoying Text Event Text"
        },5000);
      }, false);
      mi[8].addEventListener("click", function (e) {
          dialogueText.innerHTML = "Annoying SubMenu Event Text"
      }, false);
    }
}
