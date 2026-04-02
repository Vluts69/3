const url = 'https://tinkr.tech/sdb/Vidrik%20Luts/Databaas';



const game =async()=>{

  let response = await fetch(url);
  //console.log(response);

  let data1 = await response.json();
  console.log(data1);
 


let players1 = data1.players;
for (let player of players1) {
 console.log(player);

const newDiv = document.createElement('div');
newDiv.classList.add('players');
document.body.appendChild(newDiv);
newDiv.style.position="absolute";
newDiv.style.left= player.x + "px";
newDiv.style.top= player.y + "py";



const img = document.createElement('img');
img.src = player.image;
document.body.appendChild(img);
console.log(img);
}
}
game();


       
        



