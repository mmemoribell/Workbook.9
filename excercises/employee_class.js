"use strict";

    class Employee {

        constructor(id, firstName, lastName, jobTitle, payRate){
            this.employeeId = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.jobTitle = jobTitle;
            this.payRate = payRate;
        }
        getFullName(){
            return this.firstName + " " + this.lastName ;
        }
        promote(newJobTitle,newPayRate){
            this.jobTitle = newJobTitle;
            this.newPayRate = newPayRate;
        }
        getIntro(){
            return `Hi, my name is ${this.firstName} ${this.lastName}, I'm a ${this.jobTitle}.`
        }
    }
     let employee1 = new Employee( 1, "Ian", "Austin", "Graphic Artist", 42.50 );

        // console.log(`Employee ${employee1.getFullName()} created`);
        // console.log(`Job Title is ${employee1.jobTitle}`);
        // console.log(`Pay Rate is ${employee1.payRate}`);

       employee1.promote("Sr. Graphic Artist", 46.75);

       let intro = employee1.getIntro();
       console.log(intro);


