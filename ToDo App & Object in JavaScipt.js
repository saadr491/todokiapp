var list = document.getElementById("list")

function addtodo(){
    var todo_item = document.getElementById("todo-item")

//create li tag with text node
var li = document.createElement('li')
var liText= document.createTextNode(todo_item.value)
li.appendChild(liText)
li.setAttribute("class","saad")

//create delete button
var delbtn = document.createElement("button")
var deltext = document.createTextNode("Delete")

delbtn.setAttribute("class","btn") //to set styling by js into html
delbtn.setAttribute("onclick","deleteitem(this)") // (naam , attribute ki value)

delbtn.appendChild(deltext)


//create edit button
var editbtn = document.createElement("button")
var edittext = document.createTextNode("edit")
editbtn.appendChild(edittext)
editbtn.setAttribute("onclick","edititem(this)")
editbtn.setAttribute("class","ebtn")


li.appendChild(delbtn)
li.appendChild(editbtn)


     list.append(li);

     todo_item.value= ""
     
}

function deleteitem(e){
e.parentNode.remove()

}
function deleteall(){
    list.innerHTML = ""
}

function edititem(e){
 var val = prompt("Enter editing text?", e.parentNode.firstChild.nodeValue)
 e.parentNode.firstChild.nodeValue = val;
}