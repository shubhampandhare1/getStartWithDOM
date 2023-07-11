// // EXAMINE THE DOCUMENT OBJECT//

// // console.dir(document);


// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// document.title = 1234;
// console.log(document.title)
// // console.log(document.doctype)
// // console.log(document.head)
// console.log(document.body)
// // console.log(document.all)
// console.log(document.all[13])
// console.log(document.forms)
// console.log(document.images)


// SELECTORS //

// GetElementByd //
// console.log(document.getElementById('header-title'));
console.log(document.getElementById('header-title').textContent);
console.log(document.getElementById('header-title').innerText);
let headerTitle = document.getElementById('header-title');
let header = document.getElementById('main-header');
// headerTitle.innerHTML = '<h3>Hello</h3>'
header.style.borderBottom = 'solid 3px black'

document.getElementById('add-items').style.fontWeight = 'bold';
document.getElementById('add-items').style.color = 'green';


// console.log(document.getElementsByClassName('title'))

let listGroup = document.getElementsByClassName('list-group-item');
console.log(listGroup)
listGroup[2].style.backgroundColor = 'green';

for(let i=0; i<listGroup.length; i++){
    listGroup[i].style.fontWeight = 'bold';
}