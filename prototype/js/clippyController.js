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
      var fill = document.getElementById("move");

      var mi = document.getElementsByClassName("menu-item");

      var dialogueText = document.getElementById("dialogueText");

      pencil.addEventListener("click", function (e) {
        setTimeout(function(){
          dialogueText.innerHTML = "Oh no! That's not how a pencil should act. In a well-designed "
          + "interface, tools should match their functions in the real world. That synchronicity "
          + "allows users to easily understand the functions of the interface."
        },3000);
      }, false);

      text.addEventListener("click", function (e) {
        setTimeout(function(){
          dialogueText.innerHTML = "Oh no! This text is no longer editable. In a well-designed "
          + "interface, users are able to easily undo their previous actions. This gives users "
          + "more control over their interactions, and reduces the time spent re-doing rather than un-doing."
        },3000);
      }, false);

      mi[9].addEventListener("click", function (e) {
          dialogueText.innerHTML = "Oh no! That sure was a lot of menus. In a well-designed "
          + "interface, common actions are quick and often have shortcuts. This allows users to be "
          + "more efficient."
      }, false);

      move.addEventListener("click", function (e) {
        dialogueText.innerHTML = "Oh no! That tool is hidden out of sight inside a submenu. A well-designed interface "
        + "displays necessary tools where users can see them. This reduces the user's memory "
        + "load, and allows them to learn the interface more easily."
      }, false);

      /* 
        Clippy Submenu Text
        "Hm..another menu."
        "Wow, still more menus?"
        "Yet another menu!"
        "This is an absurd amount of menus."
      */
    }
}
