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
// console.log(document.getElementById('header-title').textContent);
// console.log(document.getElementById('header-title').innerText);
// let headerTitle = document.getElementById('header-title');
// let header = document.getElementById('main-header');
// // headerTitle.innerHTML = '<h3>Hello</h3>'
// header.style.borderBottom = 'solid 3px black'

// document.getElementById('add-items').style.fontWeight = 'bold';
// document.getElementById('add-items').style.color = 'green';


//GetElementByClassName//

// console.log(document.getElementsByClassName('title'))

// let listGroup = document.getElementsByClassName('list-group-item');
// console.log(listGroup)
// listGroup[2].style.backgroundColor = 'green';

// for(let i=0; i<listGroup.length; i++){
//     listGroup[i].style.backgroundColor = 'yellow'    
//     listGroup[i].style.fontWeight = 'bold';
// }


//GetElementByTagName//

// let li = document.getElementsByTagName('li');
// console.log(li)
// li[2].style.backgroundColor = 'green';

// for(let i=0; i<li.length; i++){
//     li[i].style.backgroundColor = 'yellow'
//     li[i].style.fontWeight = 'bold';
// }


// QuerySelector //

// let header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 5px #ccc';

// let input = document.querySelector('input');
// input.value = 'Hello World!'

// let submit = document.querySelector('input[type="submit"]');
// submit.value = 'Hello World!';


// let item = document.querySelector('.list-group-item');
// item.style.color = 'orangered';

// let lastItem = document.querySelector('.list-group-item:last-child');
// // lastItem.style.color = 'green';

// // Make the 2nd item have green background color
// let secondItem = document.querySelector('.list-group-item:nth-child(2)');

// secondItem.style.backgroundColor = 'green'


// // Make the 3rd item invisible
// let third = document.querySelector('.list-group-item:nth-child(3)');
// third.style.display = 'none';


// // QuerySelectorAll //


// // Choose all the odd elements and make their background green using QuerySelectorALL
// let odd = document.querySelectorAll('li:nth-child(odd)');

// for(let i=0; i<odd.length;i++){
//     odd[i].style.backgroundColor = '#f4f4f4';
// }


// // Using QuerySelectorALL change the font color to green for 2nd item in the item list

// let listGroups = document.querySelectorAll('.list-group');
// // console.log(listGroups)
// let secItems = listGroups[0].querySelectorAll('li');
// // console.log(secItems)
// secItems[1].style.color = 'yellow';

// console.log(document.querySelector('.title'));



// Tracersing the DOM //
let itemList = document.querySelector('#items');

//parentNode =>
// console.log(itemList.parentNode);

// itemList.parentNode.style.backgroundColor = '#f1f1f1';

// console.log(itemList.parentNode.parentNode);


//parentElement
// console.log(itemList.parentElement);

// itemList.parentElement.style.backgroundColor = '#f1f1f1';
// console.log(itemList.parentElement.parentElement);

/* parentNode & parentElement does the almost same thing in most of the cases */


//childNode => if line breaks are there then it show text as well in the output. W/o line breaks it shows only li items.
// console.log(itemList.childNodes)

// console.log(itemList.children);
// console.log(itemList.children[2]);
// itemList.children[2].style.backgroundColor = '#f3f3f3';


//firstChild
// console.log(itemList.firstChild);

//firsrElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello';
// 

//lastChild
// console.log(itemList.lastChild)
// console.log(itemList.lastElementChild)
// itemList.lastElementChild.innerHTML = '<h2>Hello</h2>'


//nextSibling
// console.log(itemList.nextSibling);

//nextElementSibling
// console.log(itemList.nextElementSibling)

//previousSibling
// console.log(itemList.previousSibling)

//previousElementSibling
// console.log(itemList.previousElementSibling)
// itemList.previousElementSibling.style.color='orangered';


// createElement

//create a div
let newDiv = document.createElement('div');

//add class
// newDiv.className = 'hello';

//add id
// newDiv.id = 'helloID';

//add attribute
// newDiv.setAttribute('title','hello World');

//create text node
let newDivText = document.createTextNode('Hello Wrold');

//add text to div
newDiv.appendChild(newDivText);

let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');

// console.log(newDiv);
newDiv.style.fontSize='15px';
container.insertBefore(newDiv,h1);


let ul = document.querySelector('div .list-group');
let newItem = document.createTextNode('Hello World');
console.log(ul);

ul.insertBefore(newItem,ul.children[0]);