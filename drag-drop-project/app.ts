function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value
    const adjDescriptor: PropertyDescriptor = {
        enumerable: false,
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this)
            return boundFn
        }
    }
    return adjDescriptor
}

interface ValidatorConfig {
    [property: string]: {
        [validatableProp: string]: string[]
    }
}

let validators: ValidatorConfig= {}

function Required(target: any, propertyName: string) {
    validators[target.constructor.name] = {
        ...validators[target.constructor.name],
        [propertyName]: ["required"]
    }
}

console.log(validators)
function validate(obj: any) {
    const currentValidatorConfig = obj.constructor.name;
}

// Project input class
class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;
    @Required
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor() {
        this.templateElement = document.getElementById("project-input")! as HTMLTemplateElement;
        this.hostElement = document.getElementById("app")! as HTMLDivElement;

        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild as HTMLFormElement;
        this.element.id = "user-input"

        this.titleInputElement = this.element.querySelector("#title") as HTMLInputElement;
        this.descriptionInputElement = this.element.querySelector("#description") as HTMLInputElement;
        this.peopleInputElement = this.element.querySelector("#people") as HTMLInputElement;

        this.configure();
        this.attach();
    }

    private gatherUserInput(): [string, string, number] | void {
        const enteredTitle = this.titleInputElement.value
        const enteredDescription = this.descriptionInputElement.value
        const enteredPeople = this.peopleInputElement.value

        if (enteredTitle.trim().length === 0 || enteredDescription.trim().length === 0 || enteredPeople.trim().length === 0) {
            alert("Invalid input, please try again;")
            return
        }
        return [enteredTitle, enteredDescription, +enteredPeople]
    }

    private clearInputs() {
        this.titleInputElement.value = ""
        this.descriptionInputElement.value = ""
        this.peopleInputElement.value = ""
    }

    @Autobind
    private submitHandler(event: Event) {
        event.preventDefault();

        console.log(validate(this.constructor.name, ))
        // const userInput = this.gatherUserInput();
        // if (Array.isArray(userInput)) {
        //     const [title, desc, people] = userInput
        //     console.log(title, desc, people)
        //     this.clearInputs()
        // }
    }

    private configure() {
        this.element.addEventListener("submit", this.submitHandler)
        // this.element.addEventListener("submit", this.submitHandler.bind(this)) // use decorator instead
    }

    private attach() {
        this.hostElement.insertAdjacentElement("afterbegin", this.element)
    }
}

const prjInout = new ProjectInput();