import axios from 'axios';
import { useState } from 'react';

function AddStudent() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [course, setCourse] = useState("");

    const addStudent = () => {
        axios.post('http://localhost:3000/student/add', {
            name,
            email,
            course
        }).then(() => {
            alert("Student Added");
            window.location.reload();
        });
    };

    return (
        <div>
            <h3>Add Student</h3>

            <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
            <br /><br />

            <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <br /><br />

            <input placeholder="Course" onChange={(e) => setCourse(e.target.value)} />
            <br /><br />

            <button onClick={addStudent}>Add</button>
        </div>
    );
}

export default AddStudent;