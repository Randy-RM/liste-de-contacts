//Initialisations et affectations des letiables du form
let prenom = document.querySelector('#prenom');
let nom = document.querySelector('#nom');
let groupe = document.querySelector('#groupe');
let biographie = document.querySelector('#biographie');
let contact;
//
//img
let containerPhoto = document.querySelector("#containerPhoto");
let btnPhoto = document.querySelector("#btnPhoto");
let photo = document.querySelector("#photo");
let itemPhoto;
//
let btnCreer = document.querySelector('#btnCreer');
let btnReinit = document.querySelector('#btnReinit');
//
let listeContact = document.querySelector('#listeContact');
//

//Fonction d'ajout
function addContact(contact) {
    let divCard = document.createElement("div");
    divCard.classList.add(
        "row",
        "container-2",
        "margin-top-0",
        "text-gray-500",
        "bold",
        "card-border-bottom-blue"
    );
    //
    let divPhotoProfil = document.createElement("div");
    divPhotoProfil.classList.add(
        "margin-left-right",
        "text-center",
        "bold"
    );
    let paragraphePhotoProfil = document.createElement("p");
    paragraphePhotoProfil.classList.add(
        "margin-top-0"
    );
    let photoProfil = document.createElement("img");
    photoProfil.setAttribute('src', contact.image);
    photoProfil.setAttribute('alt', 'Photo Profil');
    photoProfil.classList.add(
        "card-ronded",
        "card-border-blue",
        "text-center"
    );
    //
    let divText = document.createElement("div");
    divText.classList.add(
        "my-width-50",
        "bold",
        "text-in-box"
    );
    let paragrapheNom = document.createElement("p");
    paragrapheNom.textContent = `${contact.prenom} ${contact.nom}`;
    let paragrapheGroupe = document.createElement("p");
    paragrapheGroupe.textContent = `${contact.groupe}`;
    let paragrapheBiographie = document.createElement("p");
    paragrapheBiographie.textContent = `${contact.biographie}`;
    //
    let divBtnFermer = document.createElement("div");
    divBtnFermer.classList.add(
        "my-width-5",
        "text-red",
        "text-size-1",
        "text-center",
        "bold",
        "margin-left-right"
    );
    let paragrapheBtnFermer = document.createElement("p");
    paragrapheBtnFermer.textContent = "X";
    paragrapheBtnFermer.classList.add(
        "cursor-pointer"
    );
    //
    listeContact.prepend(divCard);
    //ajout images
    divCard.append(divPhotoProfil);
    divPhotoProfil.append(paragraphePhotoProfil);
    paragraphePhotoProfil.append(photoProfil);
    //ajout biographie
    divCard.append(divText);
    divText.append(paragrapheNom);
    divText.append(paragrapheGroupe);
    divText.append(paragrapheBiographie);
    //ajout Btn
    divCard.append(divBtnFermer);
    divBtnFermer.append(paragrapheBtnFermer);

    //Event sur btn X pour supression d'un item sur la liste
    paragrapheBtnFermer.addEventListener('click', function (e) {
        e.preventDefault();
        divCard.remove();
    });
}

//Event sur btnPhoto, pour l'apparition d'une photo
//pour une prévisualisation
btnPhoto.addEventListener('change', function () {

    let file = this.files[0];
    if (file) {
        let reader = new FileReader();
        reader.addEventListener('load', function () {
            photo.setAttribute('src', this.result);
            photo.setAttribute('alt', 'Photo');
            itemPhoto = URL.createObjectURL(file);
        });
        reader.readAsDataURL(file);
    } else {
        photo.setAttribute('src', ' ');
        photo.setAttribute('alt', 'Acune Image Sélectionné');
    }
});

//Event sur btn Créer, pour la création d'un nouvel item sr la liste
btnCreer.addEventListener('click', function (e) {
    e.preventDefault();
    if (!prenom.value || !nom.value ||
        !groupe.value || !biographie.value ||
        !itemPhoto
    ) {
        alert("Une ou plusieurs valeurs manque");
    } else {

        contact =
        {
            prenom: prenom.value,
            nom: nom.value,
            groupe: groupe.value,
            biographie: biographie.value,
            image: itemPhoto
        };
        addContact(contact);
    }
});

//Event sur btn de reinitialisation
btnReinit.addEventListener('click', function (e) {
    e.preventDefault();
    prenom.value = "";
    nom.value = "";
    groupe.value = "0";
    biographie.value = "";
    btnPhoto.files = undefined;
    itemPhoto = "";
    photo.setAttribute('src', ' ');
    photo.setAttribute('alt', 'Acune Image Sélectionné');
    do {
        listeContact.removeChild(listeContact.lastChild);
    } while (listeContact.firstChild);
});