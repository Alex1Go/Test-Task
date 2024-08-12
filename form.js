function handleSubmit(event) {
  event.preventDefault();
  window.location.href = "../thankyou/thankyou.html";
}

// close cookie
function closeCookiePopup() {
  document.getElementById("cookie-popup").style.display = "none";
}

//  cookie
setTimeout(() => {
  document.getElementById("cookie-popup").style.display = "block";
}, 5000);
