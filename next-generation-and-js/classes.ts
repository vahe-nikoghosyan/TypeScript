abstract class Department {
    static fiscalYear = 2020;
    // private readonly id: string;
    // private name: string;
    // private employees: string[] = [];
    protected employees: string[] = [];

    protected constructor(protected readonly id: string, public name: string) {
        // this.id = id;
        // this.name = n;
        // console.log(Department.fiscalYear)  // access to static property
    }

    static createEmployee(name: string) {
        return {
            name
        }
    }

    abstract describe(this: Department): void;
    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

class ITDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, 'IT');
    }

    describe() {
        console.log('ITDepartment - ID: ' + this.id);
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('Please pass in a valid value!')
        }
        this.addReport(value);
    }

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('F1', []);
        return this.instance;
    }

    describe() {
        console.log('Accounting ID: - ', + this.id);
    }

    // Overriding
    addEmployee(name: string) {
        // super.addEmployee(name);
        if (name === 'Max') {
            return
        }
        this.employees.push(name)
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }
}

const employee1 = Department.createEmployee('Hamo');
console.log(employee1);
console.log(Department.fiscalYear);

// const accounting = new Department('d1', 'Accounting');
// const accounting = new AccountingDepartment('d1', ['Hello gago']);
const accounting = AccountingDepartment.getInstance();

accounting.mostRecentReport = 'Something went wrong!';
console.log(accounting.mostRecentReport); // use it ass property

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

// accounting.employees[2] = 'Anna'; // Property 'employees' is private and only accessible within class 'Department'

accounting.describe();
// accounting.printEmployeeInformation();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe }
//
// accountingCopy.describe()

const it = new ITDepartment('D1', ['Max']);

it.describe();

// Static property
// Math.pow()
