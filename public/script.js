const menuClose = document.getElementById("menu-close");
const menuOpen = document.getElementById("menu-open");

const navLinks = document.getElementById("navbar-links");
menuOpen.classList.add("open");
menuClose.classList.add("close");
navLinks.classList.add("close");

menuOpen.onclick = () => {
  menuOpen.classList.remove("open");
  menuOpen.classList.add("close");
  menuClose.classList.remove("close");
  menuClose.classList.add("open");
  navLinks.classList.remove("close");
  navLinks.classList.add("open");
};

menuClose.onclick = () => {
  menuOpen.classList.remove("close");
  menuOpen.classList.add("open");
  menuClose.classList.remove("open");
  menuClose.classList.add("close");
  navLinks.classList.remove("open");
  navLinks.classList.add("close");
};

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const names = document.getElementById("names").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    fetch("/api/contacts/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ names, email, message }),
    })
      .then((response) => response.text())
      .then((data) => {
        const successMessage = document.getElementById("success-message");
        successMessage.innerHTML = data.slice(1, -1);
        document.getElementById("contact-form").reset();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
