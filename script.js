const url = 'https://tinkr.tech/sdb/Vidrik%20Luts/Databaas';
const players2 = document.querySelector(".world");
const pilt2 = "https://tinkr.tech/sdb_apps/wanderworld/images/player.png";
const skeleton = "https://tinkr.tech/sdb_apps/wanderworld/images/skeleton.png";



setInterval(async function() {

async function sendMessage() {
  const messageData = {
  "action": "join",
  "username": "Alice"

}

  const response = await fetch('https://tinkr.tech/sdb/Vidrik%20Luts/Databaas', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(messageData)
  });
  
  const result = await response.json();
  console.log(result);
  localStorage.setItem('player_key', 'Alice');

}






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
newDiv.style.top= player.y + "py";

//newDiv.appendChild(css);

const messg = document.createElement("div");
messg.id = "tekst";
const msg = player.message;
messg.textContent = msg;
newDiv.appendChild(messg, msg);
//console.log(msg);


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
sendMessage();

}
}, 10000);






