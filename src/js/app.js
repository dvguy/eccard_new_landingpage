const name_ = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const button = document.getElementById('btn');
const btn_1 = document.querySelector('.btn-start-footer')
const btn_2 = document.querySelector('.btn-features')

/**IMPLEMENTAR VALIDACION DE FORMULARIO YA CREADA EN EL CODIGO ORIGINAL */

let user_data = [];

function send_data(){
    user_data.push("Name: "+ name_.value,"Email: "+ email.value);
    // console.log(user_data);
    return(false);
}

btn_1.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
});

btn_2.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
});