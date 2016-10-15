module DeadSimpleFramework {
    import Router = DeadSimpleFramework.Routing.Router;
    export class App {
        constructor(private logging: boolean = false, private router?: Router) {
            this.router = new Router(logging);
        }
        bootstrap(selector: string) {
            document.body.innerHTML = $(selector).html() + '<h1>HELLO</h1>';
        }

        get getRouter(): Router {
            return this.router;
        }
    }
}