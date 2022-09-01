//object literal
let lion ={
    name: "Simba",
    food: "Carnivore",
    isTheKingOfJungle: true
}

//object constructor

/*
function Animal(name, food, isTheKingOfJungle, age){
    this.name = name;
    this.food = food;
    this.king = isTheKingOfJungle;
    this.age = age;
}

let animal1 = new Animal("Simba", "Carnivore", true, 20);
let animal2 = new Animal("Rafiki", "Fruits", false, 50);
*/

function Client(name, email, phone, apartment){
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.apartment = apartment;
}

let client1 = new Client("Brad", "brad24@aol.com", "111-111-1111", 123);
let client2 = new Client("Jennifer", "jenneth@aol.com", "222-222-2222", 204);
let client3 = new Client("John", "john@aol.com", "333-333-3333", 255);
