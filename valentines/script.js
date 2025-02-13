document.getElementById("mainImage").addEventListener("click", function() {
    document.getElementById("mainImage").classList.add("hidden");
    document.getElementById("imageGallery").classList.add("show");
    document.getElementById("dateText").classList.remove("hidden");
    document.getElementById("audioPlayer").play();
});

document.getElementById("yesButton").addEventListener("click", function() {
    document.getElementById("imageGallery").classList.add("hidden");
    document.getElementById("dateText").classList.add("hidden");
    document.getElementById("yesNoButtons").classList.add("hidden");
    document.getElementById("message").classList.remove("hidden");
    document.getElementById("message").style.display = "flex";
    const elementsToHide = document.querySelectorAll('body > *:not(#message)');
    elementsToHide.forEach(el => el.classList.add('hide-all'));
    document.getElementById("message").classList.remove("hidden");
    document.getElementById("message").style.display = "flex";
    document.getElementById("gifImage").classList.remove("hidden");
    document.getElementById("gifImage").style.display = "block";
});

document.getElementById("noButton").addEventListener("click", function() {
    alert("Wrong answer! Try again. 😜");
});
