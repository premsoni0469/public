class Person{
    constructor(protected firstName:string, protected lastName:string){}
    getName():string{
        return `I am ${this.firstName} ${this.lastName}`;
    }
}
class Employee extends Person{
    constructor(firstName:string, lastName:string, private jobTitle:string){
        super(firstName, lastName);
    }
    displayInfo():string{
        return `${this.getName()} and I work as ${this.jobTitle}`;
    }
}
function displayEmployee(){
    const fname = (document.getElementById('firstName')as HTMLInputElement).value;
    const lname = (document.getElementById('lastName')as HTMLInputElement).value;
    const job = (document.getElementById('jobTitle')as HTMLInputElement).value;

    const emp = new Employee(fname, lname, job);
    const resultElement = (document.getElementById("result"))!;
    resultElement.innerText = emp.displayInfo();
}