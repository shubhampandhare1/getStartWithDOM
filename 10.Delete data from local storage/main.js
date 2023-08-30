function submitForm(event) {
    
    event.preventDefault();

    let name = event.target.name.value;
    let email = event.target.email.value;
    let mobile = event.target.mobile.value;

    user = {
        name:name,
        email:email,
        mobile:mobile
    }
    localStorage.setItem(user.email, JSON.stringify(user));
    showUserOnHome(user);
}

function showUserOnHome(user){
    let parentEle = document.getElementById('userList');
    let childEle = document.createElement('li');
    childEle.id = 'addedUser';
    childEle.innerText = user.name + '-' + user.email + '-' + user.mobile;

    let deleteBtn = document.createElement('input');
    deleteBtn.type = 'button';
    deleteBtn.value = 'Delete';

    deleteBtn.onclick = () => {
        localStorage.removeItem(user.email);
        parentEle.removeChild(childEle);
    }

    childEle.appendChild(deleteBtn);
    parentEle.appendChild(childEle);
}