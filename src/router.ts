module app {
    export class Router {
        constructor(private logging: boolean = false) {
            if (this.logging) {
                this.logging = true;
            }
        }

        go(state: string) {
            if(this.logging === true) {
                console.log('Navigating to ' + state);
            }
        }
    }
}
