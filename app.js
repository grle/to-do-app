function onReady() {
    const addToDoForm = document.getElementById('addToDoForm');
    const newToDoText = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');

    addToDoForm.addEventListener('submit', () => {
        event.preventDefault();

        // get the text
        let title = newToDoText.value;
        // create a new li
        let newLi = document.createElement('li');
        // create a new input
        let checkbox = document.createElement('input');
        // set the input's type to checkbox
        checkbox.type = "checkbox";

        //delete button
        let dlt = document.createElement('button');
        dlt.innerHTML = '<span>Delete</span>';

        // set the title
        newLi.textContent = title;
        // attach the checkbox to the li
        newLi.appendChild(checkbox);
        // Delete
        newLi.appendChild(dlt);
        // attach the li to the ul
        toDoList.appendChild(newLi);
        //empty the input
        newToDoText.value = '';

        //delete button
        dlt.addEventListener ('click', function(){
          newLi.parentNode.removeChild(newLi);
        });
      });
}

 window.onload = function() {
   onReady();
 };
