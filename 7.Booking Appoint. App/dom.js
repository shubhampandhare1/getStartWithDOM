function ongetacall(event) {
    event.preventDefault();


    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let mobile = document.getElementById('mobile').value;

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('mobile', mobile);

}