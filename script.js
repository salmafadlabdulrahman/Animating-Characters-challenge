let container = document.querySelector(".container");
let header = document.querySelector(".header");

const randomColor = () => {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `rgb(${red}, ${green}, ${blue})`;
  return color;
};

const fonts = [
  "Montserrat",
  "Lato",
  "Nunito",
  "Oswald",
  "Aldrich",
  "Raleway",
  "Roboto",
];
const randomFont = () => {
  let random = Math.floor(Math.random() * fonts.length);
  return fonts[random];
};

const fontWeight = [300, 400, 500, 600, 700]

const randomFontWeight = () => {
  let random = Math.floor(Math.random() * fontWeight.length);
  return fontWeight[random];
}


let words = header.textContent;



setInterval(() => {
  let letters = header.textContent.split("");
  let coloredText = "";

  for (let i = 0; i < letters.length; i++) {
    coloredText += `<span class="span" style="color: ${randomColor()}; animation: fade 4s infinite">${letters[i]}</span>`;
  }

  header.innerHTML = coloredText;
  header.style.fontFamily = randomFont();

  container.style.backgroundColor = randomColor();
  header.style.fontWeight = randomFontWeight();

  
}, 2000);




