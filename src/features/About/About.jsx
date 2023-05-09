import './About.css';
import { NavLink } from "react-router-dom";


export function About() {
  return (
    <div>
      <div className="about-section">
      <h1>Get to know us</h1>
      <p>
        We know pet adoption, because we're adopters too. We think it's just
        about the best thing you can do. But we'll be real: it can be a lengthy
        process. So we're making it easier, Namewith the tools,
        advice, and transparency you need—from the first search through to daily
        life as a pet parent. Because we'll do whatever it takes to help
        millions of people and pets find each other. Ready to find your pet?
        Let's do it.
      </p>
      </div>
      <h2 style={{ textAlign : "center" }}>Our Team</h2>
      <div className="row">
        <div className="column">
          <div className="book">
            <img src="https://prod-assets.production.omega.aapdev.org/img/team/Jeannine.jpg" alt="Jeannine Taaffe" style={{width:"100%"}}/>
              <div className="container">
                <h2>Jeannine Taaffe</h2>
                <p className="title">CEO & Founder</p>
                <p><NavLink className="button" to ="/contact" style={{textDecoration:"none"}} >Contact</NavLink></p>
              </div>
            </div>
        </div>

        <div className="column">
          <div className="book">
            <img src="https://prod-assets.production.omega.aapdev.org/img/team/AdamBerlinsky-Schine.png" alt="Adam Berlinksy-Schine" style={{width:"100%"}}/>
              <div className="container">
                <h2>Adam Berlinksy-Schine</h2>
                <p className="title">Director of Engineering</p>
                <p><NavLink className="button" to ="/contact" style={{textDecoration:"none"}} >Contact</NavLink></p>
              </div>
            </div>
        </div>

        <div className="column">
          <div className="book">
            <img src="https://prod-assets.production.omega.aapdev.org/img/team/MaryDombrosky.png" alt="Laurie Wisneski" style={{width:"100%"}}/>
              <div className="container">
                <h2>Laurie Wisneski</h2>
                <p className="title">Director of Adoption Services</p>  
                <p><NavLink className="button" to ="/contact" style={{textDecoration:"none"}} >Contact</NavLink></p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
