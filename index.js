const matrix = [
  {
    category: "Bea",
    child: [
      { title: "Good", value: 1 },
      { title: "Super", value: 2 },
    ],
  },
  {
    category: "Comp",
    child: [
      { title: "Nrk", value: -1 },
      { title: "Gor", value: 1 },
      { title: "SuFr", value: 2 },
    ],
  },
  {
    category: "Jis",
    child: [
      { title: "Sim", value: -1 },
      { title: "Norm/ShdMot", value: 1 },
      { title: "sx", value: 2 },
    ],
  },
  {
    category: "Age",
    child: [
      { title: "age", value: -1 },
      { title: "bd aAsaar", value: -2 },
    ],
  },
  {
    category: "Height",
    child: [
      { title: "Tall", value: 1 },
      { title: "btk", value: -1 },
    ],
  },
];

let radioArr = [];

matrix.forEach((item) => {
  const div = document.createElement("div");
  div.style = "background-color: gainsboro";

  const form = document.createElement("form");
  form.id = item.category;

  const p = document.createElement("p");
  p.innerHTML = item.category;

  form.appendChild(p);
  div.appendChild(form);

  document.getElementById("main").appendChild(div);

  item.child.forEach((childArr) => {
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.value = childArr.value;
    radio.name = item.category;
    radio.addEventListener("change", calculate);

    const radioLbl = document.createElement("label");
    radioLbl.innerHTML = childArr.title;

    document.getElementById(item.category).appendChild(radio);
    document.getElementById(item.category).appendChild(radioLbl);
    document
      .getElementById(item.category)
      .appendChild(document.createElement("br"));

    radioArr.push(radio);
  });
});


funtion calculate(){
   let score = 0;
   radioArr.forEach((radio)=>{
     if(radio.checked){
       score = score + parseInt(radio.value);
     }
     document.getElementById("score").innerHTML = "Result "+score
   })

  
}
