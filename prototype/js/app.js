const model = new Model(),
    headerView = new HeaderView(model),
    toolbarView = new ToolbarView(model),
    footerView = new FooterView(model),
    canvasView = new CanvasView(model),
    clippyView = new ClippyView(model),
    headerController = new HeaderController(headerView, model),
    toolbarController = new ToolbarController(toolbarView, model),
    footerController = new FooterController(footerView, model),
    canvasController = new CanvasController(canvasView, model),
    clippyController = new ClippyController(clippyView, model);

model.register(
    headerView,
    toolbarView,
    footerView,
    canvasView,
    clippyView,
    headerController,
    toolbarController,
    footerController,
    canvasController,
    clippyController);
