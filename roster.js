const personForm = document.querySelector('form')

const handleSubmit = (ev) => {
    ev.preventDefault()
    const form = ev.target
    const list = document.getElementById('ulList')
    const name = form.personName.value

    const delButton = document.createElement('button')
    delButton.type = "submit"
    delButton.textContent = "Delete"
    list.insertBefore(delButton, list.firstChild)
    delButton.addEventListener('click', function (){
       //'this' is delButton
       this.previousElementSibling.remove()
       this.remove()

    })

    const element = document.createElement('li')
    element.textContent = name

    list.insertBefore(element, list.firstChild) //append to top of list
    //list.appendChild(element)
}

personForm.addEventListener('submit', handleSubmit)