(function () {
  // create a box
  const box = document.createElement("div")
  box.innerText = "Hello from my widget!"

  // basic styling
  box.style.position = "fixed"
  box.style.bottom = "20px"
  box.style.right = "20px"
  box.style.padding = "12px"
  box.style.background = "#222"
  box.style.color = "white"
  box.style.borderRadius = "8px"
  box.style.fontFamily = "sans-serif"
  box.style.zIndex = "9999"

  document.body.appendChild(box)
})()
