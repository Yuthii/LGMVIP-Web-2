function createUserCard(user) {
  var card = document.createElement("div");
  card.className = "user-card";

  var image = document.createElement("img");
  image.src = user.avatar;
  image.alt = user.first_name;

  var name = document.createElement("h3");
  name.textContent = user.first_name + " " + user.last_name;

  var email = document.createElement("p");
  email.textContent = "Email: " + user.email;

  card.appendChild(image);
  card.appendChild(name);
  card.appendChild(email);

  return card;
}

function getUsers() {
  var loader = document.querySelector(".loader");
  loader.style.display = "block";

  fetch("https://reqres.in/api/users?page=1")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var users = data.data;
      var userGrid = document.querySelector(".user-grid");
      userGrid.innerHTML = ""; // Clear previous content

      users.forEach(function (user) {
        var card = createUserCard(user);
        userGrid.appendChild(card);
      });
    })
    .catch(function (error) {
      console.error("Error fetching user data:", error);
    })
    .finally(function () {
      loader.style.display = "none";
    });
}
