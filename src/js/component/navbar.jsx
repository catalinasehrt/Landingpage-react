import React from "react";

export default function Navbar(){

    return <nav className="navbar navbar-expand-lg bg-success">
    <div className="container-fluid" text-light>
      <a className="navbar-brand text-light fw-bolder" href="#">Landing Page With React</a>
      <div>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarNav">
        <ul className="navbar-nav ">
          <li className="nav-item">
            <a className="nav-link active  text-light" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">Destinos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">Reservar</a>
          </li>
          <li className="nav-item">
            
          </li>
        </ul>
      </div>
       </div>
    </div>
  </nav>
}