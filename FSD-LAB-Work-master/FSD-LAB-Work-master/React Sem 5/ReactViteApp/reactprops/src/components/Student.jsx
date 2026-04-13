import React from 'react'
import './Student.css'

function Student(data) {

  
  return (
    <div className="student-card">
      <img src={data.profileImage} alt={data.alt || 'profile image'} className="student-img" />
      <h1 className="student-title">Student Info</h1>
      <div className="student-field"><strong>Name:</strong> <span>{data.name}</span></div>
      <div className="student-field"><strong>Roll:</strong> <span>{data.roll}</span></div>
      <div className="student-field"><strong>Branch:</strong> <span>{data.branch}</span></div>
      <div className="student-field"><strong>Section:</strong> <span>{data.section}</span></div>
      <div className="student-field"><strong>College:</strong> <span>{data.college}</span></div>
    </div>
  )
}
export default Student;
// Student.defaultProps = {
//   profileImage: 'https://via.placeholder.com/200x300.png?text=Profile',
//   alt: 'profile image',
//   name: 'N/A',
//   roll: 'N/A',
//   branch: 'N/A',
//   section: 'N/A',
//   college: 'N/A'
// }


