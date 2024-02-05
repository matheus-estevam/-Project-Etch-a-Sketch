const container = document.querySelector(".container");
const eraser = document.querySelector(".eraser");
const clear = document.querySelector(".clear");
const cor = document.querySelector("#colors");
const rainbow = document.querySelector(".rainbow");
const rainbowColor = [
  "#FF0000",
  "#FF7F00",
  "#FFFF00",
  "#00FF00",
  "#0000FF",
  "#2E2B5F",
  "#8B00FF",
];

// // function arcoIris(a) {
// //   const index = Math.floor(Math.random() * a.length);
// //   return a[index];
// // }

// console.log(arcoIris(rainbowColor));

// Loop para criar os quadrados
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    // Cria um quadrado
    const quadrado = document.createElement("div");
    quadrado.classList.add("quadrado");
    container.appendChild(quadrado);

    function arcoIris(a) {
      const index = Math.floor(Math.random() * a.length);
      return a[index];
    }

    //Cor Padrão
    quadrado.addEventListener("mouseenter", () => {
      quadrado.style.cssText = `background-color: black;`;
    });
    //Cor Escolhida
    cor.addEventListener("click", () => {
      quadrado.addEventListener("mouseenter", () => {
        quadrado.style.cssText = `background-color: ${cor.value};`;
      });
    });

    //Arco Iris
    rainbow.addEventListener("click", () => {
      quadrado.addEventListener("mouseenter", () => {
        quadrado.style.cssText = `background-color: ${arcoIris(rainbowColor)};`;
      });
    });

    //Borracha
    eraser.addEventListener("click", () => {
      quadrado.addEventListener("mouseenter", () => {
        quadrado.style.cssText = "background-color: white;";
      });
    });

    //Apagar Tudo
    clear.addEventListener("click", () => {
      quadrado.style.cssText = "background-color: white;";
    });
  }
}
