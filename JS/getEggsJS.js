
  // Eggs
  const url = `https://pokeapi.co/api/v2/egg-group/?offset=`;
  async function getData(){
    const response = await fetch(url);
    const data = await response.json();

        for (let i = 0; i < 15; i++) {
          console.log("Name: " + data.results[i].name);
          let para = document.createElement("P")
          para.innerText = `Egg Name: ${data.results[i].name}`;
          let newDiv = document.getElementById("getEggs");
          newDiv.appendChild(para);
      }

  }

  // .then(response=>{console.log("Getting data ... ");})
  // .catch(error=>{console.error(error);})
  