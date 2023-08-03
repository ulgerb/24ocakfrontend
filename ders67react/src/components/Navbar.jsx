import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
   return (
      <header>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
               <Link className="navbar-brand me-2" to="/Anasayfa">
                  <img
                     src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                     height="16"
                     alt="MDB Logo"
                     loading="lazy"
                     style={{marginTop: "-1px"}}/>
               </Link>
               <button
                  className="navbar-toggler"
                  type="button"
                  data-mdb-toggle="collapse"
                  data-mdb-target="#navbarButtonsExample"
                  aria-controls="navbarButtonsExample"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
                  <i className="fas fa-bars"></i>
               </button>

               <div className="collapse navbar-collapse" id="navbarButtonsExample">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                     <li className="nav-item">
                        <Link className="nav-link" to="/">Anasayfa</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/Hakkımızda">Hakkımızda</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/İletişim">İletişim</Link>
                     </li>
                  </ul>

                  <div className="d-flex align-items-center">
                     <button type="button" className="btn btn-link px-3 me-2">
                        Login
                     </button>
                     <button type="button" className="btn btn-primary me-3">
                        Sign up for free
                     </button>
                     <Link
                        className="btn btn-dark px-3"
                        to="https://github.com/mdbootstrap/mdb-ui-kit"
                        role="button"><i className="fab fa-github"></i>
                     </Link>
                  </div>
               </div>
            </div>
         </nav>
      </header>
   )
}

export default Navbar