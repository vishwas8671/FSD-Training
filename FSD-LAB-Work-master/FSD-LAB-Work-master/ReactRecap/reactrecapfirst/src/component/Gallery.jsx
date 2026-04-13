import React from 'react'
import ICard from './ICard'

function Gallery() {
    
    const student =[{
        id:"2342",
        name:"yuvraj",
        branch:"AIML"
    },

    {
        id:"2342",
        name:"yuvraj2",
        branch:"AIML"
    },
    {
        id:"2342",
        name:"yuvraj3",
        branch:"AIML"
    },
]

  return (
    <div>
        {/* <ICard id='2314' name='fhiadlkj' branch='lasdj' />
        <ICard id='23132' name='gkndfs' branch='dncvk'/> */}
        {/* <ICard data = {student[1]} /> */}


        {
            student.map((ele)=>(
            <ICard data = {ele}/>
        ))
        }
    </div>
  )
}

export default Gallery