function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".btn-signup");
const formData = document.querySelectorAll(".formData");
const modalBtnClose = document.querySelectorAll(".close");
const $registrationForm = document.querySelector(".registration-form");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal event
modalBtnClose.forEach((btn) => btn.addEventListener("click", closeModal));

//Close modal form
function closeModal() {
  modalbg.style.display = "none";
}
const closeValidationBtn = document.getElementById("closeValidation")
closeValidationBtn.addEventListener("click", function() {
  modalbg.style.display= "none";
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function check first name
function checkAll() {
  const firstNameInput = document.getElementById("first").value;
  const $firstNameErrorMsg = document.querySelector(".firstNameErrorMsg");
  const firstNameValid = firstNameInput.trim().length >= 2;

  if (firstNameValid) {
    $firstNameErrorMsg.classList.add("hidden");
  } else {
    $firstNameErrorMsg.classList.remove("hidden");
  }

// function check Last Name
  const lastNameInput = document.getElementById("last").value;
  const $lastNameErrorMsg = document.querySelector(".lastNameErrorMsg");
  const lastNameValid = lastNameInput.trim().length >= 2;

  if (lastNameValid) {
    $lastNameErrorMsg.classList.add("hidden");
  } else {
    $lastNameErrorMsg.classList.remove("hidden");
  }
  
// function check email
  const emailInput = document.getElementById("email").value;
  const regExMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const $emailErrorMsg = document.querySelector(".emailErrorMsg");
  const emailValid = regExMail.test(emailInput)

  if (emailValid) {
    $emailErrorMsg.classList.add("hidden")
  } else {
    $emailErrorMsg.classList.remove("hidden")
  }

// function check age 
  const ageInput = document.getElementById("birthdate").value;
  const regExAge = /(19\d\d|20[0-3])(-\d\d){2}/;
  const $ageErrorMsg = document.querySelector(".birthdateErrorMsg");
  const ageValid = regExAge.test(ageInput);

  if (ageValid) {
    $ageErrorMsg.classList.add("hidden");
  } else {
    $ageErrorMsg.classList.remove("hidden")
  }
  
// function check tournament number
  const tournamentInput = document.getElementById("quantity").value;
  const $tournamentErrorMsg = document.querySelector(".numberErrorMsg");
  const tournamentNumbertValid = tournamentInput.length > 0;

  if (tournamentNumbertValid) {
    $tournamentErrorMsg.classList.add("hidden");
  } else {
    $tournamentErrorMsg.classList.remove("hidden")
  }
  
// function check city 
  const $cityRadios = document.querySelectorAll("#radios-city .checkbox-input");
  const $tournamentCityErrorMsg = document.querySelector(".cityErrorMsg");
  let tournamentCityValid = false;

  for (let i = 0; i < $cityRadios.length; i++) {
    if ($cityRadios[i].checked) {
      $tournamentCityErrorMsg.classList.add("hidden");
      tournamentCityValid = true;
      break
    } else {
      $tournamentCityErrorMsg.classList.remove("hidden");
    }
}

// function check condition 
  const terms = document.querySelector("#conditionCheckbox")
  const $termsCheckMsg = document.querySelector(".conditionErrorMsg");
  const termsAreChecked = terms.checked;

  if (termsAreChecked) {
    $termsCheckMsg.classList.add("hidden");
  } else {
    $termsCheckMsg.classList.remove("hidden");
  }

  if (firstNameValid && lastNameValid && emailValid && ageValid && tournamentCityValid && termsAreChecked)
  return true
}


const formValid = () => checkAll() 

$registrationForm.addEventListener("submit", function(event) {
  event.preventDefault()
// if all booleans are true
  if (formValid()) {
   const formValid = document.getElementById("formValid")
    formValid.style.display = "none"

    const validationMessage = document.getElementById("validationMessage")
    validationMessage.style.display = "block"
  } 
})
