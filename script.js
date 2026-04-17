const url = 'https://tinkr.tech/sdb/Vidrik%20Luts/Databaas';
const players2 = document.querySelector(".world");
const pilt2 = "https://tinkr.tech/sdb_apps/wanderworld/images/player.png";
const game =async()=>{

  let response = await fetch(url);
  //console.log(response);

  let data1 = await response.json();
  //console.log(data1);
  
let time = setInterval(game, 2000);
 clearInterval(time);
 time.innerHTML = "";


let players1 = data1.players;
for (let player of players1) {

 //console.log(player);

const newDiv = document.createElement('div');
newDiv.classList.add('player');
players2.appendChild(newDiv);


newDiv.style.position="absolute";
newDiv.style.left= player.x + "px";
newDiv.style.top= player.y + "py";

newDiv.appendChild(css);

const messg = document.createElement("div");
messg.id = "pilt3";
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
img.src = "https://tinkr.tech/" + player.image;
newDiv.appendChild(img);
//console.log(player);


}
}

game();


       
        



