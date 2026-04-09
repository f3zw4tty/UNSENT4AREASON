function scrollToForm() {
  document.getElementById("messageForm").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("messageForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const receiver = document.getElementById("receiver").value;
  const area = document.getElementById("area").value;
  const message = document.getElementById("message").value;
  const color = document.getElementById("color").value;

  const messageText = `To ${receiver || "someone"}, "${message}" – ${area}`;

  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message");
  messageDiv.innerHTML = `<span style="color:${color}">${messageText}</span>`;

  document.getElementById("messages").prepend(messageDiv);

  document.getElementById("messageForm").reset();
});
