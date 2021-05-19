import PropTypes from 'prop-types'
import React from 'react'
import profilepic from '../images/profilepic.jpg';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sendername: '',
      senderemail: '',
      msg: ''
    };
  }

  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <div className="image main" style={{backgroundImage: 'url("https://arobjectimages.s3-us-west-1.amazonaws.com/portfolio/tokyo.jpg")'}}>
            <img style={{margin: '0 auto', width: '22.5%', borderRadius: '50%', border: '2.5px solid #64ffda'}} src={profilepic} alt="" />
          </div>
          <div style={{verticalAlign: 'top'}}>
            <h3 style={{textTransform: 'none', textAlign: 'left'}}>Mission-driven full stack developer with a passion for building high-quality software</h3>
            <div style={{backgroundColor: 'rgba(45, 63, 104, 0.25)', padding: '30px 17.5px 0px 17.5px', borderRadius: '5px'}}>
            <p>
            Welcome! I'm Austin Liu, a software engineer currently working in Los Angeles, CA. 
            My goal as a developer is to build software that provides productivity + simplicity and compound the benefits scaling over time.
            <br/><br/>
            I enjoy the process of developing robust solutions to web products throughout the whole development lifecycle, from creating engaging user interfaces to scaling performant backends. 
            I am capable of taking charge of projects and leading them to success and am an advocate for pragmatic coding practices and innovative technology.
            <br/><br/>
            Thanks for visiting!
            <br/><br/>
            </p>
            </div>
          </div>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'resume' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Resume</h2>
            <iframe width="100%" height="500px" src={"https://arobjectimages.s3-us-west-1.amazonaws.com/portfolio/Austin_Liu_resume.pdf#view=FitH"}></iframe>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <div style={{border: '1px solid #3d84b8', padding: '15px'}}>
            <h3 style={{textAlign: 'left'}}>TourViewAR</h3>
              <div style={{textAlign: 'left', marginBottom: '5px'}}><img style={{width: '100%'}} src={"https://media.giphy.com/media/hr9MhRBXq0W9erfibl/giphy.gif"}/></div>
              <div style={{marginTop: '25px'}}/>
              <div style={{backgroundColor: 'rgba(45, 63, 104, 0.25)', padding: '5px 10px 0px 10px', borderRadius: '5px'}}>
              <h5 style={{fontWeight: 400, marginTop: '10px'}}>Cross-platform mobile app with AR & camera integration</h5>
              <h5 style={{fontWeight: 400 }}>Tech Stack: React Native, ViroReact, Redux, Node.js, Express, PostgreSQL, AWS</h5>
              <div style={{display: 'flex', justifyContent: 'space-evenly', color: '#a8b2d1' }}>

              <h5 style={{fontWeight: '400', display: 'inline-block', textAlign: 'center', padding: '0px 0px'}}><a style={{textAlign: 'center'}} href="https://arobjectimages.s3-us-west-1.amazonaws.com/portfolio/TourViewAR.ipa" className="download icon fa-apple fa-2x"></a><div style={{display: 'block'}}>IOS (.ipa)</div></h5>
              <h5 style={{fontWeight: '400', display: 'inline-block', textAlign: 'center', padding: '0px 0px'}}><a style={{textAlign: 'center'}} href="https://arobjectimages.s3-us-west-1.amazonaws.com/portfolio/TourViewAR.apk" className="download icon fa-android fa-2x"></a><div style={{display: 'block'}}>Android (.apk)</div></h5>
              <h5 style={{fontWeight: '400', display: 'inline-block', textAlign: 'center', padding: '0px 0px'}}><a style={{textAlign: 'center'}} href="https://github.com/liu-austin/TourViewAR_client" className="download icon fa-github fa-2x"></a><div style={{display: 'block'}}>Front-end</div></h5>
              <h5 style={{fontWeight: '400', display: 'inline-block', textAlign: 'center', padding: '0px 0px'}}><a style={{textAlign: 'center'}} href="https://github.com/liu-austin/TourViewAR_server" className="download icon fa-github fa-2x"></a><div style={{display: 'block'}}>Back-end</div></h5>
            </div>
            </div>
          </div>

          <div style={{border: '1px solid #3d84b8', padding: '15px'}}>
            <h3 style={{textAlign: 'left'}}>Fortress Panic</h3>
              <div style={{textAlign: 'left', marginBottom: '5px'}}><img style={{width: '100%'}} src={"https://arobjectimages.s3-us-west-1.amazonaws.com/portfolio/image3.png"}/></div>
              <div style={{marginTop: '25px'}}/>
              <div style={{backgroundColor: 'rgba(45, 63, 104, 0.25)', padding: '5px 10px 0px 10px', borderRadius: '5px'}}>
              <h5 style={{fontWeight: 400,  marginTop: '10px'}}>Online multiplayer tower-defense game based on popular board game Castle Panic!</h5>
              <h5 style={{fontWeight: 400 }}>Tech Stack: React, Redux, Scss, Node.js, Express, Socket.io, MongoDB, Firebase, AWS</h5>
              <div style={{display: 'flex', justifyContent: 'space-evenly', color: '#a8b2d1' }}>
                <h5 style={{fontWeight: '400', display: 'inline-block', textAlign: 'center', padding: '0px 0px'}}><a style={{textAlign: 'center'}} href="http://d3ths4xs9zlotl.cloudfront.net/" className="download icon fa-link fa-2x"></a><div style={{display: 'block'}}>Live</div></h5>
                <h5 style={{fontWeight: '400', display: 'inline-block', textAlign: 'center', padding: '0px 0px'}}><a style={{textAlign: 'center'}} href="https://github.com/liu-austin/Fortress-Panic" className="download icon fa-github fa-2x"></a><div style={{display: 'block'}}>Github</div></h5>
              </div>
              </div>
            </div>

            <div style={{border: '1px solid #3d84b8', padding: '15px'}}>
            <h3 style={{textAlign: 'left'}}>A Way Home</h3>
              <div style={{textAlign: 'left', marginBottom: '5px'}}><img style={{width: '100%'}} src={"https://arobjectimages.s3-us-west-1.amazonaws.com/portfolio/fec1.png"}/></div>
              <div style={{marginTop: '25px'}}/>
              <div style={{backgroundColor: 'rgba(45, 63, 104, 0.25)', padding: '5px 10px 0px 10px', borderRadius: '5px'}}>
              <h5 style={{fontWeight: 400, marginTop: '10px'}}>Recreates VRBO's search and bookings microservices in UI design and functionality</h5>
              <h5 style={{fontWeight: 400 }}>Tech Stack: React, Redux, Sass, Node.js, Express, MySQL, Sequelize, Heroku, AWS</h5>
              <div style={{display: 'flex', justifyContent: 'space-evenly', color: '#a8b2d1' }}>
                <h5 style={{fontWeight: '400', display: 'inline-block', textAlign: 'center', padding: '0px 0px'}}><a style={{textAlign: 'center'}} href="https://awayhome-al-proxy-fec.herokuapp.com/" className="download icon fa-link fa-2x"></a><div style={{display: 'block'}}>Live</div></h5>
                <h5 style={{fontWeight: '400', display: 'inline-block', textAlign: 'center', padding: '0px 0px', color: '#a8b2d1' }}><a style={{textAlign: 'center'}} href="https://github.com/hrla33-falcons/search-bar-booking-tool" className="download icon fa-github fa-2x"></a><div style={{display: 'block'}}>Github</div></h5>
              </div>
              </div>
            </div>

            <div style={{border: '1px solid #3d84b8', padding: '15px'}}>
            <h3 style={{textAlign: 'left'}}>Systems Design Capstone</h3>
              <div style={{textAlign: 'left', marginBottom: '5px'}}><img style={{width: '100%'}} src={"https://arobjectimages.s3-us-west-1.amazonaws.com/portfolio/sdc.png"}/></div>
              <div style={{marginTop: '25px'}}/>
              <div style={{backgroundColor: 'rgba(45, 63, 104, 0.25)', padding: '5px 10px 0px 10px', borderRadius: '5px'}}>
              <h5 style={{fontWeight: 400, marginTop: '10px'}}>Back-end optimization of IKEA products microservice for horizontal scaling</h5>
              <h5 style={{fontWeight: 400 }}>Tech Stack: Node.js, Express, PostgreSQL, Redis, AWS, NginX, Next.js</h5>
              <div style={{display: 'flex', justifyContent: 'space-evenly', color: '#a8b2d1' }}>
                <h5 style={{fontWeight: '400', display: 'inline-block', textAlign: 'center', padding: '0px 0px' }}><a style={{textAlign: 'center'}} href="https://github.com/hrla33-falcons/al-service-sdc" className="download icon fa-github fa-2x"></a><div style={{display: 'block'}}>Github</div></h5>
              </div>
              </div>
            </div>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="mailto:austinliu279@gmail.com">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input value={this.state.sendername} onChange={(e) => this.setState({sendername: e.target.value})} type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input value={this.state.senderemail} onChange={(e) => this.setState({senderemail: e.target.value})} type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea value={this.state.msg} name="message" id="message" rows="4" onChange={(e) => this.setState({msg: e.target.value})}></textarea>
            </div>
            <ul className="actions">
              <li>
                <input onClick={(e) => {
                  e.preventDefault();
                  window.open('mailto:austinliu279@gmail.com?subject=Message from ' + this.state.sendername + ' (' + this.state.senderemail + ') ' + ' ' + '&body=' + this.state.msg);
               }} type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input onClick={() => {
                  this.setState({sendername: '', senderemail: '', msg: ''})
                }}type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="mailto:austinliu279@gmail.com"
                className="icon fa-envelope"
              >
                <span className="label">Email</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/austin-liu1/" className="icon fa-linkedin">
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://angel.co/u/austin-liu-4" className="icon fa-angellist">
                <span className="label">AngelList</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/liu-austin"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://zoom.us/j/6827856470"
                className="icon fa-video-camera"
              >
                <span className="label">Zoom</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
