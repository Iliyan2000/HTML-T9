import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  	var card = document.querySelectorAll("card");
	setTimeout(function() {
		card.style="display:none";
	}, 3000);
});
