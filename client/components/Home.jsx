import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'



export class Home extends React.Component {


  componentDidMount() {

  }

  render() {
    return (
      <div>
        <div className='homeInfo'>
          <p name="text" id="home-info">Info data about the website</p>
        </div>
        <div className='createEventBtn'>
          <Link to='/createEvent'>
            <button type="submit" name="create_event">Create Race</button>
          </Link>
        </div>
        <div className='listEventBtn'>
          <Link to='/events'>
            <button type="submit" name="view_event">View Race</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default connect()(Home)
