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

let lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'green';

// Make the 2nd item have green background color
let secondItem = document.querySelector('.list-group-item:nth-child(2)');

secondItem.style.backgroundColor = 'green'


// Make the 3rd item invisible
let third = document.querySelector('.list-group-item:nth-child(3)');
third.style.display = 'none';


// QuerySelectorAll //


// Choose all the odd elements and make their background green using QuerySelectorALL
let odd = document.querySelectorAll('li:nth-child(odd)');

for(let i=0; i<odd.length;i++){
    odd[i].style.backgroundColor = '#f4f4f4';
}


// Using QuerySelectorALL change the font color to green for 2nd item in the item list

let listGroups = document.querySelectorAll('.list-group');
// console.log(listGroups)
let secItems = listGroups[0].querySelectorAll('li');
// console.log(secItems)
secItems[1].style.color = 'yellow';


console.log(document.querySelector('.title'))