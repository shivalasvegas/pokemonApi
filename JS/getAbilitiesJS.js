
  // Abilities
  function getAbilities() {
    fetch("https://pokeapi.co/api/v2/ability/?offset=" )
      .then(function (response) {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }
      response.json().then(function (data) {
        console.log(data);
        //results limited to an array of 20
        for (let i = 0; i < 20; i++) {
          console.log(data.results[i].name);
          let para = document.createElement("P"); // Create a <p> element
          para.className = "alert alert-danger col-md-8";
          para.innerText = `Ability name: ${data.results[i].name}`; // Insert text
          let myDiv = document.getElementById("getAbs");
          myDiv.appendChild(para);
        }
      });
    });
  }