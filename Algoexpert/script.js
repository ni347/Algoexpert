function studyWithAlgo() {
  let kiran = document.getElementById("kiran");
  kiran.classList.remove("buttonbb");

  let buttoncb = document.getElementById("nikhil");
  buttoncb.classList.add("buttonbb");

  let kumar = document.getElementById("OtherResource");
  let vats = document.getElementById("studyWithALgoExpert");
  kumar.classList.remove("teamChangeDisplay");
  vats.classList.add("teamChangeDisplay");
}

function studyWithOther() {
  let Nikhil = document.getElementById("nikhil");
  Nikhil.classList.remove("buttonbb");

  let buttoncb = document.getElementById("kiran");
  buttoncb.classList.add("buttonbb");

  let kumar = document.getElementById("OtherResource");
  let vats = document.getElementById("studyWithALgoExpert");
  vats.classList.remove("teamChangeDisplay");
  kumar.classList.add("teamChangeDisplay");
}
