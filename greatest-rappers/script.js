document.getElementById("em").addEventListener('mouseenter',()=>{
  document.getElementById("emImage").innerHTML =
    '<img src="./img/EMINEM.jpg" width="150" alt="Image of Eminem">';
});

document.getElementById("em").addEventListener('mouseleave',()=>{
  document.getElementById("emImage").innerHTML='Eminem';
})

document.getElementById("kl").addEventListener("mouseenter", () => {
  document.getElementById("klImage").innerHTML =
    '<img src="./img/KENDRICK.jpg" width="150" alt="Image of Kendrick">';
});

document.getElementById("kl").addEventListener("mouseleave", () => {
  document.getElementById("klImage").innerHTML = "Kendrick Lamar";
});

document.getElementById("log").addEventListener("mouseenter", () => {
  document.getElementById("logImage").innerHTML =
    '<img src="./img/KANYE.jpg" width="150" alt="Image of Kanye">';
});

document.getElementById("log").addEventListener("mouseleave", () => {
  document.getElementById("logImage").innerHTML = "Kanye West";
});

document.getElementById("hop").addEventListener("mouseenter", () => {
  document.getElementById("hopImage").innerHTML =
    '<img src="./img/JAYZ.jpg" width="150" alt="Image of Jay-Z">';
});

document.getElementById("hop").addEventListener("mouseleave", () => {
  document.getElementById("hopImage").innerHTML = "Jay-Z";
});

document.getElementById("em").addEventListener("click",()=>{
  document.getElementById("details").innerHTML =
    "<h1>Eminem</h1><br><br><img src='./img/EMINEM.jpg' width='300' alt='Image of Eminem'><br><br><h3>Marshall Bruce Mathers III (born October 17, 1972), better known by his stage name Eminem, is an American rapper, songwriter, record producer, and actor.</h3><br><br><br>";
})

document.getElementById("kl").addEventListener("click", () => {
  document.getElementById("details").innerHTML =
    "<h1>Kendrick Lamar</h1><br><br><img src='./img/KENDRICK.jpg' width='300' alt='Image of Eminem'><br><br><h3>Kendrick Lamar Duckworth (born June 17, 1987) is an American rapper and songwriter. He is from Compton, California.</h3><br><br><br>";
});

document.getElementById("hop").addEventListener("click", () => {
  document.getElementById("details").innerHTML =
    "<h1>Jay-Z</h1><br><br><img src='./img/JAYZ.jpg' width='300' alt='Image of Kanye West'><br><br><h3>Shawn Corey Carter (born December 4, 1969), better known by his stage name JAY-Z (formerly Jay-Z and Jay Z), is an American rapper, record producer</h3><br><br><br>";
});

document.getElementById("log").addEventListener("click", () => {
  document.getElementById("details").innerHTML =
    "<h1>Kanye West</h1><br><br><img src='./img/KANYE.jpg' width='300' alt='Image of Kanye West'><br><br><h3>Kanye Omari West (/ˈkɑːnjeɪ/; born June 8, 1977) is an American rapper, singer, songwriter, record producer, businessman, and fashion designer.</h3><br><br><br>";
});


