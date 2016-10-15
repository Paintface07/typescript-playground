import App = DeadSimpleFramework.App;
import State = DeadSimpleFramework.Routing.State;
window.addEventListener('DOMContentLoaded', () => {

    var app = new App(true);
    app.bootstrap('body');
    app.router.go("somewhere");
    app.router.state(new State('myTemplate', '/build/templates/myTemplate.html', true))

});