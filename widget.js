alert("widget loaded")

const box = document.createElement("div")
box.innerText = "Hello from my widget!"
box.style.position = "fixed"
box.style.bottom = "200px"
box.style.right = "200px"
box.style.padding = "12px"
box.style.background = "black"
box.style.color = "black"

document.body.appendChild(box)
