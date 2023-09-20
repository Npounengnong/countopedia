import logo from "../images/logo192.png"

function Header() {
  return(
    <div className="pt-2 py-1 pl-2" style={{backgroundColor: "black",borderBottom:"1px solid #777"}}>
      <img src={logo} alt="" style={{height:"35px",verticalAlign:"top"}}></img> 
      <span className="h2 pt-4 text-white">CountOPedia</span>
    </div>
  );
} 

export default Header; 