import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Student = () => {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/')
      .then(res => setStudent(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3002/delete/${id}`)
      .then(res => {
        console.log(res);
        // Refresh the student data after successful deletion
        axios.get('http://localhost:3002/')
          .then(res => setStudent(res.data))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
      <div className='w-50 bg-white rounded p-3'>
        <Link to="/createStudent" className="btn btn-success border-0 mb-1">
          Add +
        </Link>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th> {/* Added a header for actions */}
            </tr>
          </thead>
          <tbody>
            {
              student.map((data) => (
                <tr key={data.ID}>
                  <td>{data.Name}</td>
                  <td>{data.Email}</td>
                  <td>
                    <Link to={`updateStudent/${data.ID}`} className='btn btn-primary '>Update</Link>
                    <button className='btn btn-danger m-2' onClick={() => handleDelete(data.ID)}>Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Student;
