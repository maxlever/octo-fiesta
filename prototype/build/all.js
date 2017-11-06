const model=new Model,headerView=new HeaderView(model),toolbarView=new ToolbarView(model),footerView=new FooterView(model),canvasView=new CanvasView(model),headerController=new HeaderController(headerView,model),toolbarController=new ToolbarController(toolbarView,model),footerController=new FooterController(footerView,model),canvasController=new CanvasController(canvasView,model);model.register(headerView,toolbarView,footerView,canvasView,headerController,toolbarController,footerController,canvasController);class CanvasController extends Controller{constructor(view,model){super(view,model);this.canvas=this.DOM.canvas;this.c=this.canvas[0];this.w=this.c.width,this.h=this.c.height,this.flag=false,this.dot_flag=false,this.lineWidth=2,this.prevX=0,this.currX=0,this.prevY=0,this.currY=0}pencilSelected(){this.color=this.model.color;this._brushSelected()}selectSelected(){}fillSelected(){}textSelected(){}lineSelected(){}eraserSelected(){this.lineWidth=3;this.color=this.c.style.backgroundColor==""?"white":this.c.style.backgroundColor;this._brushSelected()}_brushSelected(){let _this=this;this.canvas.on({mousemove:function(e){_this.findXY("move",e)},mousedown:function(e){_this.findXY("down",e)},mouseup:function(e){_this.findXY("up",e)},mouseout:function(e){_this.findXY("out",e)}})}findXY(res,e){var rect=this.c.getBoundingClientRect();switch(res){case"down":this.prevX=this.currX;this.prevY=this.currY;this.currX=(e.clientX-rect.left)/(rect.right-rect.left)*this.c.width;this.currY=(e.clientY-rect.top)/(rect.bottom-rect.top)*this.c.height;this.flag=true;this.dot_flag=true;if(this.dot_flag){this.view.drawDot(this.currX,this.currY,this.color,this.lineWidth);this.dot_flag=false}break;case"move":if(this.flag){this.prevX=this.currX;this.prevY=this.currY;this.currX=(e.clientX-rect.left)/(rect.right-rect.left)*this.c.width;this.currY=(e.clientY-rect.top)/(rect.bottom-rect.top)*this.c.height;this.view.drawLine(this.prevX,this.prevY,this.currX,this.currY,this.color,this.lineWidth)}break;case"out":case"up":this.flag=false;break;default:break}}notify(){let _this=this;switch(this.model.tool){case"pencil":this.pencilSelected();break;case"select":this.selectSelected();break;case"fill":this.fillSelected();break;case"text":this.textSelected();break;case"line":this.lineSelected();break;case"eraser":this.eraserSelected();break;default:break}}}class CanvasView extends View{constructor(model){super(model);this.DOMselectors={tool:".tool"};this.DOM={canvas:$("#canvas")};this.ctx=this.DOM.canvas[0].getContext("2d")}drawLine(x1,y1,x2,y2,color,lineWidth){this.ctx.beginPath();this.ctx.moveTo(x1,y1);this.ctx.lineTo(x2,y2);this.ctx.strokeStyle=color;this.ctx.lineWidth=lineWidth;this.ctx.stroke();this.ctx.closePath()}drawDot(x,y,color,width){this.ctx.beginPath();this.ctx.fillStyle=color;this.ctx.fillRect(x,y,width,width);this.ctx.closePath()}notify(){}}class Controller{constructor(view,model){this.view=view;this.model=model;this.DOM=view.DOM}notify(){}}class FooterController extends Controller{constructor(view,model){super(view,model)}notify(){let _this=this;this.DOM.color.click(function(e){_this.model.color=$(this).index()})}}class FooterView extends View{constructor(model){super(model);this.DOMselectors={color:".color"};this.DOM={templateIn:$("#footer-template"),templateOut:$(".footer")};this._init()}_getData(){return{colors:this.model.colors,currentColor:this.model.color}}notify(){super.notify()}}class HeaderController extends Controller{constructor(view,model){super(view,model)}notify(){let _this=this;this.DOM.item.on("click",function(e){let item=$(e.target.parentElement);let itemName=e.target.innerText;_this.DOM.item.removeClass("selected");item.addClass("selected");item.parents(".menu-item").addClass("selected")})}}class HeaderView extends View{constructor(model){super(model);this.DOMselectors={item:".menu-item"};this.DOM={templateIn:$("#header-template"),templateOut:$(".header")};this._init()}_getData(){return{items:this.model.items}}notify(){super.notify()}}function Queue(){var a=[],b=0;this.getLength=function(){return a.length-b};this.isEmpty=function(){return 0==a.length};this.enqueue=function(b){a.push(b)};this.dequeue=function(){if(0!=a.length){var c=a[b];2*++b>=a.length&&(a=a.slice(b),b=0);return c}};this.peek=function(){return 0<a.length?a[b]:void 0}}function checkCondition(v1,operator,v2){switch(operator){case"==":return v1==v2;case"===":return v1===v2;case"!==":return v1!==v2;case"<":return v1<v2;case"<=":return v1<=v2;case">":return v1>v2;case">=":return v1>=v2;case"&&":return v1&&v2;case"||":return v1||v2;default:return false}}Handlebars.registerHelper("ifCond",function(v1,operator,v2,options){return checkCondition(v1,operator,v2)?options.fn(this):options.inverse(this)});Handlebars.registerPartial("menu",$("#menu-partial").html());var canvas,ctx,flag=false,prevX=0,currX=0,prevY=0,currY=0,dot_flag=false;var color="black",lineWidth=2;function init(){canvas=document.getElementById("can");ctx=canvas.getContext("2d");w=canvas.width;h=canvas.height}function changeColor(obj){switch(obj.id){case"green":color="green";console.log("color is green");break;case"blue":color="blue";console.log("color is blue");break;case"red":color="red";console.log("color is red");break;case"yellow":color="yellow";console.log("color is yellow");break;case"orange":color="orange";console.log("color is orange");break;case"black":color="black";console.log("color is black");break;case"white":color="white";console.log("color is white");break}}function pencilSelected(){console.log("pencil is selected");canvas.addEventListener("mousemove",function(e){findxy("move",e)},false);canvas.addEventListener("mousedown",function(e){findxy("down",e)},false);canvas.addEventListener("mouseup",function(e){findxy("up",e)},false);canvas.addEventListener("mouseout",function(e){findxy("out",e)},false)}function findxy(res,e){var rect=canvas.getBoundingClientRect();if(res=="down"){prevX=currX;prevY=currY;currX=(e.clientX-rect.left)/(rect.right-rect.left)*canvas.width;currY=(e.clientY-rect.top)/(rect.bottom-rect.top)*canvas.height;flag=true;dot_flag=true;if(dot_flag){ctx.beginPath();ctx.fillStyle=color;ctx.fillRect(currX,currY,2,2);ctx.closePath();dot_flag=false}}if(res=="up"||res=="out"){flag=false}if(res=="move"){if(flag){prevX=currX;prevY=currY;currX=(e.clientX-rect.left)/(rect.right-rect.left)*canvas.width;currY=(e.clientY-rect.top)/(rect.bottom-rect.top)*canvas.height;draw()}}}function draw(){ctx.beginPath();ctx.moveTo(prevX,prevY);ctx.lineTo(currX,currY);ctx.strokeStyle=color;ctx.lineWidth=lineWidth;ctx.stroke();ctx.closePath()}function eraserSelected(){console.log("eraser is selected");lineWidth=3;color=canvas.style.backgroundColor;if(color===""){console.log("background is white");color="white"}else{color=canvas.style.backgroundColor;console.log("background is not white")}canvas.addEventListener("mousemove",function(e){findxy("move",e)},false);canvas.addEventListener("mousedown",function(e){findxy("down",e)},false);canvas.addEventListener("mouseup",function(e){findxy("up",e)},false);canvas.addEventListener("mouseout",function(e){findxy("out",e)},false)}function selectSelected(){}function paintbucketSelected(){}function textSelected(){console.log();canvas.addEventListener("mousedown",function(e){ctx.font="15px Arial";ctx.fillText("Add Text Here",15,30);var div=document.createElement("div");canvas.appendChild(div);div.setAttribute("contenteditable","true")},false)}function lineSelected(){console.log("line is selected")}function fileMenu(){document.getElementById("fileDropDown").classList.toggle("show")}window.onclick=function(e){if(!e.target.matches(".file-dropbtn")){var fileDropDown=document.getElementById("fileDropDown");if(fileDropDown.classList.contains("show")){fileDropDown.classList.remove("show")}}};class Model{constructor(){this.subject=new Subject;this.colors=["blue","green","red","yellow","orange","black"];this.tools=["pencil","eraser","text","line","select","fill"];this.items=[{title:"file",items:[{title:"file1",items:[{title:"img4"},{title:"img5"}]},{title:"file2",items:[{title:"bla1"},{title:"bla2",items:[{title:"img1"},{title:"img2"}]}]}]},{title:"edit"}];this.currentColor=0;this.currentTool=0}get tool(){return this.tools[this.currentTool]}get color(){return this.colors[this.currentColor]}set tool(idx){this.currentTool=idx;this.subject.notifyObservers()}set color(idx){this.currentColor=idx;this.subject.notifyObservers()}register(){this.subject.removeAll();for(var i=0;i<arguments.length;i++){this.subject.add(arguments[i])}this.subject.notifyObservers()}}class ParentView extends View{constructor(model){super(model);this.views=[];this.views.push(new ToolbarView(model));this.views.push(new HeaderView(model));this.views.push(new FooterView(model))}_updateSelectors(){for(var i=0;i<this.views.length;i++){this.views[i]._updateSelectors()}}getDOM(){var DOMs={};for(var i=0;i<this.views.length;i++){DOMs[this.views[i].constructor.name]=this.views[i].DOM}return DOMs}notify(){for(var i=0;i<this.views.length;i++){this.views[i].notify()}}}class Subject{constructor(){this.observers=[]}add(item){this.observers.push(item)}removeAll(){this.observers.length=0}notifyObservers(){this.observers.forEach(function(elem){elem.notify()})}}class ToolbarController extends Controller{constructor(view,model){super(view,model)}notify(){let _this=this;this.DOM.tool.on("click",function(e){_this.model.tool=$(this).index()})}}class ToolbarView extends View{constructor(model){super(model);this.DOMselectors={tool:".tool"};this.DOM={templateIn:$("#toolbar-template"),templateOut:$(".toolbar")};this._init()}_getData(){return{tools:this.model.tools,currentTool:this.model.tool}}notify(){super.notify();this.DOM.tool.removeClass("selected");$("#"+this._getData().currentTool+"").addClass("selected")}}class View{constructor(model){this.model=model}_getData(){return{colors:this.model.colors,tools:this.model.tools,currentTool:this.model.tool,currentColor:this.model.color}}_updateSelectors(){for(var selector in this.DOMselectors){if(this.DOMselectors.hasOwnProperty(selector)){this.DOM[selector]=$(this.DOMselectors[selector])}}}_init(){this.templateFnc=Handlebars.compile(this.DOM.templateIn.html());this._updateSelectors()}getDOM(){return this.DOM}notify(){const html=this.templateFnc(this._getData());this.DOM.templateOut.html(html);this._updateSelectors()}}