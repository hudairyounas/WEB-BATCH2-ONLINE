import "./Header.css"

const Header = () => {

  // const class1 = "11th"
  // // const class2 = "12th"
  // let val = false
  //! h1tag => green, h1tag2 => red

  // if (val === true) {
  //   customClass = "h1Tag2"
  // }
  
  let customClass = "h1Tag2"
 
 
 
  return (
    <header>
      <h1 className={Math.random() > 0.5 ? "h1Tag2" : "h1Tag"}>Header Component</h1>










      {/* <p className="h1" style={{
        color: "black",
        backgroundColor: "lightgreen",
        textAlign: "center"
      }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, repudiandae facere veritatis a, suscipit aliquam placeat optio illum quia ad sit accusamus adipisci maxime nam provident, in molestias inventore similique.</p> */}
      {/* <ul>
        <li className="h1Tag">Ali reads in class {class1}</li>
        <li>Zain reads in class {class2}</li>
      </ul> */}
    </header>
  )
}

export default Header