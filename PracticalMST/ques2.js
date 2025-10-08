import React, { useState } from "react";


export default function Ques2() {
  const [formData, setFormData] = useState({ name: "", email: "", course: "" });
  const [records, setRecords] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRecords([...records, formData]);
    setFormData({ name: "", email: "", course: "" }); // reset form
  };

  return (
    <div className="card">
      <h2>Student Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="course"
          placeholder="Enter Course"
          value={formData.course}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Student</button>
      </form>

      {records.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Course</th>
            </tr>
          </thead>
          <tbody>
            {records.map((rec, index) => (
              <tr key={index}>
                <td>{rec.name}</td>
                <td>{rec.email}</td>
                <td>{rec.course}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

