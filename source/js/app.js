const Modal = document.querySelector(".modal")
const Btn_add_todo = document.querySelector("#add_btn")
const Input_text = document.querySelector("#todo_input")
const Input_btn = document.querySelector("#todo_submit")
const Div_nostaAll = document.querySelectorAll(".status") 
const Div_nosta = document.querySelector("#no_status") 
const clear_btn = document.querySelector(".close-modal")
const clear_box = document.querySelector(".close")
const Box_to_do = document.querySelector(".todo")
const Container_all = document.querySelector(".todo-container")

function click_modal() {
    Modal.style.display = "block"
    Modal.style.top = "30%"
}

function Sit_text() {
    const text = Input_text.value
    const div_make = document.createElement("div")
    div_make.classList.add("todo")
    const spans_make = document.createElement("span")
    spans_make.classList.add("close")
    div_make.innerText = text
    div_make.setAttribute("draggable", "true");
    spans_make.innerHTML = "&times;";  
    Div_nosta.appendChild(div_make)
    div_make.appendChild(spans_make)

    spans_make.addEventListener("click", function() {
        div_make.remove()
    })

    
            
         
    Div_nostaAll.forEach(function(status1) {
        console.log("hello");
        div_make.addEventListener("dragstart", function(event) {
            event.dataTransfer.setData("elmeid", event.target.id)
            console.log("drag");

        })

        
        Div_nosta.addEventListener("overdrop", function(event) {
            event.preventDefault()

        })    
         
        status1.addEventListener("drop", function(event) {
            targetId = event.dataTransfer.getData("elmeid")
            targetEl = document.getElementById(targetId)
            event.target.append(targetEl)
            console.log("drop");

    })
    }) 
}

function Clear_box() {
    Box_to_do.remove()
}



function Come_back() {
    Modal.style.display = "none"
}


clear_box.addEventListener("click", Clear_box)

clear_btn.addEventListener("click", Come_back)
Btn_add_todo.addEventListener("click", click_modal)
Input_btn.addEventListener("click", Sit_text)