import { Link } from "react-router-dom";

const NavBar =() => {
    return (
    <div className="nav-bar">
        <h3>  
            <Link to="/"> Home </Link>
         </h3>

        <h3>  
            {" "}        
              <Link to="/userList"> List Users </Link>
     </h3>
    </div>
    );
};

export default NavBar;