let formHotel = document.querySelector(".hotel01")

formHotel.addEventListener("submit",function(e){
    e.preventDefault()

    let hotelUser = {
        jmeno: e.target.elements.Name.value,
        prijmeni: e.target.elements.lastName.value,
        narozeni: e.target.elements.birth.value,
        mail: e.target.elements.mail.value,
        heslo: e.target.elements.password.value,
        pocetPokoju: e.target.elements.room.value
    }

console.log(
`Jméno: ${hotelUser.jmeno}
Příjmení: ${hotelUser.prijmeni}
Narození: ${hotelUser.narozeni}
Mail: ${hotelUser.mail}
Heslo: ${hotelUser.heslo}
Počet pokojů: ${hotelUser.pocetPokoju}`
);
})

document.querySelector('.submit1').addEventListener('click', function() {
document.getElementById('zprava').textContent = "Údaje byly uloženy do konzole.";
});