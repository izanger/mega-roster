$(document).foundation()

const megaroster = {
    students: [],

    init(listSelector) {
        this.studentList = document.querySelector(listSelector)
        this.max = 0
        document.querySelector('form').addEventListener('submit', this.addStudent.bind(this))

    },

    addStudent(ev){
        ev.preventDefault()
        const form = ev.target
        const studentName = form.studentName.value
        const student = {
            name: form.studentName.value,
            id: ++this.max,
        }
        megaroster.students.unshift(student)
        const listItem = this.buildListItem(student)

        this.prependChild(this.studentList, listItem)
        this.buildListItem(student)
        form.reset()
    },

    prependChild(parent, child){
        parent.insertBefore(child, parent.firstChild)
    },

    buildListItem(student) {
        const template = document.querySelector('.student.template')
        const item = template.cloneNode(true)
        this.removeClassName(item, 'template')
        item.querySelector('.student-name').textContent = student.name
        item.dataset.id = student.id
        return item
    },

    removeClassName(el, className){
        el.className = el.className.replace(className, '').trim()
    },
}
megaroster.init('#studentList')