// let animal= {
//     eats: true
// };
// let rabbit= {
//     jumps:true
// };
// console.log(rabbit.jumps)
// console.log(rabbit.eats)

// rabbit.__proto__=animal;

class Animal{
    constructor(name){
        this.name=name;
        console.log(" obj is created")
    }
    eats(){
        console.log("kha rha h")
    }
    jumps(){
        console.log("khud rha h")
    }
}

class lion extends Animal{
    constructor(name){
        super(name)
        console.log("object is lion")
    }
}
let a = new Animal('bunny');
console.log(a)

let l =new lion('babbar')
console.log(l)