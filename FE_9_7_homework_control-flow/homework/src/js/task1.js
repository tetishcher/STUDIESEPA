let login = prompt('Please, enter user name');

if (login === '' || login === null) {
    alert('Canceled.');
} else if (login === 'User') {
    let pass = prompt('Password?', '');
    if (pass === '' || pass === null) {
        alert('Canceled.');
    } else if (pass === 'SuperUser') {
        let time = new Date().getHours();
        if (time < 20) {
            alert('Good day!');
        } else {
            alert('Good evening!');
        }
    } else {
        alert('Wrong password');
    } 

} else if (login.length < 4 && login.length > 0) {
    alert('I don\'t know any users having name length less than 4 symbols');
} else {
    alert('I don’t know you');
}
