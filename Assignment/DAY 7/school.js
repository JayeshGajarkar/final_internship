"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.introduce = function () {
        console.log("Hello, my name is ".concat(this.name, " and my age is ").concat(this.age));
    };
    return Person;
}());
//Student class derived frm person 
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, studentId, grade) {
        var _this = _super.call(this, name, age) || this;
        _this.studentId = studentId;
        _this.grade = grade;
        Student.studentCount++; // Increment the student count
        return _this;
    }
    Student.prototype.introduce = function () {
        console.log("Hi, I am ".concat(this.name, ", a student in grade ").concat(this.grade));
    };
    Student.studentCount = 0; // Initialize the count of students
    return Student;
}(Person));
//Teacher class derived from person 
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, age, teacherId, subject) {
        var _this = _super.call(this, name, age) || this;
        _this.teacherId = teacherId;
        _this.subject = subject;
        Teacher.teacherCount++; // Increment the teacher count
        return _this;
    }
    Teacher.prototype.introduce = function () {
        console.log("Hi, I am ".concat(this.name, " and I teach ").concat(this.subject));
    };
    Teacher.teacherCount = 0; // Static count for teachers
    return Teacher;
}(Person));
//abstract class 
var Staff = /** @class */ (function () {
    function Staff(department) {
        this.department = department;
    }
    return Staff;
}());
var Clerk = /** @class */ (function (_super) {
    __extends(Clerk, _super);
    function Clerk(responsibility, salary) {
        var _this = _super.call(this, "Administration") || this; // Assuming department is Administration
        _this.responsibility = responsibility;
        _this.salary = salary;
        return _this;
    }
    Clerk.prototype.workDetails = function () {
        console.log("I am working in ".concat(this.department, " for ").concat(this.responsibility)); //department is protected
    };
    Clerk.prototype.getSalary = function () {
        console.log("".concat(this.salary)); //salary is private
    };
    return Clerk;
}(Staff));
var student1 = new Student("Jayesh", 20, 1, "A");
student1.introduce();
var teacher1 = new Teacher("Ms.Sadaf", 40, 101, "Computer Science");
teacher1.introduce();
var clerk1 = new Clerk("Manage records", 50000);
clerk1.workDetails();
clerk1.getSalary();
console.log(Student.studentCount);
console.log(Teacher.teacherCount);
