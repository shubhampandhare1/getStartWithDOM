function submitForm(event) {
    event.preventDefault();

    let name = event.target.name.value;
    let email = event.target.email.value;
    let mobile = event.target.mobile.value;

    user = {
        name: name,
        email: email,
        mobile: mobile
    }
    let userJSON = JSON.stringify(user);
    localStorage.setItem(user.email, userJSON);
}


let form = document.getElementById('my-form');

form.addEventListener('submit', addUser);

function addUser(e) {
    let userList = document.getElementById('userList');
    let li = document.createElement('li');
    li.className = 'usergroup';
    li.innerText = `Name: ${user.name}, email: ${user.email}, mobile: ${user.mobile}`;
    userList.appendChild(li);
}