const model = new Model(),
    headerView = new HeaderView(model),
    toolbarView = new ToolbarView(model),
    footerView = new FooterView(model),
    canvasView = new CanvasView(model),
    headerController = new HeaderController(headerView, model),
    toolbarController = new ToolbarController(toolbarView, model),
    footerController = new FooterController(footerView, model),
    canvasController = new CanvasController(canvasView, model);

model.register(
    headerView,
    toolbarView,
    footerView,
    canvasView,
    headerController,
    toolbarController,
    footerController,
    canvasController);
