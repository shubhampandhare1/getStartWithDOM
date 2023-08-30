let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');
//form submit event
form.addEventListener('submit', addItem);

//delete event
itemList.addEventListener('click', removeItem);

//filter event
filter.addEventListener('keyup', filterItems);


//add item
function addItem(e){
    e.preventDefault();

    //get input value
    let newItem = document.getElementById('item').value;
    
    //create new li element
    let li = document.createElement('li');
    //add class
    li.className = 'list-group-item';
    //add text node with input value
    li.appendChild(document.createTextNode(newItem));


    //add description
    let newDescription = document.getElementById('description').value;
    let lineBreak = document.createElement('br');
    li.appendChild(lineBreak);
    li.appendChild(document.createTextNode(` ${newDescription}`));
    

    //add edit btn
    let editBtn = document.createElement('button');
    editBtn.className = 'btn btn-dark ml-2 btn-sm float-right';
    editBtn.append(document.createTextNode('Edit'));
    li.appendChild(editBtn);



    //create del button element
    let deleteBtn  = document.createElement('button');
    //Add classes of button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //add textnode for button
    deleteBtn.appendChild(document.createTextNode('X'));
    //append button to li 
    li.appendChild(deleteBtn);
    //append li to itemList
    itemList.appendChild(li);
    
}


//removeItem
function removeItem(e){
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}


//filterItem
function filterItems(e){
    //convert text to lower case
    let text = e.target.value.toLowerCase();
    //get list
    let items = itemList.getElementsByTagName('li');
    //convert to array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        let description = item.childNodes[2].textContent;
        if((itemName.toLowerCase().indexOf(text) != -1) || (description.toLowerCase().indexOf(text) != -1)){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    })
}