const url = 'https://tinkr.tech/sdb/Vidrik%20Luts/Databaas';
const pilt1 = document.querySelector  (".pilt");
const players2 = document.querySelector("#players");
const game =async()=>{

  let response = await fetch(url);
  //console.log(response);

  let data1 = await response.json();
  //console.log(data1);
 


let players1 = data1.players;
for (let player of players1) {
 //console.log(player);

const newDiv = document.createElement('div');
newDiv.classList.add('player');
players2.appendChild(newDiv);
newDiv.style.position="absolute";
newDiv.style.left= player.x + "px";
newDiv.style.top= player.y + "py";

const messg = document.createElement("div");
messg.id = "pilt3";
const msg = player.message;
pilt1.appendChild(messg, msg);
messg.textContent = msg;
console.log(msg);




const img = document.createElement('img');
img.src = "https://tinkr.tech/" + player.image;
pilt1.appendChild(img);
//console.log(player);



}
}
game();


       
        



