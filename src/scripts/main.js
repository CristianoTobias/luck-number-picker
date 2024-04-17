document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("form-picker")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      let maximumNumber = document.getElementById("maximum-number").value;
      maximumNumber = parseFloat(maximumNumber);
      if (maximumNumber > 1 && Number.isInteger(maximumNumber)) {
        let randomNumber = Math.floor(Math.random() * maximumNumber) + 1;
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result").innerHTML = "The number drawn is: <span></span>"
        document.querySelector("span").innerText = randomNumber;

      } else {
        document.querySelector(".result").innerText =
          "Type a whole number equal to or greater than 2";
      }
    });
});
