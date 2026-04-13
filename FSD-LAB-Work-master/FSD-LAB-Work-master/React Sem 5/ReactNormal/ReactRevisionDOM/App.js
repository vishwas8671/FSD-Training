const parent = document.getElementById("parent");
//console.log(parent);
const root = ReactDOM.createRoot(parent);
const li1 = <li>RollNo- 2300321530</li>
const li2 = <li>Name- Yuvraj Singh</li>
const li3 = <li>Branch- CSE(AIML)</li>
const li4 = <li>College- ABES Engineering College Ghaziabad</li>
const ul1 = <ul>{li1} {li2} {li3} {li4}</ul>

const wrapper = React.createElement("div",{style:{backgroundColor:"yellow",height:"120px", width:"300px",border:"2px solid black"}}, ul1)

root.render(wrapper);