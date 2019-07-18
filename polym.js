function Person(name, age){
    this.name = name;
    this.age =age;

}
Person.prototype.getInfo = function(){
    return 'Name : '+this.name+' | Age : '+this.age;
};

function Employee(name, age, salary){
    this.name = name;
    this.age = age;
    this.salary = salary;
}


Employee.prototype.getInfo = function(){
    return 'Name : '+this.name+' | Age : '+this.age+' | salary : '+this.salary;
};

Employee.prototype = new Person();

let per1 = new Person('John', 30);
let emp1 = new Employee('Sarah', 40, 5000);

console.log (per1.getInfo());
console.log (emp1.getInfo());