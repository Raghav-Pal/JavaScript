class Animal{

    constructor(name){
        this.name = name;
    }

    Eats(){
        console.log (this.name+' eats food');
    }
}

class Alligator extends Animal{

    constructor(name){
        super(name);
    }
    Eats(){
        super.Eats();
        console.log (this.name+' eats fish');
    }
}

let murphy = new Alligator('murphy');
murphy.Eats();