const form = document.getElementById("listingForm");

if (form) {
  const inputs = form.querySelectorAll(".form-input");

  function validateField(input) {
    const error = input.nextElementSibling;

    if (input.checkValidity()) {
      input.classList.remove("border-red-500", "ring-2", "ring-red-500");

      error.classList.add("hidden");

      return true;
    } else {
      input.classList.add("border-red-500", "ring-2", "ring-red-500");

      error.classList.remove("hidden");

      return false;
    }
  }

  form.addEventListener("submit", function (e) {
    let valid = true;

    inputs.forEach((input) => {
      if (!validateField(input)) {
        valid = false;
      }
    });

    if (!valid) {
      e.preventDefault();
    }
  });

  inputs.forEach((input) => {
    input.addEventListener("input", function () {
      validateField(input);
    });
  });
}
