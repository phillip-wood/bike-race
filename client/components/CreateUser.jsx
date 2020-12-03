import React from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'

export class CreateUser extends React.Component {
    state = {
        imgURL: '',
        username: '',
        email: '',
        bikeType: '',

    }

    handleChange = evt => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit = evt => {
        evt.preventDefault() 
          this.props.dispatch(postNewUser)
          this.setState ({
            imgURL: '',
            username: '',
            email: '',
            bikeType: '',
          })
    }


  componentDidMount() {

  }

  render() {
    return (
      <div>
         <h1>Create Profile</h1>
    <form className='formBox' onSubmit={this.handleSubmit}>


        <label for="imgURL">profile picture</label>
        <input className='formInput'
        type="text"
        onChange={this.handleChange}
        value={this.state.imgURL}
        name="imgURL" />


        <label for="username">Username:</label>
        <input type="text" id="username" name="username" 
        onChange={this.handleChange}
        value={this.state.username}/>


        <label for="email">Email:</label>
        <input type="text" id="email" name="email" 
        onChange={this.handleChange}
        value={this.state.email}/>


        <label for="bikeType">Bike type:</label>
        <select id="bikeType" name="bikeType" 
        onChange={this.handleChange}
        value={this.state.bikeType}>
            <option value="mountain">Mountain</option>
            <option value="bmx">BMX</option>
            <option value="road">Road</option>
            <option value="unicycle">Unicycle</option>
          </select>


        <button type="submit">Confirm</button>
      </form>
     </div>
    )
  }
}

export default connect()(CreateUser)