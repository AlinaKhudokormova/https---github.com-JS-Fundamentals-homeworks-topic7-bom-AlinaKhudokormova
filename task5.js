document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("button");
  const maxMessages = 5;
  button.addEventListener("click", function () {
    newMessage("I was pressed!");
  });
  button.addEventListener("mouseover", function () {
    newMessage("Mouse on me!");
  });
  button.addEventListener("mouseout", function () {
    newMessage("Mouse is not on me!");
  });
  function newMessage(message) {
    const newTag = document.createElement("p");
    newTag.innerHTML = message;
    const messages = document.querySelectorAll("p");
    if (messages.length >= maxMessages) {
      messages[0].remove();
    }
    document.body.appendChild(newTag);
  };
});
