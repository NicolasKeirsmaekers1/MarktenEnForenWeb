import { Directive, OnInit, Input, TemplateRef, ViewContainerRef } from "@angular/core";

export function createTemplateRenderer(...propertyNames: string[]) {

    // Let's convert the incoming sub-property names into namespaced inputs off the
    // "context" object. For example, convert "foo" into "context.foo".
    var contextProperties = propertyNames.map((propertyName: string): string => ("context." + propertyName));

    @Directive({
        selector: "template[render]",
        inputs: ["template: render", "context", ...contextProperties]
    })
    class TemplateRendererDirective implements OnInit {

        // I hold the context that will be exposed to the embedded view.
        // --
        // NOTE: The context is an injectable input. However, it's sub-properties are
        // also individually injectable properties based on the arguments passed to the
        // factory function.
        public context: any = {};

        // I hold the TemplateRef that we are cloning into the view container.
        public template: TemplateRef<any>;

        // I hold the view container into which we are injecting the cloned template.
        public viewContainerRef: ViewContainerRef;

        // I initialize the directive.
        constructor(viewContainerRef: ViewContainerRef) {
            this.viewContainerRef = viewContainerRef;
        }

        // ---
        // PUBLIC METHODS.
        // ---

        // I get called once, when the class is initialized, after the inputs have been
        // bound for the first time.
        public ngOnInit(): void {
            if (this.template && this.context) {
                this.viewContainerRef.createEmbeddedView(this.template, this.context);
            }
        }
    }
    // Return the dynamically generated class.
    return (TemplateRendererDirective);
}