const url = 'https://tinkr.tech/sdb/Vidrik%20Luts/Databaas';
const players2 = document.querySelector(".world");


let key = localStorage.getItem("player_key");

setInterval(async function() {

  async function sendMessage() {
    const messageData = {
      "action": "join",
      "username": "Alice3113",
    }
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(messageData)
    });
    const result = await response.json();
    if (result.player_key) {
      key = result.player_key;
      localStorage.setItem('player_key', key);
      console.log(result);
    }
  }

  if (!key) {
    sendMessage();
  };


  let response = await fetch(url);
  //console.log(response);

  let data1 = await response.json();
  //console.log(data1);
  players2.innerHTML = " ";


  let players1 = data1.players;
  for (let player of players1) {

    const newDiv = document.createElement('div');
    newDiv.classList.add('player');
    players2.appendChild(newDiv);


    newDiv.style.position="absolute";
    newDiv.style.left= player.x + "px";
    newDiv.style.top= player.y + "px";


    const messg = document.createElement("textarea");
    messg.id = "tekst";
    messg.value = player.message || "";

    newDiv.appendChild(messg);

    const nimi = document.createElement("div");
    nimi.id = "nimii";
    const nimi2 = player.username;
    nimi.textContent = nimi2;
    newDiv.appendChild(nimi);

    const img = document.createElement('img');
    img.id = "image";
    img.src = "https://tinkr.tech/" + player.image;


    newDiv.appendChild(img);
//console.log(player);
  }
}, 1000);




    const sendb = document.getElementById("tekstb");
    sendb.addEventListener("click", async function(e) {



        const textin = document.getElementById("tekst3");
      let key = localStorage.getItem("player_key");
      let mssg = textin.value;



      let mesage = {
        "action": "talk",
        "player_key": key,
        message: mssg
      };
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(mesage)



      }); console.log(mesage);  
    });


//MOVE


  players2.addEventListener("click", async function(e) {
    x = e.offsetX;
    y = e.offsetY ;
    let key = localStorage.getItem("player_key");

    let move2 = {
      "action": "move",
      "player_key": key,
      x: x,
      y: y
    };

    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(move2)
    });

  });




