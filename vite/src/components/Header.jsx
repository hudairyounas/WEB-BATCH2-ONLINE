import "./Header.css"

const Header = () => {

  const class1 = "11th"
  const class2 = "12th"

  return (
    <header>
      {/* <p className="h1" style={{
        color: "black",
        backgroundColor: "lightgreen",
        textAlign: "center"
      }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, repudiandae facere veritatis a, suscipit aliquam placeat optio illum quia ad sit accusamus adipisci maxime nam provident, in molestias inventore similique.</p> */}
      <ul>
        <li>Ali reads in class {class1}</li>
        <li>Zain reads in class {class2}</li>
      </ul>
    </header>
  )
}

export default Header