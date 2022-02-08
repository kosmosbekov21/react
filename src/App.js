import React from "react";
import "./App.css"
import aetna from "./image/Rectangle (1).png"
import oscar from "./image/Rectangle (2).png"
import united from "./image/Rectangle (3).png"
import oxford from "./image/Rectangle (4).png"
import optum from "./image/Rectangle (5).png"
import harvard from "./image/Rectangle (6).png"
import alma from "./"
function App() {
return (
    
  <header className="fon">
  <ul className="menu">
    <li>Get Started</li>
    <li>How It Works</li>
    <li>For Providers</li>
    <li>About Alma</li>
    <button>Login</button>
    <button>Find a provider</button>
  </ul>
  <section className="text">
    <h1>Alma makes it easy to find high quality, affordable mental health care.</h1>
    <button>Browse our directory</button>
    <div className="ttttt">
    <h4>Subscribe to The Digest</h4>
    <p>Get the latest mental health news in your inbox every other Thursday.</p>
    <button>Sign Up</button>
    </div>
    <div className="text-end">
      <p>Want help? Talk to our</p>
      <p>Client Matching team</p>
    </div>
  </section>
  <section>
  <div className="find">
      <p className="text-fi">Find therapists at Alma in network with:</p>
      <img src= {aetna}/>
      <img src= {oscar}/>
      <img src= {united}/>
      <img src= {oxford}/>
      <img src= {optum}/>
      <img src= {harvard}/>
    </div>
  </section>
  <section>
    <div>
      <p>WHE ALMA</p>
      <h2>Simple, supportive search process</h2>
      <div>
      <i class="fas fa-file-code"></i>
      <h5>Easy-to-use directory</h5>
      <p>An easy-to-use online directory that lets you search and filter on what matters most</p>
      </div>
    </div>
    <div>
    <i class="fas fa-circle-notch"></i>
    <h5>Free matching support</h5>
    </div>
    <div>
    <i class="fas fa-comment-alt"></i>
    <h5>In-person or online care</h5>
    </div>
    <div>
    <img src= {alma}/>
    </div>
  </section>
  </header>

)
}
export default App;
