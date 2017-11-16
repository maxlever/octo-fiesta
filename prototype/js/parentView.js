
class ParentView extends View {
   constructor(model) {
       super(model);
       this.views = [];
       this.views.push(new ToolbarView(model));
       this.views.push(new HeaderView(model));
       this.views.push(new FooterView(model));
   }

   _updateSelectors() {
       for (var i = 0; i < this.views.length; i++) {
           this.views[i]._updateSelectors();
       }
   }

   getDOM() {
       var DOMs = {};
       for (var i = 0; i < this.views.length; i++) {
           DOMs[this.views[i].constructor.name] = this.views[i].DOM;
       }
       return DOMs;
   }

   notify() {
       for (var i = 0; i < this.views.length; i++) {
           this.views[i].notify();
       }
   }
}
