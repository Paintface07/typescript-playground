module DeadSimpleFramework {
    export class Logger {
        constructor(private logging: boolean = false) {
            this.logging = logging;
        }

        log(statement : string) : void {
            if(this.logging) {
                console.log(statement);
            }
        }

        error(statement : string) : void {
            if(this.logging) {
                console.error(statement);
            }
        }
    }
}