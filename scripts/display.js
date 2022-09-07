/*
function displayPetCards() {
    const petsDiv = document.getElementById("pets");
//travel the array
for(let i = 0; i < petSalon.pets.length; i++) {
    //get the pet
    let pet=petSalon.pets[i];
    //create the tmp
    let tmp = `
    <div>
    <p> Name : ${pet.name}</p>
    <p> Age : ${pet.age}</p>
    <p> Gender : ${pet.gender}</p>
    <p> Breed : ${pet.breed}</p>
    <p> ownerName : ${pet.owner}</p>
    <p> contactPhone : ${pet.phone}</p>
    <p> serviceSelect : ${pet.service}</p>
    </div>
    `;
    console.log(tmp);
    //insert the tmp into html
    petsDiv.innerHTML+=tmp;
    }
}
*/

function displayPetTable() {
    const petsDiv = document.getElementById("petTable");
    //travel the array
    for(let i = 0; i < petSalon.pets.length; i++) {
        //get the pet
        let pet=petSalon.pets[i];
        //create the tmp
        let tmp = `
        <table class="pet">
            <tr> Name : ${pet.name}</tr>
            <tr> Age : ${pet.age}</tr>
            <tr> Gender : ${pet.gender}</tr>
            <tr> Breed : ${pet.breed}</tr>
            <tr> ownerName : ${pet.owner}</tr>
            <tr> contactPhone : ${pet.phone}</tr>
            <tr> serviceSelect : ${pet.service}</tr>
        </table>
        `;
        //insert the tmp into html
        petsDiv.innerHTML+=tmp;
        }
}