import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Student from './components/Student'
import StateHandling from './components/StateHandling'
import ImageManipulation from './components/ImageManipulation'

function App() {
  const [count, setCount] = useState(20)
  
  // const students = [
  //   {
  //     profileImage: 'https://via.placeholder.com/200x300.png?text=Vikash',
  //     alt: 'Vikash Profile',
  //     name: 'Vikash Kumar Singh',
  //     roll: '230032153000',
  //     branch: 'CSE-AIML',
  //     section: 'B',
  //     college: 'ABES Engineering College'
  //   },
  //   {
  //     profileImage: 'https://via.placeholder.com/200x300.png?text=Rita',
  //     alt: 'yuvraj Profile',
  //     name: 'yuvraj singh',
  //     roll: '2300321530200',
  //     branch: 'CSE-AIML',
  //     section: 'B',
  //     college: 'ABES Engineering College'
  //   },
  //   {
  //     profileImage: 'https://via.placeholder.com/200x300.png?text=Arjun',
  //     alt: 'udit ',
  //     name: 'udit',
  //     roll: '230032153002',
  //     branch: 'CSE-AIML',
  //     section: 'B',
  //     college: 'ABES Engineering College'
  //   },
  //   {
  //     profileImage: 'https://via.placeholder.com/200x300.png?text=Neha',
  //     alt: 'Namrata singh',
  //     name: 'Namrata singh',
  //     roll: '230032153003',
  //     branch: 'CSE-AIML',
  //     section: 'B',
  //     college: 'ABES Engineering College'
  //   }
  // ]

  return (
    <div style={{textAlign: 'center', padding: 20}}>
      {/* {students.map((ele, index) => (
        <Student key={index} {...ele} />
      ))} */}
      {/* <StateHandling/> */}
      <ImageManipulation/>
    </div>
  )
}

export default App
