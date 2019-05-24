import React from "react";
import Auth from "../Auth";

function Nav(props) {
 console.log('nav', props);
    return (

<div>
      
<ul id="dropdown1" class="dropdown-content">
<a href="#" data-target="mobile" class="sidenav-trigger"><i class="material-icons right">account_circle</i></a>
  <li><a href="#!">one</a></li>
  <li><a href="#!">two</a></li>
  <li class="divider"></li>
  <li><a href="#!">three</a></li>
</ul>

<nav className='grey lighten-1'>
  <div class="nav-wrapper">
  <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
    <a href="#" class="brand-logo">Logo</a>
    <ul class="right hide-on-med-and-down">

      <li><a href="sass.html">About Us</a></li>
      <li><a href="badges.html">About Dogs</a></li>
      <li><a class="dropdown-trigger" href="#!" data-target="dropdown1"><i class="medium material-icons right">account_circle</i></a></li>
      
      {!props.auth.isAuthenticated() ? 
        <li>
          <a href="#"
            onClick={props.auth.login}
            className="white-text"
            id="login"
          >
            Log In
        </a>
        </li>
      : 
       
      <li> 
      <a href="#" onClick={props.auth.logout}
            className="white-text"
            id="logout"
          >
            Log Out
          
        </a>
      </li>
      }
      {/* <!-- Dropdown Trigger --> */}
      {/* <li><a class="dropdown-trigger" href="#!" data-target="dropdown1"><i class="medium material-icons right">account_circle</i></a></li> */}
    </ul>
  </div>
</nav>
</div>
        
    // <div className='row justify-content-end mt-auto'>
    //   <ul className="nav nav-tabs">
    //     <li className="nav-item">
    //       <a
    //         href="#about"
    //         onClick={() => props.handlePageChange("About")}
    //         className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
    //       >
    //         About Us
    //       </a>
    //     </li>
    //     <li className="nav-item">
    //       <a
    //         href="#aboutDog"
    //         onClick={() => props.handlePageChange("Blog")}
    //         className={props.currentPage === "Blog" ? "nav-link active" : "nav-link"}
    //       >
    //         About Dogs
    //       </a>
    //     </li>
    //     <li className='nav-item'>
    //     {!props.auth.isAuthenticated()&& 
    //     <a href="#">
    //       <button
    //         onClick={props.auth.login}
    //         className="btn btn-lg-primary"
    //         id="login"
    //       >
    //         Log In
    //       </button>
    //     </a>
    //    }
    //    </li>
    //   <li className='nav-item'> 
    //   <a href="#">
    //       <button
    //         onClick={props.auth.logout}
    //         className="btn btn-lg-primary"
    //         id="logout"
    //       >
    //         Log Out
    //       </button>
    //     </a>
    //   </li>
    //   </ul>
    // </div>
    // );
    );
  }
export default Nav;
