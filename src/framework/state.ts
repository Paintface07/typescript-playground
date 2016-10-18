module DeadSimpleFramework.Routing {

    /**
     * A state that is capable of resolving a view.
     */
    export class State {

        /**
         * State constructor
         * @param name - string - the name of the state
         * @param template - string - the URL of the template to resolve
         * @param logging - boolean - a flag indicating whether low-level logging should take place
         */
        constructor(public name: string, public template?: string, public templateUrl?: string) {
            this.name = name;
            this.template = template;
            this.templateUrl = templateUrl;
        }
    }
}
