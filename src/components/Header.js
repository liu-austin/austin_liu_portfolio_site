import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon" style={{fontSize: '40px', textDecoration: 'underline', color: 'teal'}}><strong>A L</strong></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Austin Liu</h1>
        <p>
          Software Engineer Specializing In Creating Performant Web Applications.
          <br />
          Focused on Developing Efficient & Scalable Solutions.
        </p>
      </div>
    </div>
    <nav>
      <ul >
        <li >
          <button style={{margin: '0 auto'}}
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button style={{margin: '0 auto'}}
            onClick={() => {
              props.onOpenArticle('resume')
            }}
          >
            Resume
          </button>
        </li>
        <li>
          <button style={{margin: '0 auto'}}
            onClick={() => {
              props.onOpenArticle('projects')
            }}
          >
            Projects
          </button>
        </li>
        <li>
          <button style={{margin: '0 auto'}}
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
