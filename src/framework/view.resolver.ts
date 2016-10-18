module DeadSimpleFramework.Routing {
    export class ViewResolver {
        constructor(private LOGGER: Logger = new Logger(false)) {
            this.LOGGER.log('Creating default view resolver ');
        }

        resolve(template: string) {
            $.get(template).done(function(data) {
                this.LOGGER.log(data);
            }).fail(function(error) {
                this.LOGGER.log(error);
            });
        }
    }
}
