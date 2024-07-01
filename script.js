var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


// For toggling and finding number of children and other stuff is done here!

const navigation = document.getElementById("nav");
const menu = document.getElementById("menu");

menu.addEventListener("click", () => {
  // The navigation.children.length means the following :-
  // The children inside a parent are basically an array of elements; So, here I'm finding the length of the array aka how many children are inside the nav bar.
  //   Yup That's all.
  navigation.style.setProperty("--childenNumber", navigation.children.length);

  //    Casually Toggling Classes to make them animate on click
  //   Regular stuff ;)
  navigation.classList.toggle("active");
  menu.classList.toggle("active");
});


// -----Scroll Reveal------

ScrollReveal({ reset: false });

ScrollReveal().reveal(".experience-nimasa, .craft-content", {
  duration: 1000,
  origin: "top",
  distance: "100px",
  easing: "cubic-bezier(0.5, 0, 0, 1)",

});

ScrollReveal().reveal(".image-craft", {
  duration: 1500,
  origin: "left",
  distance: "300px",
  easing: "ease-in-out"
});

// ScrollReveal().reveal(".slide-up, .build", {
//   duration: 2000,
//   origin: "bottom",
//   distance: "100px",
//   easing: "cubic-bezier(.37,.01,.74,1)",
//   opacity: 0.3,
//   scale: 0.5
// });



ScrollReveal().reveal(" .head-content, .second-cards", {
  duration: 1000,
  scale: 0.65
});


(function scrollReveal() {
  window.sr = ScrollReveal();

  sr.reveal('.innovate-row', {
    duration: 500,
    distance: '100px',
    easing: 'ease-out',
    origin: 'bottom',
    reset: true,
    scale: .6,
    viewFactor: 0,
    afterReveal: revealChildren,
  }, 150);

  var revealChildren = sr.reveal('.card-text', {
    duration: 300,
    scale: 1,
    distance: '20px',
    origin: 'bottom',
    reset: true,
    easing: 'ease-out',
    viewFactor: 1,
  }, 75);
})();

ScrollReveal().reveal('.content1, .map-picture', { duration: 2000 });

//team-title
ScrollReveal().reveal(' .digit-content h2', { duration: 1500 });

//team-card
ScrollReveal().reveal('.digit-content p', { interval: 900, delay: 200 });