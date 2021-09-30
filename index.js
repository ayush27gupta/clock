//Real-time clock

const hours = document.querySelector(".hour");
const mins = document.querySelector(".min");
const secs = document.querySelector(".sec");
const am = document.querySelector("#am");

//to get right format
function formatZero(WithZero) {
  return WithZero < 10 ? "0".concat(WithZero) : WithZero;
}

function time() {
  //time
  let datex = new Date();
  let h = datex.getHours();
  let m = datex.getMinutes();
  let s = datex.getSeconds();

  hours.innerHTML = `${formatZero(h % 12 || 12)}`;
  mins.innerHTML = `${formatZero(m)}`;
  secs.innerHTML = `${formatZero(s)}`;
  am.innerHTML = `${h >= 12 ? "PM" : "AM"}`;
}
setInterval(time, 1000);

//clock_finished

//changing image with time
let datex = new Date();
let h = datex.getHours();
const h1 = h % 12 || 12;

const img_text = document.querySelector(".dis");
const img2 = document.querySelector(".image_chg");
const greet = document.querySelector(".t1");

function wake() {
  img_text.innerHTML = "WAKE UP!!";
  img_text.style.cssText = "color:#3d087bde;";
  img2.style.cssText =
    "background:url(./morning.png);background-color:white ;background-size:100% 100%";
  greet.innerHTML = "GOOD MORNING !!";
}

function lunch() {
  img_text.innerHTML = " LET'S HAVE SOME LUNCH !!";
  img_text.style.cssText = "color:#3d087bde;";
  greet.innerHTML = "GOOD AFTERNOON !!";
  img2.style.cssText =
    "background:url(./lunch_image.svg);background-color:white ;background-size:100% 100%";
}

function night() {
  img_text.innerHTML = " GOOD NIGHT !!";
  img_text.style.cssText = "color:#3d087bde;";
  img2.style.cssText =
    "background:url(./night.png); background-color:white; background-size:100% 100%";
  greet.innerHTML = "GOOD NIGHT !!";
}

function nacho() {
  img_text.innerHTML = "EVERYBODY LET'S NACHO!!";
  img_text.style.cssText = "color:white";
  img2.style.cssText =
    "background:url(./dance.jpg);background-color:white ;background-size:100% 100%";
  greet.innerHTML = "NACHO !!";
}
nacho();

const morning = document.querySelector(".morning");

morning.addEventListener("change", function () {
  console.log(this.value);
  console.log(h1);
  if (this.value == h1) {
    wake();
  } else {
    nacho();
  }
});

const day = document.querySelector(".day");

day.addEventListener("change", function () {
  console.log(this.value);
  console.log(h1);
  if (this.value == h1) {
    lunch();
  } else {
    nacho();
  }
});

const night1 = document.querySelector(".night");

night1.addEventListener("change", function () {
  console.log(this.value);
  console.log(h1);
  if (this.value == h1) {
    night();
  } else {
    nacho();
  }
});

//party image

let party = document.querySelector(".party1");

party.addEventListener("click", partyHandler);

function partyHandler(e) {
  const img_text2 = document.querySelector(".dis");
  const img = document.querySelector(".image_chg");
  const greet2 = document.querySelector(".t1");

  greet2.innerHTML = "DOUBLE CLICK TO END PARTY !!";
  img_text.innerHTML = " ABHI TOH PARTY SHURU HUI HAI !!";
  img.style.cssText =
    "background:url(./party2.svg); background-color:white; background-size:100% 100%";

  party = document.querySelector(".party1");
  greet2.addEventListener("dblclick", partyKhatam);

  function partyKhatam(e) {
    nacho();
  }
}
