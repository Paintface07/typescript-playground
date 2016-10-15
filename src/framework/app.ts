module DeadSimpleFramework {
    import Router = DeadSimpleFramework.Routing.Router;

    /**
     * The application class--the root of any DeadSimpleFramework application
     */
    export class App {

        /**
         * The standard application constructor
         * @param logging - boolean - indicates whether low-level logging of the framework should take place
         * @param router - Router - The router the application should leverage for resolving views
         */
        constructor(private logging: boolean = false, public router?: Router) {
            this.router = new Router(logging);
        }

        /**
         * The application bootstrap method.  Binds the application to the placeholder document.
         * @param selector - The selector the application is bound to.
         */
        bootstrap(selector: string) {
            document.body.innerHTML = $(selector).html() + '<h1>HELLO</h1>';
        }
    }
}