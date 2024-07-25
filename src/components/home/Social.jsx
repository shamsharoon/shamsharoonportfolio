import React from 'react'

function Social() {
  return (
    <div className="home__social">
        <a href="https://www.instagram.com/shams.haroonn/" className="home__social-icon" target="_blank">
            <i className="uil uil-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/shams-haroon/" className="home__social-icon" target="_blank">
            {/* check alt after */}
            <i className="uil uil-linkedin"></i>
        </a>
        <a href="https://github.com/shamsharoon" className="home__social-icon" target="_blank">
            <i className="uil uil-github-alt"></i>
        </a>
    </div>
  )
}

export default Social