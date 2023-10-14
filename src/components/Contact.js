import React from 'react';

function Contact() {
  return (
    <div>
      <section style={{ margin: "100px", marginTop: "10px" }}>
        <div className="image" style={{ float: "left", marginRight: "20px" }}>
          <img src="https://cdn3d.iconscout.com/3d/premium/thumb/woman-waving-hand-and-say-hello-4575651-3821317.png" alt="Contact Image" style={{ height: "550px" }} />
        </div>

        <h2 className="h22" style={{ fontSize: "35px", fontFamily: "'Rajdhani', sans-serif" }}>Contact Me ✉</h2>

        <br />
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
          <div style={{ display: "flex", alignItems: "center", height: "75px" }}>
            <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-instagram-4703914-3915166.png?f=webp" alt="Instagram" style={{ width: "100px", height: "100px", marginRight: "10px" }} />
            <span style={{ fontSize: "35px", marginTop: "0px", lineHeight: "100px", fontFamily: "'Rajdhani', sans-serif" }}><b>Instagram</b></span>
          </div>
        </a>
        <br />
        <br />
        <a href="https://github.com/samriddhi-25" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
          <div style={{ display: "flex", alignItems: "center", width: "255px", height: "75px" }}>
            <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-github-1-5645865-4695723.png?f=webp" alt="GitHub" style={{ width: "100px", height: "100px", marginRight: "10px" }} />
            <span style={{ fontSize: "35px", marginTop: "0px", lineHeight: "100px", fontFamily: "'Rajdhani', sans-serif" }}><b>GitHub</b></span>
          </div>
        </a>
        <br />
        <br />
        <a href="https://www.linkedin.com/in/samriddhitiwarivit" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
          <div style={{ display: "flex", alignItems: "center", width: "255px", height: "75px" }}>
            <img src="https://pngimg.com/d/linkedIn_PNG8.png" alt="LinkedIn" style={{ width: "75px", height: "75px", marginRight: "10px" }} />
            <span style={{ fontSize: "35px", marginTop: "0px", lineHeight: "100px", fontFamily: "'Rajdhani', sans-serif" }}><b>LinkedIn</b></span>
          </div>
        </a>
        <br />
        <br />
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
          <div style={{ display: "flex", alignItems: "center", width: "255px", height: "75px" }}>
            <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-youtube-4703923-3915175.png" alt="YouTube" style={{ width: "100px", height: "100px", marginRight: "10px" }} />
            <span style={{ fontSize: "35px", marginTop: "0px", lineHeight: "100px", fontFamily: "'Rajdhani', sans-serif" }}><b>YouTube</b></span>
          </div>
        </a>
      </section>
    </div>
  );
}

export default Contact;
