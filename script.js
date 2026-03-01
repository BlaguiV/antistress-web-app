const container = document.getElementById("container")
const boxes = 1600

for (let i = 0; i < boxes; i++) {
    const box = document.createElement("div")
    box.classList.add("box")
    container.appendChild(box)
    box.addEventListener("mousemove", () => {
        setColorOnBox(box)
    })
}

function getRandomColor() {
    let letters = "0123456789ABCDEF"
    let color = '#'
    for (i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

function setColorOnBox(el) {
    const color = getRandomColor()

    el.style.background = color
    // el.style.boxShadow = `0 0 10xp ${color}`
    setTimeout(() => {
        el.style.background = "rgb(41, 41, 41)"
    }, 1000)
}