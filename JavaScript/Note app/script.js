const notesContainer = document.querySelector('.notes-container');
const createNotesButton = document.querySelector('button');




function saveNotes(){
    localStorage.setItem("notes", notesContainer.innerHTML)
}


function loadNotes(){
    let notes = localStorage.getItem("notes");
    if(notes){
        notesContainer.innerHTML = notes; 
      }

   }


loadNotes();

function createNotes(){
   let  p = document.createElement('p');
   p.setAttribute("contenteditable", "true")
   p.className= "input-box"

   let img = document.createElement("img")
   img.setAttribute("src", "images/delete.png")
   p.appendChild(img)


   notesContainer.appendChild(p)

   saveNotes()
}

notesContainer.addEventListener("click", (e)=>{
   if(e.target.tagName === "IMG"){
    e.target.parentElement.remove()
   }
   saveNotes()
})


notesContainer.addEventListener("input", ()=>{
   saveNotes()
})



