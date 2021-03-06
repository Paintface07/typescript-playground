import App = DeadSimpleFramework.App;
import State = DeadSimpleFramework.Routing.State;
window.addEventListener('DOMContentLoaded', () => {

    var app = new App(true);
    app.bootstrap('body');
    app.router.state(new State('myTemplate', '/build/templates/myTemplate.html'));
    app.router.go("somewhere");

});