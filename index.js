let form = document.forms.signup
let The_Some = document.querySelectorAll('.The_Some')

form.onsubmit = (event) => {
    event.preventDefault();
    let error = false

    The_Some.forEach(inp => {
        if(inp.value.length === 0){
            error = true
            inp.classList.add('error')
        } else{
            inp.classList.remove('error')
        }
    })
    if(error) {
        alert('You must write all inputs')
    } else {
        submit()
    }
}

function submit() {
    let user = {}

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })

    console.log(user);
}