"use strict";

    class Person {
        constructor(firstName, lastName ){
            this.firstName = firstName;
            this.lastName = lastName;
        }
    getFullName(){
        return this.firstName + " " + this.lastName;
    }    

}
    let person1 = new Person("A", "ye");
    //  console.log(` Name: ${person1.getFullName()}`);

    class Employee extends Person{
        constructor( id, firstName, lastName, jobTitle, payRate ){
            super(firstName, lastName);
            this.id = id;
            this.jobTitle = jobTitle;
            this.payRate = payRate;
        }
        getFullName(){
            return this.firstName + " " + this.lastName;
        }
    }
    let employee1 = new Employee( 1, "ah", "ye", "HypeBeast", 20000 );
     console.log(` name: ${employee1.getFullName()}`);