enum Role {
    Manager="manager",
    Developer="deveoper",
    Designer="designer",
    Tester='tester',
    Hr="hr",
};

interface Employee {
    id:number,
    name:string,
    role:Role,
    salary:number,
    isActive:boolean,
};

class Company {
    private employees:Employee[]=[];

    addEmployee(emp:Employee):void{
        if(this.employees.some(e=>e.id===emp.id)){
            console.log(`Employee ${emp.id}.${emp.name} already exist`);
        }if(emp.salary<=0){
            console.log(`Salary must be greater than zero:`)
        }
        else{
            this.employees.push(emp);
            console.log(`Employee ${emp.id} ${emp.name} added sucessfully`);
        }
    };

    listEmployee():Employee[] {
        return this.employees;
    };

    filterEmployeeByRole(key:string):Employee[]{
        const result=this.employees.filter(e => e.role===key);
        return result;
    };

    filterEmployeeByStatus(key:boolean):Employee[]{
        const result=this.employees.filter(e => e.isActive===key);
        return result;
    };

    updateStatus(status: boolean, id: number): void {
        for (let i = 0; i < this.employees.length; i++) { 
            if (this.employees[i].id === id) { 
                this.employees[i].isActive = status; 
                return; 
            } 
        } 
        console.log(`Employee with id ${id} not found`);
    }
    
    calculateTotalSalary(): number {
        return this.employees.reduce((total, emp) => total + emp.salary, 0);
    }
    
};



// Create a new Company
const company = new Company();

const emp1: Employee = { id: 1, name: "Jayesh", role: Role.Developer, salary: 50000, isActive: true };
company.addEmployee(emp1);

const emp2: Employee = { id: 2, name: "Kartik", role: Role.Designer, salary: 60000, isActive: false };
company.addEmployee(emp2);

const emp3: Employee = { id: 3, name: "Anish", role: Role.Tester, salary: 0, isActive: true };
company.addEmployee(emp3);

const emp4: Employee = { id: 4, name: "Shri", role: Role.Developer, salary: 55000, isActive: true };
company.addEmployee(emp4);

const emp5: Employee = { id: 5, name: "Pratik", role: Role.Designer, salary: 65000, isActive: false };
company.addEmployee(emp5);

const emp6: Employee = { id: 6, name: "Aush", role: Role.Tester, salary: 48000, isActive: true };
company.addEmployee(emp6);

console.log("List of all employees:");
console.table(company.listEmployee());

console.log("Employees filtered by role Developer:");
console.table(company.filterEmployeeByRole(Role.Developer));

console.log("Employees filtered by status active:");
console.table(company.filterEmployeeByStatus(true));

company.updateStatus(false, 1);
console.log("Updated list of employees after changing status of employee with id 1:");
console.table(company.listEmployee());

company.updateStatus(true, 7);
console.log("Trying to update status of non-existent employee with id 7:");

console.log("Total salary of all employees:");
console.table(company.calculateTotalSalary());




