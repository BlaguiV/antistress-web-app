const container = document.getElementById("container")
const firstMode = document.getElementById("first-mode-sec")
const secondMode = document.getElementById("second-mode-inf")
const modeSwitchBtns = document.querySelectorAll(".switch-mode-btn")

const boxes = 1200

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
    setTimeout(() => {
        el.style.background = "rgb(41, 41, 41)"
    }, 1000)
}

modeSwitchBtns.forEach(button => {
    button.addEventListener("click", () => {
        if (button.classList.contains("active")) return

        modeSwitchBtns.forEach(btn => btn.classList.remove("active"))
        button.classList.add("active")
    })
});