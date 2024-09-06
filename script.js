const updateProgress = (progress) => {
  progress.setAttribute("value", progress.value - 12);
  // console.log(progress.value);
};
const buldOperation = (e) => {
  const data = e.target.id;

  const id = data.substring(3);
  const bulbId = "bulb" + id;
  const img = document.getElementById(bulbId);
  const progress = document.getElementById("prg" + id);
  const checkbox = document.getElementById("chk" + id);
  progress.setAttribute("value", 100);

  if (e.target.checked) {
    img.setAttribute("src", "onBulb.png");
    let intervalId = setInterval(updateProgress, 1000, progress);
    setTimeout(() => {
      clearInterval(intervalId);
      img.setAttribute("src", "offBulb.png");
      checkbox.checked = "";
      progress.setAttribute("value", 0);
    }, 10000);
  } else {
    img.setAttribute("src", "offBulb.png");
  }
};

const handleStart = () => {
  const model = document.getElementById("model");
  const btnstart = document.getElementById("startbtn");
  model.setAttribute("style", "display:block");
  btnstart.setAttribute("style", "display:none");
};
const handleCount = () => {
  const model = document.getElementById("model");
  model.setAttribute("style", "display:none");
  const count = document.getElementById("n").value;
  const divBulb = document.getElementById("divBulb");
  divBulb.innerHTML = "";
  for (let i = 0; i < count; i++) {
    const bulb = document.createElement("div");
    bulb.setAttribute("class", "bulb");
    // bulb.id = "bulb" + i;
    const img = document.createElement("img");
    img.setAttribute("src", "offBulb.png");
    img.setAttribute("id", "bulb" + i);
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "chk" + i;
    const progress = document.createElement("progress");
    progress.setAttribute("value", 0);
    progress.setAttribute("max", 100);
    progress.setAttribute("id", "prg" + i);
    bulb.append(img, checkbox, progress);
    checkbox.setAttribute("onclick", "buldOperation(event)");
    divBulb.append(bulb);
    divBulb.setAttribute("style", "display:flex");
  }
  const resetBtn = document.getElementById("resetbtn");
  resetBtn.setAttribute("style", "display:block");
};
