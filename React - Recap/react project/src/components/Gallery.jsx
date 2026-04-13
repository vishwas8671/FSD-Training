import './icard.css'

function ICard({ id, name, branch, section }) {
  return (
    <div className="container">
      <h1>ICard</h1>
      <h2>ID: {id}</h2>
      <h2>Name: {name}</h2>
      <h2>Branch: {branch}</h2>
      <h2>Section: {section}</h2>
    </div>
  )
};

export default ICard
