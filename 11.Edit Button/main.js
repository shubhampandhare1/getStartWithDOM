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
    localStorage.setItem(user.email, JSON.stringify(user));
    showUserOnHome(user);
}

function showUserOnHome(user) {
    let parentEle = document.getElementById('userList');
    let childEle = document.createElement('li');
    childEle.id = 'addedUser';
    childEle.innerText = user.name + '-' + user.email + '-' + user.mobile;

    let deleteBtn = document.createElement('input');
    deleteBtn.type = 'button';
    deleteBtn.value = 'Delete';

    let editBtn = document.createElement('input');
    editBtn.type = 'button';
    editBtn.value = 'Edit';

    editBtn.onclick = () => {
        let storedUser = JSON.parse(localStorage.getItem(user.email));
        document.getElementById('name').value = storedUser.name;
        document.getElementById('email').value = storedUser.email;
        document.getElementById('mobile').value = storedUser.mobile;

        localStorage.removeItem(user.email);
        parentEle.removeChild(childEle);

    }
    
    deleteBtn.onclick = () => {
        localStorage.removeItem(user.email);
        parentEle.removeChild(childEle);
    }

    childEle.appendChild(editBtn);
    childEle.appendChild(deleteBtn);
    parentEle.appendChild(childEle);
}