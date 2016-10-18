module DeadSimpleFramework.Routing {

    /**
     * A router for a DeadSimpleFramework application.
     */
    export class Router {
        private viewResolver: ViewResolver = new ViewResolver();
        private states: Array<State> = new Array<State>();
        constructor(private LOGGER: Logger = new Logger(false), private $default?: State) {
            LOGGER.log('Router constructed');
            const defaultState = new State('', null, '/index.html');
            this.$default = $default ? $default : defaultState;
            this.state(defaultState);
            this.viewResolver = new ViewResolver(LOGGER);
        }

        /**
         * Navigates the user to the specified state.
         * @param state - string - the name of the state to navigate to
         */
        go(state: string) {
            this.LOGGER.log('Navigating to ' + state);
        }

        /**
         * Add a state to the router (default: empty).
         * @param state - State - the state to create within the router
         */
        state(state: State) {
            this.LOGGER.log('Adding state [' + state.name + ']');
            this.states.push(state);
        }

        otherwise($default: State) {
            this.go($default.name);
        }
    }
}
