import App = app.App;
window.addEventListener('DOMContentLoaded', () => {

    var app = new App(true);
    app.bootstrap("body");
    app.router.go("somewhere");

});