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
      var move = document.getElementById("move");
      var canvas = document.getElementById("canvas");


      var mi = document.getElementsByClassName("menu-item");

      var dialogueBox = document.getElementsByClassName("dialogue-box")[0];
      var dialogueText = document.getElementById("dialogueText");

      dialogueBox.addEventListener("click", function(e) {
        dialogueText.innerHTML ="";
      }, false);

      pencil.addEventListener("click", function (e) {
          dialogueText.innerHTML = "Oh no! That's not how a pencil should act. In a well-designed "
          + "interface, tools should match their functions in the real world. That synchronicity "
          + "allows users to easily understand the functions of the interface."
      }, false);

      text.addEventListener("click", function (e) {
          dialogueText.innerHTML = "Oh no! This text is no longer editable. In a well-designed "
          + "interface, users are able to easily undo their previous actions. This gives users "
          + "more control over their interactions, and reduces the time spent re-doing rather than un-doing."
      }, false);

      mi[4].addEventListener("click", function (e) {
          console.log("4");
          dialogueText.innerHTML = "Hm..another menu."
          e.stopPropagation();
      }, false);

      mi[6].addEventListener("click", function (e) {
        console.log("6");
          dialogueText.innerHTML = "Yet another menu!"
          e.stopPropagation();
      }, false);

      mi[7].addEventListener("click", function (e) {
        console.log("7");
          dialogueText.innerHTML = "Wow, still more menus?"
          e.stopPropagation();
      }, false);

      mi[8].addEventListener("click", function (e) {
        console.log("8");
          dialogueText.innerHTML = "This is an absurd amount of menus."
          e.stopPropagation();
      }, false);

      mi[9].addEventListener("click", function (e) {
        console.log("9");
          dialogueText.innerHTML = "Oh no! That sure was a lot of menus. In a well-designed "
          + "interface, common actions are quick and often have shortcuts. This allows users to be "
          + "more efficient."
          e.stopPropagation();
      }, false);

      move.addEventListener("click", function (e) {
          dialogueText.innerHTML =  "Oh no! Not only is that tool is hidden out of sight inside "
          + "a submenu, it doesn't relate to the rest of the tools. A well-designed "
          + "interface displays necessary tools where users can see them. This reduces the user's "
          + "memory load, and allows them to learn the interface more easily."
          canvas.addEventListener("mousedown", function (e) {
              dialogueText.innerHTML = "Oh no! That move tool is acting a little funny. "
              + "A well-designed interface would try to match the system to the real world "
              + "and allow you to move a specific selected area rather than the entire canvas"
          }, false);
      }, false);

      fill.addEventListener("mousedown", function (e) {
          dialogueText.innerHTML = "Oh no! That fill tool is not working like expected. "
          + "A well-designed interface would try to match the system to the real world "
          + "by filling in the area a certain color like in other painting programs, instead "
          + "of just filling in a select square with color."
      }, false);
    }
}
