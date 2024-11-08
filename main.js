// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const likeIcon = document.querySelectorAll(".like-glyph")
likeIcon.forEach(element => {
  element.addEventListener('click', (e) => {
    e.preventDefault()
    mimicServerCall()
      .then(() => activateHeart(element))
      .catch(error => err(error))
  });
})


function err(error) {
  const hidden = document.querySelector(".hidden")
  const modalMessage = document.querySelector("#modal-message")
  hidden.classList.remove("hidden")
  modalMessage.textContent = error
  setTimeout(() => {
    hidden.classList.add("hidden")
  }, 3000);
}

function activateHeart(element) {

  if (element.classList.contains("activated-heart")) {
    element.classList.remove("activated-heart")
    element.textContent = EMPTY_HEART

  }
  else {
    element.textContent = FULL_HEART
    element.classList.add("activated-heart")

  }
}
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
