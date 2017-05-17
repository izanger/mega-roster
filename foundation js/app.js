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
        megaroster.students.push(student)
        const listItem = this.buildListItem(student)
        this.studentList.appendChild(listItem)
        this.buildListItem(student)
    },

    buildListItem(student) {
        const item = document.createElement('li')
        item.textContent = student.name
        return item
    },
}
megaroster.init('#studentList')