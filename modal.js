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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function checkFirstName() {
  const firstNameInput = document.getElementById("first").value;
  const $firstErrorMsg = document.querySelector(".firstNameErrorMsg");
  const firstNameValid = firstNameInput.trim().length >= 2;

  if (firstNameValid) {
    $firstErrorMsg.classList.add("hidden");
  } else {
    $firstErrorMsg.classList.remove("hidden");
  }
  return firstNameValid;
}


function checkLastName() {
  const lastNameInput = document.getElementById("last").value;
  const $lastErrorMsg = document.querySelector(".lastNameErrorMsg");
  const lastNameValid = lastNameInput.trim().length >= 2;

  if (lastNameValid) {
    $lastErrorMsg.classList.add("hidden");
  } else {
    $lastErrorMsg.classList.remove("hidden");
  }
  return lastNameValid;
}


function checkEmail() {
  const emailInput = document.getElementById("email").value;
  const regExMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const $emailErrorMsg = document.querySelector(".emailErrorMsg");
  const emailValid = regExMail.test(emailInput)

  if (emailValid) {
    $emailErrorMsg.classList.add("hidden")
  } else {
    $emailErrorMsg.classList.remove("hidden")
  }
  return emailValid
}


function checkAge() {
  const ageInput = document.getElementById("birthdate").value;
  const regExAge = /(19\d\d|20[0-3])(-\d\d){2}/;
  const $ageErrorMsg = document.querySelector(".birthdateErrorMsg");
  const ageValid = regExAge.test(ageInput);

  if (ageValid) {
    $ageErrorMsg.classList.add("hidden");
  } else {
    $ageErrorMsg.classList.remove("hidden")
  }
  return ageValid
}


function checkTournamentCount() {
  const tournamentInput = document.getElementById("quantity").value;
  const $tournamentErrorMsg = document.querySelector(".numberErrorMsg");
  const tournamentNumbertValid = tournamentInput.length > 0;

  if (tournamentNumbertValid) {
    $tournamentErrorMsg.classList.add("hidden");
  } else {
    $tournamentErrorMsg.classList.remove("hidden")
  }
  return tournamentNumbertValid
}


function checkTournamentCity() {
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
  return tournamentCityValid
}


function checkTermsAndConditions() {
  const terms = document.querySelector("#conditionCheckbox")
  const $termsCheckMsg = document.querySelector(".conditionErrorMsg");
  const termsAreChecked = terms.checked;

  if (termsAreChecked) {
    $termsCheckMsg.classList.add("hidden");
  } else {
    $termsCheckMsg.classList.remove("hidden");
  }
  return termsAreChecked
}


const formValid = () => checkFirstName() && checkLastName() && checkEmail() && checkAge() && checkTournamentCount() && checkTournamentCity() && checkTermsAndConditions()


$registrationForm.addEventListener("submit", function(event) {
  event.preventDefault()
// if all booleans are true
  if (formValid()) {
   
    // reset the content
    
    // $registrationForm.reset();
  } 
})
