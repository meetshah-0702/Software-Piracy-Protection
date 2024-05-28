const myForm = document.getElementById("user-form");
myForm.addEventListener("submit", handleSubmit);
let submitTimer;

function handleSubmit(event) {
  console.log("submitTimer set");
  event.preventDefault();
  submitTimer = setTimeout(() => {
    this.submit();
    console.log("Submitted after 1 seconds");
  }, 1000);
}