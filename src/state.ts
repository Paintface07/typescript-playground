module DeadSimpleFramework.Routing {
    export class State {
        constructor(private name: string, private template: string, private logging: boolean = false) {
            if (this.logging) {
                this.logging = true;
                console.log('Creating state ' + name);
            }
            this.name = name;
            this.template = template;
        }

        get getName(): string {
            return this.name;
        }

        get getTemplate(): string {
            return this.template;
        }
    }
}
