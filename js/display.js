import { editTodo, moveTodo, removeTodo } from "./fungsi.js"
function elementMake(todos) {

    const rak = document.createElement("div")
    const pJudul = document.createElement("h1")
    const pPenulis = document.createElement("p")
    const pTahun = document.createElement("p")
    const btnSelesai = document.createElement("button")
    const btnHapus = document.createElement("button")
    const btnEdit = document.createElement("button")

    pJudul.innerText = `${todos.title}`
    pPenulis.innerText = `Penulis : ${todos.author}`
    pTahun.innerText = `Tahun : ${todos.year}`
    btnSelesai.innerText = todos.isComplete ? "Belum Selesai Dibaca" : "Selesai Dibaca"
    btnHapus.innerText = "Hapus Buku"
    btnEdit.innerText = "Edit Buku"

    btnSelesai.setAttribute('id', 'btnFinish')
    btnHapus.setAttribute('id', 'btnDelete')
    btnEdit.setAttribute('id', 'btnEdit')
    btnSelesai.classList.add('btnFinish')
    btnHapus.classList.add('btnDelete')
    btnEdit.classList.add('btnEdit')
    rak.classList.add('rak')
    rak.setAttribute("id", `id-${todos.id}`)
    btnSelesai.addEventListener('click', () => {
        moveTodo(todos.id)
        console.log(todos)
    })
    btnHapus.addEventListener('click', () => {
        removeTodo(todos.id)
    })
    btnEdit.addEventListener('click', () => {
        editTodo(todos.id)
    })
    rak.appendChild(pJudul)
    rak.appendChild(pPenulis)
    rak.appendChild(pTahun)
    rak.appendChild(btnSelesai)
    rak.appendChild(btnHapus)
    rak.appendChild(btnEdit)

    return rak
}
export default elementMake