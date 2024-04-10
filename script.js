function ToggleMode() {
  const body = document.body
  body.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (body.classList.contains("light")) {
    img.setAttribute("src", "./assets/eu-light.jpeg")
    img.setAttribute("alt", "Foto do Pedro, tema claro.")
  } else {
    img.setAttribute("src", "./assets/eu-dark.jpg")
    img.setAttribute("alt", "Foto do Pedro, tema escuro.")
  }
}
