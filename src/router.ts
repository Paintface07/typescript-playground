module DeadSimpleFramework.Routing {
    export class Router {
        private states: Array<State> = new Array<State>();
        constructor(private logging: boolean = false) {
            if (this.logging) {
                this.logging = true;
                console.log('Router constructed');
            }
        }

        go(state: string) {
            if(this.logging === true) {
                console.log('Navigating to ' + state);
            }
        }

        state(state: State) {
            if(this.logging) {
                console.log('Adding state ' + state.getName);
            }
            this.states.push(state);
        }
    }
}
