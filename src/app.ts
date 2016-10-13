module app {
    export class App {
        constructor(private logging: boolean = false, public router?: Router) {
            this.router = new Router(logging);
        }
        bootstrap(selector: string) {
            document.body.innerHTML = $(selector).html() + "<h1>HELLO</h1>";
        }
    }
}