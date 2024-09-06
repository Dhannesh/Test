const buldOperation = (e) => {
  const data = e.target.id;

  const id = data.substring(3);
  const bulbId = "bulb" + id;
  const img = document.getElementById(bulbId);
  console.log(img);

  if (e.target.checked) {
    img.setAttribute("src", "onBulb.png");
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
    bulb.append(img, checkbox);
    checkbox.setAttribute("onclick", "buldOperation(event)");
    divBulb.append(bulb);
    divBulb.setAttribute("style", "display:flex");
  }
  const resetBtn = document.getElementById("resetbtn");
  resetBtn.setAttribute("style", "display:block");
};
