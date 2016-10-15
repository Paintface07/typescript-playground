module DeadSimpleFramework.Routing {

    /**
     * A router for a DeadSimpleFramework application.
     */
    export class Router {
        private states: Array<State> = new Array<State>();
        constructor(private logging: boolean = false) {
            if (this.logging) {
                this.logging = true;
                console.log('Router constructed');
            }
        }

        /**
         * Navigates the user to the specified state.
         * @param state - string - the name of the state to navigate to
         */
        go(state: string) {
            if(this.logging === true) {
                console.log('Navigating to ' + state);
            }
        }

        /**
         * Add a state to the router (default: empty).
         * @param state - State - the state to create within the router
         */
        state(state: State) {
            if(this.logging) {
                console.log('Adding state ' + state.name);
            }
            this.states.push(state);
        }
    }
}
