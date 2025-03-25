class Person {
    name: string;
    age: number;
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    introduce(): void {
        console.log(`Hello, my name is ${this.name} and my age is ${this.age}`);
    }
}


//Student class derived frm person 
class Student extends Person {
    static studentCount: number = 0; // Initialize the count of students
    readonly studentId: number;
    grade: string;

    constructor(name: string, age: number, studentId: number, grade: string) {
        super(name, age);
        this.studentId = studentId;
        this.grade = grade;
        Student.studentCount++; // Increment the student count
    }

    introduce(): void {
        console.log(`Hi, I am ${this.name}, a student in grade ${this.grade}`);
    }
}


//Teacher class derived from person 
class Teacher extends Person {
    static teacherCount: number = 0; // Static count for teachers
    readonly teacherId: number;
    subject: string;

    constructor(name: string, age: number, teacherId: number, subject: string) {
        super(name, age);
        this.teacherId = teacherId;
        this.subject = subject;
        Teacher.teacherCount++; // Increment the teacher count
    }

    introduce(): void {
        console.log(`Hi, I am ${this.name} and I teach ${this.subject}`);
    }
}


//abstract class 
abstract class Staff {
    protected department: string;

    constructor(department: string) {
        this.department = department;
    }

    abstract workDetails(): void; // for implimentation of resposibility
}

class Clerk extends Staff {
    responsibility: string;
    private salary: number;

    constructor(responsibility: string, salary: number) {
        super("Administration"); // Assuming department is Administration
        this.responsibility = responsibility;
        this.salary = salary;
    }
    
    workDetails(): void {
        console.log(`I am working in ${this.department} for ${this.responsibility}`); //department is protected
    }

    getSalary(): void {
        console.log(`${this.salary}`); //salary is private
    }
}


const student1 = new Student("Jayesh", 20, 1, "A");
student1.introduce();

const teacher1 = new Teacher("Ms.Sadaf", 40, 101, "Computer Science");
teacher1.introduce();

const clerk1 = new Clerk("Manage records", 50000);
clerk1.workDetails();
clerk1.getSalary();

console.log(Student.studentCount);
console.log(Teacher.teacherCount);