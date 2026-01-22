alert("widget loaded")

const box = document.createElement("div")
box.innerText = "Hello from my widget!"
box.style.position = "fixed"
box.style.bottom = "20px"
box.style.right = "20px"
box.style.padding = "12px"
box.style.background = "black"
box.style.color = "black"

document.body.appendChild(box)
