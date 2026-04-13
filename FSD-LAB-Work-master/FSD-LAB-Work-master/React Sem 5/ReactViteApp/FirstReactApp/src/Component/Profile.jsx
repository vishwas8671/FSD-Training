import React from 'react'

function Profile() {
  return (
    <>
        <div className='bg-emerald-100  '>
            <h2 className='text-4xl '>
                Welcome to my profile page
            </h2>
            <img src="https://imgs.search.brave.com/Q_rCWpJzDs2eN040OGCp3vrFRpVgqe0KMv-6_LRYqfM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9hcnRpc3RpYy1o/aWdoLWZhc2hpb24t/cG9ydHJhaXQtb2Yt/YS13b21hbi13aXRo/LXN1bmdsYXNzZXMt/ZnJlZS1pbWFnZS5q/cGVnP3c9NjAwJnF1/YWxpdHk9ODA" alt="Profile Photo" className='h-[200px] w-[200px] border-4 rounded-[50%] block mx-auto p-4 m-4'/>
            <div>Name-Yuvraj Singh</div>
            <div>Section- AIML 'C'</div>
            <div>RollNo-2300321530</div>
            <div>College- Abes Engineering College Ghaziabad</div>
        </div>
    </>
  )
}

export default Profile