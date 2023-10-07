const modal = document.getElementById("modal");
//setTimeOut(function , timedelay in ms) -- will trigger function after the timedelay mentioned
setTimeout(function () {
  //use of id.style allows us to change CSS properties of the element in Script
  modal.style.display = "inline";
}, 1500);

const modalCloseBtn = document.getElementById("modal-close-btn");
modalCloseBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

const consentForm = document.getElementById("consent-form");
consentForm.addEventListener("submit", function (event) {
  //using FormData(name of form data to be retrieved from) method to retrieve the data filled up in form section of modal
  const consentFormData = new FormData(consentForm);
//   console.log(consentFormData);

  // by default any form submits the data to the browser and refreshes the page immediately
  //but to perform necessary actions we need to prevent the form from submitting itself
  // event.preventDefault() --stops the default action from happening after the event is triggered
  event.preventDefault();
  modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">
            Uploading your data to the dark web...
        </p>
    </div>
    `;
  setTimeout(function () {
    document.getElementById("upload-text").innerText = "Making the sale";
  }, 1500);

  //extracting data from the form submitted
  const name = consentFormData.get("fullName")
//   console.log(name)
  setTimeout(function () {
    modalInner.innerHTML = `<h2>Thanks <span class="modal-display-name"> ${name}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.gif">
        </div>
        `;
        modalCloseBtn.disabled = false;
  }, 3000);
});

const modalText = document.getElementById("modal-text");
const modalInner = document.getElementById("modal-inner");
const declineBtn = document.getElementById("decline-btn");
const modalChoiceBtn = document.getElementById("modal-choice-btns");
// creating an eventListener for when mouse is hovered over the decline button
declineBtn.addEventListener("mouseover", function(){
    // console.log("hovered")
    modalChoiceBtn.classList.toggle("reverse")
})
