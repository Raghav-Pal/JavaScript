let X = function(name, age){

    this.name = name;
    this.age = age;

};

X.prototype.getName = function(){
    return this.name
};

let x1 = new X('John', 20);
console.log (x1.getName());


let getEmpDetails = function(name, age){
    this.name = name;
    this.age = age;
}

getEmpDetails.prototype.getAge = function(){
    return this.age
}

getEmpDetails.prototype.getName = function(){
    return this.name
}

let emp1 = new getEmpDetails('John1', 30);

console.log (emp1.getName());








function EmpDetails(name, age){
    this.name = name;
    this.age = age;
}

EmpDetails.prototype.getName = function(){
    return this.name;
}

EmpDetails.prototype.getAge = function(){
    return this.age;
}

let empOne = new EmpDetails('Kevin', 40);
let empTwo = new EmpDetails('Sarah', 30);

console.log (empOne.getName());
console.log (empTwo.getName());












let EmpData = function(name, age){
    this.name = name;
    this.age = age;

   
};

EmpData.prototype.getName = function(){
    return this.name;
};
EmpData.prototype.getAge = function(){
    return this.age;
};

let emp1One = new EmpData('AA', 20);
let emp2Two = new EmpData('BB', 30);

console.log (emp1One.getName());
console.log (emp2Two.getAge());