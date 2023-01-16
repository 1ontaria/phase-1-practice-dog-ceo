console.log("%c HI", "color: firebrick");

document.addEventListener("DOMContentLoaded", pageLoad());

function pageLoad() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  fetch(imgUrl)
    .then((response) => response.json())
    .then((response) => {
      const dogImageContainer = document.getElementById("dog-image-container");
      response.message.forEach((url) => {
        const img = document.createElement("img");
        img.src = url;
        dogImageContainer.append(img);
      });
    });
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  fetch(breedUrl)
    .then((response) => response.json())
    .then((response) => {
      const ul = document.getElementById("dog-breeds");
      const keys = Object.keys(response.message);
      keys.forEach((element) => {
        const li = document.createElement("li");
        li.textContent = element;
        li.addEventListener("click", () => {
          li.style.color = "pink";
        });
        ul.append(li);
      });
      const dropdown = document.getElementById("breed-dropdown");
      keys.filter((letter) => {
        if (letter === "a") {
        }
      });
    });
}
