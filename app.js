//onReady
function onReady() {
    let id = 0;

    let toDos = [];
    const addToDoForm = document.getElementById('addToDoForm');

    //create new to-do
    function createNewToDo() {
      const newToDoText = document.getElementById('newToDoText');
      if (!newToDoText.value) { return; }

      toDos.push({
        title: newToDoText.value,
        complete: false,
        id: ++id
      });

      newToDoText.value = '';

      renderTheUI();
    }

    function remove(id) {
      return toDos.filter(toDo => toDo.id !== id);
    }

    //render the UI
    function renderTheUI() {
      const toDoList = document.getElementById('toDoList');

      toDoList.textContent = '';

      toDos.forEach(function(toDo) {
        const newLi = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";

        newLi.textContent = toDo.title;

        newLi.appendChild(checkbox);
        toDoList.appendChild(newLi);

        //create delete button
        let dlt = document.createElement('button');
        dlt.innerHTML = '<span>Delete</span>';
        //append it to newLi
        newLi.appendChild(dlt);

        //register an event listener
        dlt.addEventListener ('click', function(){
          toDos = remove(toDo.id);
          renderTheUI();
        });
      });

      //event listener - event
      addToDoForm.addEventListener('submit', event => {
        event.preventDefault();
        createNewToDo();
      });
    }
    renderTheUI();
}

 window.onload = function() {
   onReady();
 };
