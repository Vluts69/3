const url = 'https://tinkr.tech/sdb/Vidrik%20Luts/Databaas';
const players2 = document.querySelector(".world");


let key = localStorage.getItem("player_key");

setInterval(async function() {

async function sendMessage() {
  const messageData = {
  "action": "join",
  "username": "Alice",
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

//newDiv.appendChild(css);

const textin = document.getElementById("tekst3");
const sendb = document.getElementById("tekstb");
//tekst inpout alice
sendb.addEventListener("click", async function(e) {
let key = localStorage.getItem("player_key");
let mssg = textin.value;

let mesage = {
  "action": "message",
  "player_key" : key,
  message: mssg
};
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(mesage)
    
 });
});



const messg = document.createElement("textarea");
messg.id = "tekst";
const msg = player.message ;
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





}
}, 1000);