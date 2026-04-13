const parent = document.getElementById("parent");
//console.log(parent);
const root = ReactDOM.createRoot(parent);
const h2 = React.createElement("h2", {style:{backgroundColor:"brown"}}, "Welcome to React Dom");
const l1 =React.createElement("li", {style:{backgroundColor:"aliceblue"}}, "java");
const l2 =React.createElement("li", {style:{backgroundColor:"blue"}}, "python");
const l3 =React.createElement("li", {style:{backgroundColor:"red"}}, "React");
const ul =React.createElement("ul", {style:{backgroundColor:"lightblue"}}, l1,l2,l3);
const pic =React.createElement("img", {src:"https://imgs.search.brave.com/OA84dXlw9iy3bO5VRqJHcNJSOxIF_Uzm6CUQVdN3fX8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk5qSXhOR1Zq/TTJZdE9HVTNNeTAw/Tm1ZMUxXRXpOVGt0/T1dVek1EY3lPVFps/TTJFMVhrRXlYa0Zx/Y0djQC5qcGc", style:{height:'200px',width:'200px'}});
const myname=React.createElement("h1", {}, "Yuvraj Singh");

const header = React.createElement('div', {style:{display:'flex' ,gap:'100px'}},"Yuvraj Singh");
const image = React.createElement("div", {style:{display:'flex', alignItems:'center',gap:"100px"}}, pic, myname);
const hr = React.createElement("hr", {style:{ border:'2px solid #333'}});
// const wrapper1 =React.createElement("div", {}, h2,image,hr,ul);


// jsx
const h21 = <h2>Hello, I am Yuvraj Singh</h2>
const li1 = <li>React</li>
const li2 = <li>java</li>
const li3 = <li>C++</li>
const ul1 = <ul>{li1} {li2} {li3}</ul>

const wrapper2 = (
    <>
    {h21},
    {ul1}
    </>
)

root.render(wrapper2);