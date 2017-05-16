const personForm = document.querySelector('form')

const handleSubmit = (ev) => {
    ev.preventDefault()
    const form = ev.target
    const list = document.getElementById('ulList')
    const name = form.personName.value

    //promote button
    const promoteButton = document.createElement('button')
    promoteButton.type = "submit"
    promoteButton.textContent = "Promote"
    list.insertBefore(promoteButton, list.firstChild)

    promoteButton.addEventListener('click', function(){
        let listing = this.previousElementSibling.previousElementSibling

        listing.style.padding = "3px 3px 3px 5px"
        listing.style.width = listing.textContent.length * 8 + "px"
        listing.style.borderStyle = "solid"
        listing.style.fontWeight = "bold"
        bolded = 1;
    })

    //delete button
    const delButton = document.createElement('button')
    delButton.type = "submit"
    delButton.textContent = "Delete"
    delButton.display = "inline"
    list.insertBefore(delButton, list.firstChild)
    delButton.addEventListener('click', function (){
       this.nextElementSibling.remove()
       this.previousElementSibling.remove()
       this.remove()

    })

    
    //text listing
    const element = document.createElement('li')
    element.textContent = name

    list.insertBefore(element, list.firstChild) //append to top of list
    //list.appendChild(element)
}

personForm.addEventListener('submit', handleSubmit)