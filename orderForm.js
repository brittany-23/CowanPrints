const form = document.getElementById("orderForm");
const thankyou = document.getElementById("thankyou");
const nameInput = document.getElementById("name");
const deliveryOptions = document.getElementsByName("Delivery");
function showThankYouMessage(userName, deliveryMethod) {
  thankyou.style.display = "block";
  thankyou.textContent = `Thank you for your order, ${userName}! You selected ${deliveryMethod}.`;
}
form.addEventListener("submit", function(e) {
  e.preventDefault();
  let userName = nameInput.value;
  let deliveryMethod = "unknown";
  if (deliveryOptions[0].checked) {
    deliveryMethod = "Pickup";
  } else if (deliveryOptions[1].checked) {
    deliveryMethod = "Ship";
  }
  console.log("Form submitted by: " + userName);
  console.log("Delivery method: " + deliveryMethod);

  showThankYouMessage(userName, deliveryMethod);
  form.reset();
});
