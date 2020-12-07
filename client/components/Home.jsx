import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'

export class Home extends React.Component {

  render() {

    return (
      <div>
        <div className="homeVideo">
          <ReactPlayer
            url="Videos/homeIntroClip2.mp4"
            className="reactPlayer"
            muted={true}
            playing={true}
            loop={true}
            controls={false}
            width="100vw"
            height="100vw"
          />
          <div className="video-overlay">
            <div className="homeInfo">
              <p name="text" id="home-info">
                Find and create rides and races to enjoy together
              </p>

              <div className="createEventBtn button" id="button-5">
                <div id="translate"></div>
                <Link to={this.props.activeUser ? '/events/new' : '/login'}>
                  <button
                    type="submit"
                    name="create_event"
                    className="actual-button">
                    Create Race
                </button>
                </Link>
              </div>

              <div className="listEventBtn button" id="button-5">
                <div id="translate"></div>
                <Link to={this.props.activeUser ? '/events' : '/login'}>
                  <button
                    type="submit"
                    name="view_event"
                    className="actual-button">
                    View Race
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function ms2p(globalState) {
  return {
    activeUser: globalState.activeUser,
  }
}

export default connect(ms2p)(Home);
