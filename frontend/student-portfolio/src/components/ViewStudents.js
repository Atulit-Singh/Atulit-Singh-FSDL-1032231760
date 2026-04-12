import axios from 'axios';
import { useEffect, useState } from 'react';

function ViewStudents() {

    const [students, setStudents] = useState([]);

    const fetchStudents = () => {
        axios.get('http://localhost:3000/student/view')
            .then((res) => {
                setStudents(res.data);
            });
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    // DELETE
    const deleteStudent = (id) => {
        axios.delete(`http://localhost:3000/student/delete/${id}`)
            .then(() => {
                fetchStudents();
            });
    };

    // UPDATE
    const updateStudent = (id) => {
        const newName = prompt("Enter new name");
        const newEmail = prompt("Enter new email");
        const newCourse = prompt("Enter new course");

        axios.put(`http://localhost:3000/student/update/${id}`, {
            name: newName,
            email: newEmail,
            course: newCourse
        }).then(() => {
            fetchStudents();
        });
    };

    return (
        <div>
            <h3>Student List</h3>

            {students.map((s) => (
                <div key={s._id}>
                    <p>
                        {s.name} | {s.email} | {s.course}
                    </p>

                    <button onClick={() => deleteStudent(s._id)}>
                        Delete
                    </button>

                    <button onClick={() => updateStudent(s._id)}>
                        Update
                    </button>

                    <hr />
                </div>
            ))}
        </div>
    );
}

export default ViewStudents;