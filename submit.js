function updateTitle(gender) {
    var title = document.getElementById("title");
    if (gender === "male") {
      title.innerHTML = "Welcome to my website, sir!";
    } else if (gender === "female") {
      title.innerHTML = "Welcome to my website, madam!";
    }
  }