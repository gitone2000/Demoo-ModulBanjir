// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};


// add user menu toggle
const userImg = document.querySelector('.user-img');
const userMenu = document.querySelector('.user-menu');

userImg.addEventListener('click', () => {
    userMenu.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!userImg.contains(e.target) && !userMenu.contains(e.target)) {
        userMenu.classList.remove('active');
    }
});




