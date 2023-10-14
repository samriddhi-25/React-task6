import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

function Portfolio() {
  const textRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['My Projects💻...', 'More Projects Coming Soon✨...'],
      typeSpeed: 50, // typing speed in milliseconds
      backSpeed: 30, // backspacing speed in milliseconds
      loop: true, // loop the animation
    };

    const typed = new Typed(textRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <center>
      <section>
        <h2 style={{ color: "white", marginBottom: "20px", fontFamily: "'Inconsolata', monospace", fontSize: "40px", fontWeight: "bold" }}>
          <span ref={textRef}></span>
        </h2>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <a href="https://samriddhi-25.github.io/html-css-tasks/" className="card-link">
              <div className="card c1" style={{ width: '300px', height: '300px' }}>
                <div className="card-body">
                  <h5 className="card-title" style={{ fontFamily: "Verdana, sans-serif", fontSize: "20px", fontWeight: "bold" }}>HTML/CSS TASKS</h5>
                  <br />
                  <p className="card-text" style={{ fontFamily: "'Mohave', sans-serif", fontSize: "16px" }}>
                    HTML provides the structure, while CSS offers the style, together creating beautiful and functional web pages
                  </p>
                </div>
                <div className="overlay">
                  <img src="https://marketplace-cdn.atlassian.com/files/422562e8-0358-462a-8dca-301eeb611c93?fileType=image&mode=full-fit" alt="HTML/CSS" />

                </div>
              </div>
            </a>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <a href="https://samriddhi-25.github.io/html-css-tasks/" className="card-link">
              <div className="card" style={{ width: '300px', height: '300px' }}>
                <div className="card-body">
                  <h5 className="card-title" style={{ fontFamily: "Verdana, sans-serif", fontSize: "20px", fontWeight: "bold" }}>BOOTSTRAP/JS TASKS</h5>
                  <br />
                  <p className="card-text" style={{ fontFamily: "'Mohave', sans-serif", fontSize: "16px" }}>
                    JavaScript empowers interactivity and dynamic behavior on the web, and Bootstrap simplifies responsive web design, making them a powerful combination for creating modern, user-friendly websites
                  </p>
                </div>
                <div className="overlay">
                  <img src="https://www.sessions.edu/wp-content/uploads/web_program_update.jpg" alt="Bootstrap/JS" />
                </div>
              </div>
            </a>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <a href="https://example.com" className="card-link">
              <div className="card" style={{ width: '300px', height: '300px' }}>
                <div className="card-body">
                  <h5 className="card-title" style={{ fontFamily: "Verdana, sans-serif", fontSize: "20px", fontWeight: "bold" }}>REACT TASKS</h5>
                  <br />
                  <p className="card-text" style={{ fontFamily: "'Mohave', sans-serif", fontSize: "16px" }}>
                    React is a versatile JavaScript library for creating interactive and efficient user interfaces, making it a top choice for building modern web applications.
                  </p>
                </div>
                <div className="overlay">
                  <img src="https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/2EP14mWkbx9sq03nWnRSGT/f1d22d88bb5dde030275f9520c0f2e92/React_YT_Thumbnail.png" alt="React Tasks" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </center>
  );
}

export default Portfolio;
