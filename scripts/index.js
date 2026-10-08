const editProfileBtn = document.querySelector(".profile__edit-button");
const editProfile = document.querySelector("#edit-popup");
const closeProfileBtn = editProfile.querySelector(".popup__close");
const profileInfo = document.querySelector(".profile__info");
const profileName = profileInfo.querySelector(".profile__title");
const profileDescription = profileInfo.querySelector(".profile__description");
const profileForm = document.querySelector("#edit-profile-form");
const profileNameInput = profileForm.querySelector(".popup__input_type_name");
const profileDescriptionInput = profileForm.querySelector(
  ".popup__input_type_description",
);
let formElement = document.querySelector(".popup__form");
let nameInput = formElement.querySelector(".popup__input_type_name");
let jobInput = formElement.querySelector(".popup__input_type_description");

function openModal() {
  editProfile.classList.add("popup_is-opened");
}

function closeModal() {
  editProfile.classList.remove("popup_is-opened");
}

function fillProfileForm() {
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
}

function handleOpenEditModal() {
  fillProfileForm();
  openModal();
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameInput.value = profileNameInput.textContent;
  jobInput.value = profileDescriptionInput.textContent;
  closeModal();
}

editProfileBtn.addEventListener("click", handleOpenEditModal);
closeProfileBtn.addEventListener("click", closeModal);
formElement.addEventListener("submit", handleProfileFormSubmit);

let initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },

  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },

  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },

  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },

  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

initialCards.forEach(function (name) {
  console.log(name);
});

console.log("Prueba de que estoy haciendolo bien");
