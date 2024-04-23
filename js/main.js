import elementMake from "./display.js"
import { addTodo, checkStorage, getStorage } from "./fungsi.js"
const keySave = 'SAVE_STORAGE'
const render = 'RENDER_EVENT'
const save = 'save'
const todos = []

document.addEventListener(render, () => {
    const rakBlmSelasai = document.getElementById("rakBlmSelesai")
    rakBlmSelasai.innerHTML = '<h2>Daftar Buku Belum Selesai Dibaca</h2>'
    const rakSelasai = document.getElementById("rakSelesai")
    rakSelasai.innerHTML = '<h2>Daftar Buku Selesai Dibaca</h2> '

    for (const todoObject of todos) {
        if (todoObject.isComplete) {
            rakSelasai.removeAttribute("hidden")
            rakSelasai.appendChild(elementMake(todoObject))
        } else {
            rakBlmSelasai.removeAttribute("hidden")
            rakBlmSelasai.appendChild(elementMake(todoObject))
        }
    }
    console.log(todos)

})

document.addEventListener(save, () => {
    console.log(localStorage.getItem(keySave))
})

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("form").addEventListener('submit', (e) => {
        e.preventDefault()
        addTodo()
        const submit = document.getElementById("submit")
        submit.setAttribute("value", "Masukkan ke Rak Belum Selesai Dibaca")
        document.getElementById("form").reset()
    })
    if (checkStorage()) {
        getStorage()
    }
})

document.getElementById("selesaiDibaca").addEventListener('change', () => {
    const submit = document.getElementById("submit")
    const checked = document.getElementById("selesaiDibaca").checked
    if (checked) {
        submit.setAttribute("value", "Masukkan ke Rak Selesai Dibaca")
    } else {
        submit.setAttribute("value", "Masukkan ke Rak Belum Selesai Dibaca")
    }
})

document.getElementById("search").addEventListener("submit", (e) => {
    e.preventDefault()
    const inputSearch = document.getElementById('inputSearch').value
    const rak = document.querySelectorAll(".rak")
    rak.forEach(title => {
        const judulBuku = title.querySelector("h1").innerText.toLowerCase()
        console.log(judulBuku)
        if (!judulBuku.includes(inputSearch)) {
            title.style.display = "none"
        } else {
            title.style.display = "block"
        }
    })
    document.getElementById("search").reset()
})

export { todos, render, save, keySave }