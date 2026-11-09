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
const addCardBtn = document.querySelector(".profile__add-button");
const newCard = document.querySelector("#new-card-popup");
const closeNewCardBtn = newCard.querySelector(".popup__close");
const newCardForm = document.querySelector("#new-card-form");
const newCardTitleInput = newCardForm.querySelector(
  ".popup__input_type_card-name",
);
const newCardLinkInput = newCardForm.querySelector(".popup__input_type_url");
const imgPopup = document.querySelector("#image-popup");
const imgContentPopup = imgPopup.querySelector(".popup__content_content_image");
const imgCloseBtnPopup = imgPopup.querySelector(".popup__close");
const popupImg = imgPopup.querySelector(".popup__image");
const popupCaptionImg = imgPopup.querySelector(".popup__caption");
let formElement = document.querySelector(".popup__form");
let nameInput = formElement.querySelector(".popup__input_type_name");
let jobInput = formElement.querySelector(".popup__input_type_description");

function openModal(popup) {
  popup.classList.add("popup_is-opened");
}

function closeModal(popup) {
  popup.classList.remove("popup_is-opened");
}

function fillProfileForm() {
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
}

function handleOpenEditModal() {
  fillProfileForm();
  openModal(editProfile);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameInput.value = profileNameInput.textContent;
  jobInput.value = profileDescriptionInput.textContent;
  closeModal(editProfile);
}

editProfileBtn.addEventListener("click", handleOpenEditModal);
closeProfileBtn.addEventListener("click", () => closeModal(editProfile));
formElement.addEventListener("submit", handleProfileFormSubmit);

function handleOpenNewCardModal() {
  openModal(newCard);
}

function handleCardFormSubmit(evt) {
  evt.preventDefault();

 const newCardElement = getCardElement(newCardTitleInput.value, newCardLinkInput.value);
 document.querySelector(".cards__list").prepend(newCardElement);
 closeModal(newCard);
}
addCardBtn.addEventListener("click", handleOpenNewCardModal);
newCard.addEventListener("submit", handleCardFormSubmit);
closeNewCardBtn.addEventListener("click", () => closeModal(newCard));

function handleLikeBtn(evt) {
  evt.target.classList.toggle("card__like-button_is-active");
}

function handleDeleteBtn(evt) {
  evt.target.closest(".card").remove();
}

function handleImageClick(evt) {
  popupCaptionImg.textContent = evt.target.alt;
  popupImg.src = evt.target.src;
  popupImg.alt = evt.target.alt;
  openModal(imgPopup);
}

imgCloseBtnPopup.addEventListener("click", () => closeModal(imgPopup));

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

const cardTemplate = document.querySelector("#card-template").content;

function getCardElement(
  name = "Sin título",
  link = "./images/placeholder.jpg",
) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitle = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");
  const cardLikeBtn = cardElement.querySelector(".card__like-button");
  cardImage.src = link;
  cardImage.alt = name;
  cardTitle.textContent = name;
  cardLikeBtn.addEventListener("click", (evt) => {
    handleLikeBtn(evt);
  });
  const cardDeleteBtn = cardElement.querySelector(".card__delete-button");
  cardDeleteBtn.addEventListener("click", (evt) => {
    handleDeleteBtn(evt);
  });
  cardImage.addEventListener("click", (evt) => {
    handleImageClick(evt);
  });

  
  return cardElement;
}

function renderCard(name, link, cardContainer) {
  cardContainer.append(getCardElement(name, link));
}

initialCards.forEach(function (card) {
  renderCard(card.name, card.link, document.querySelector(".cards__list"));
});

console.log("Prueba de que estoy haciendolo bien");
