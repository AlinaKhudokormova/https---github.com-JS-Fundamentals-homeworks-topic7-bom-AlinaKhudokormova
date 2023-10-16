document.addEventListener("DOMContentLoaded", function () {
  const selectElement = document.getElementById("yourSelect");
  const deleteButton = document.getElementById("deleteButton");
  deleteButton.addEventListener("click", function () {
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    if (selectedOption) {
      selectElement.removeChild(selectedOption);
    }
  });
});