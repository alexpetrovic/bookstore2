let password1 = document.getElementById('password1');
let password2 = document.getElementById('password2');
let firstName = document.getElementById('name')
let lastName = document.getElementById('lastName')
let email = document.getElementById('email')
let form = document.getElementById('form');
let errorElementPassword = document.getElementById('errorMessagePassword');
let errorElementName = document.getElementById('errorMessageName');
let errorElementLastName = document.getElementById('errorMessageLastName');
let errorElementEmail = document.getElementById('errorMessageEmail');

form.addEventListener('submit', (e) => {    


    if(password1.value.length != password2.value.length){
        e.preventDefault();
        errorElementPassword.innerHTML = 'Originalna lozinka i potvrda lozinke moraju imati isti broj karaktera';  
    }

    if (firstName.value === '' || firstName.value == null){
        e.preventDefault();
        errorElementName.innerHTML = 'Ime ne sme biti prazno';
    }

    if (lastName.value === '' || lastName.value == null){
        e.preventDefault();
        errorElementLastName.innerHTML = 'Prezime ne sme biti prazno';
    }

    if (email.value === '' || email.value == null){
        e.preventDefault();
        errorElementEmail.innerHTML = 'Email ne sme biti prazan';
    }


})