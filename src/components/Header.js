import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon" style={{fontSize: '2em', textDecoration: 'underline', color: '#64ffda'}}><strong>A L</strong></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1 className={`title-header`}>Austin Liu</h1>
        <h3 className={`subtitle-header`} style={{color: '#a8b2d1'}}>
          Full Stack Software Engineer
        </h3>
        <p>
        Experienced In Developing Performant Web Applications.
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
            Resume &nbsp;
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
