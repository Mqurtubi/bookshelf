import { todos, render, save, keySave } from "./main.js"
function addTodo() {
    const judul = document.getElementById("judul").value
    const penulis = document.getElementById("penulis").value
    const tahun = document.getElementById("tahun").value
    const checked = document.getElementById("selesaiDibaca").checked
    const id = +new Date()
    const obj = {
        id: id,
        title: judul,
        author: penulis,
        year: parseInt(tahun),
        isComplete: checked,
    }
    todos.push(obj)

    document.dispatchEvent(new Event(render))
    setStorage()
}
function todoIndex(todoId) {
    for (const index in todos) {
        if (todos[index].id === todoId) {
            return index
        }
    }
    return -1
}
function removeTodo(todoId) {
    const todoTarget = todoIndex(todoId)
    if (todoIndex === -1) return

    todos.splice(todoTarget, 1)
    document.dispatchEvent(new Event(render))
    setStorage()
}
function findTodo(todo) {
    for (const todoObj of todos) {
        if (todoObj.id == todo) {
            return todoObj
        }
    }
    return null
}
function editTodo(todo) {
    const todoTarget = findTodo(todo)
    let title = prompt('Masukan Judul', todoTarget.title)
    let author = prompt('Masukan Nama Penulis', todoTarget.author)
    let tahun = prompt('Masukan Tahun', todoTarget.year)
    if (title !== null && author !== null && tahun !== null) {
        todoTarget.title = title
        todoTarget.author = author
        todoTarget.year = parseInt(tahun)
    }

    document.dispatchEvent(new Event(render))
    setStorage()
}
function moveTodo(todoObject) {
    const todoTarget = findTodo(todoObject)
    if (todoTarget.isComplete) {
        todoTarget.isComplete = false
    } else {
        todoTarget.isComplete = true
    }

    document.dispatchEvent(new Event(render))
    setStorage()
}

function checkStorage() {
    if (typeof Storage === undefined) {
        alert('browser tidak support local storage')
        return false
    }
    return true
}
function setStorage() {
    if (checkStorage) {
        const obj = JSON.stringify(todos)
        localStorage.setItem(keySave, obj)
        document.dispatchEvent(new Event(save))
    }
}

function getStorage() {
    const key = localStorage.getItem(keySave)

    let data = JSON.parse(key)

    if (data !== null) {
        for (const todo of data) {
            todos.push(todo)
        }
    }
    document.dispatchEvent(new Event(render))
}
export { addTodo, moveTodo, removeTodo, editTodo, getStorage, checkStorage }