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
        this.buildListItem(student)
        
    },

    buildListItem(student) {
        console.log(student)
    },
}
megaroster.init('#studentList')