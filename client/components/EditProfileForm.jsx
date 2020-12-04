import React from 'react'
import { connect } from 'react-redux'
import ContentEditable from 'react-contenteditable'


export class EditUser extends React.Component {
    state={
      email: this.props.activeUser.email,
      username: this.props.activeUser.username,
      imgURL: this.props.activeUser.imgURL,
      bikeType: this.props.activeUser.bikeType
    }

    handleChange = evt => {
      console.log(evt.target.value)
        this.setState({
            email:evt.target.value

        })
    } 

    // handleSubmit = evt => {
    //     evt.preventDefault() 
    //       this.props.dispatch(postEditedUser)
    //       this.setState ({
    //         imgURL: '',
    //         username: '',
    //         email: '',
    //         bikeType: '',
    //       })
    // }


  componentDidMount() {

  }

  render() {
    return (
      <div>
         <h1>Edit Profile</h1>

         <ContentEditable
              html={this.state.email} // innerHTML of the editable div
              disabled={false}       // use true to disable editing
              onChange={this.handleChange} // handle innerHTML change
            />
          
          <ContentEditable
              html={this.state.username} // innerHTML of the editable div
              disabled={false}       // use true to disable editing
              onChange={this.handleChange} // handle innerHTML change
            />

          <ContentEditable
              html={this.state.bikeType} // innerHTML of the editable div
              disabled={false}       // use true to disable editing
              onChange={this.handleChange} // handle innerHTML change
            />




    {/* <form className='formBox' onSubmit={this.handleSubmit}> */}


        {/* <img src={this.props.activeUser.imgURL}/>
        <input className='formInput'
        type="image"
        onChange={this.handleChange}
        value={this.state.imgURL}
        name="imgURL" />


        <label for="username">Username:</label>
        <input type="text" id="username" name="username"
        placeholder={this.props.activeUser.username} 
        onChange={this.handleChange}
        value={this.state.username}/>


        <label for="email">Email:</label>
        <div type="text" id="email" name="email" 
        placeholder={this.props.activeUser.email}
        onChange={this.handleChange}
        value={this.state.email}>
          <h1>{this.props.activeUser.email}</h1>
          </div> */}
      

         

{/* 
        <label for="bikeType">Bike type:</label>
        <select id="bikeType" name="bikeType" 
        placeholder={this.props.activeUser.bikeType}
        onChange={this.handleChange}
        value={this.state.bikeType}>
            <option value="mountain">Mountain</option>
            <option value="bmx" selected="selected">BMX</option>
            <option value="road">Road</option>
            <option value="unicycle">Unicycle</option>
          </select>


      //   <button type="submit">Confirm</button> */}
     {/* </form> */}
      </div>
     )
  }
}

function mapStateToProps (globalState) {
    return {
      activeUser: globalState.activeUser
    }
  }

export default connect(mapStateToProps)(EditUser)
