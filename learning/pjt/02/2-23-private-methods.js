
'use strict';

function Classroom(students, teacher) {
    function disp() {
        console.log(this.students.join(','));
    }
    this.students = students;
    this.teacher = teacher;

    disp();
}

var myClassroom = new Classroom(['Terry', 'Kevin'], 'Mr. Jones');
