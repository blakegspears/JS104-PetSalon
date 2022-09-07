
console.log("Register");

let petSalon ={
    name: "The Wet Pet Salon",
    phone: "555-555-5555",
    address:{
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zip: "123456789"

    },
    pet:[
        {
            name: "Scooby",
            age: "60",
            gender: "male",
            breed: "Great Dane",
            serice: "Grooming",
            owners: "Shaggy",
            phone: "555-555-5555",
        },
        {
            name: "Scrappy",
            age: "40",
            gender: "male",
            breed: "mix",
            serice: "Grooming",
            owners: "Shaggy",
            phone: "555-555-5555",
        },
        {
            name: "Delta",
            age: "5",
            gender: "female",
            breed: "Black Lab",
            serice: "Grooming",
            owners: "Gavin",
            phone: "444-444-4444",
        },
        {
            name: "Rocky",
            age: "8",
            gender: "male",
            breed: "Chocolate Lab",
            serice: "Grooming",
            owners: "Mike",
            phone: "333-333-3333",
        },
        {
            name: "Emma",
            age: "2",
            gender: "female",
            breed: "American Shorthaired Cat",
            serice: "Grooming",
            owners: "Blake",
            phone: "222-222-2222",
        },
    ]

}


console.log(petSalon);

//constructor
function Pet(name, age, gender, breed, service, ownerName, contactPhone){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.owner = ownerName;
    this.phone = contactPhone;
}

function displaypetSalon(){



document.getElementById("Info").innerHTML=`
<p>Name: ${petSalon.name}</p>
<p>Phone: ${petSalon.phone}</p>
<p>Street: ${petSalon.address.street}</p>
<p>City: ${petSalon.address.city}</p>
<p>State: ${petSalon.address.state}</p>
<p>Zip: ${petSalon.address.zip}</p>`;

}
let nameInput = document.getElementById("petName");
let ageInput = document.getElementById("petAge");
let genderInput = document.getElementById("petGender");
let breedInput = document.getElementById("petBreed");
let serviceSelect = document.getElementById("petService");
let ownerName = document.getElementById("ownerName");
let contactPhone = document.getElementById("contactPhone");

function isValid(aPet){
    let valid= true;

    if(aPet.name == "" || aPet.service == "" || aPet.phone == ""){
        valid= false;
    }
    
    return valid;
}

function register(){
    console.log(nameInput.value,ageInput.value,genderInput.value,breedInput.value, ownerName.value, contactPhone.value, serviceSelect.value);
    let thePet = new Pet(nameInput.value, ageInput.value, genderInput.value, breedInput.value, serviceSelect.value, ownerName.value, contactPhone.value);
    if(isValid(thePet)){
        petSalon.pet.push(thePet);
        clearInputs();
        displayPetTable();    
    }else{
        alert("Please add the required information.");
    }
}
    

function clearInputs(){
    nameInput.value = "";
    ageInput.value = "";
    genderInput.value = "";
    breedInput.value = "";
    serviceSelect.value = "";
    ownerName.value = "";
    contactPhone.value = "";
}

function init(){
    console.log("Registering");
    displaypetSalon();
    let scooby = new Pet("Scooby", 60, "Male", "Great Dane", "Grooming","Shaggy","111-111-1111");
    let rocky = new Pet("Rocky", 7, "Male", "Chocolate Lab", "Grooming","Mike", "222-222-2222");
    let emma = new Pet("Emma", 2, "Female", "American Shorthaired Cat", "Grooming", "Mandee", "333-333-3333");
    petSalon.pet.push(scooby,rocky,emma);

    displayPetTable();
}

window.onload=init;

function displayPetsNames() {
    for(let i=0; i<petSalon.pet; i++) {
        console.log(petSalon.pet.name[i]);
    }
}

// alert(petSalon.pet.length);
// use alert to display the amount of pets (alert(),length)
// travel the pets array
// displayInfo();
