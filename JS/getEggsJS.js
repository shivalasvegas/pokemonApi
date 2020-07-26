
  // Abilities
  function getEggs() {
    fetch("https://pokeapi.co/api/v2/egg-group/?offset=" )
      .then(function (response) {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }
      response.json().then(function (data) {
        console.log(data);
        
        for (let i = 0; i < 15; i++) {
          console.log(data.results[i].name);
          let para = document.createElement("P"); // Create a <p> element
          para.className = "alert alert-danger col-md-8";
          para.innerText = `Ability name: ${data.results[i].name}`; // Insert text
          let myDiv = document.getElementById("getEggs");
          myDiv.appendChild(para);
        }
      });
    });
  }