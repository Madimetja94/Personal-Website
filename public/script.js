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
