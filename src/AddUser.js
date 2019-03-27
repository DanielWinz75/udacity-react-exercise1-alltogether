import React, {Component} from 'react';
import './App.css';
import PropTypes from 'prop-types';

class AddUser extends Component {
  state = {
    user: {
      firstName: '',
      lastName: '',
      username: '',
    }
  };  
 
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    
    this.setState(currState => ({
      ...currState,
      user: {
        ...currState.user,
        [name]: value,
      },
    }));
    
    let userKeys = Object.keys(this.state.user);
    for (let key of userKeys) {
      if ((this.state.user[key] === '' && key !== name) || value === '') {
        document.getElementById("addUserButton").disabled = true;
      } else {
        document.getElementById("addUserButton").disabled = false;
      }
    }
  };

  contactExists = currUsername => {
    const users = this.props.users;
    for (let user of users) {
      if (user.username === currUsername) {
        return true;
      }
    }
    return false;
  };
  
  handleAddUser = event => {
    event.preventDefault();
       const userExists = this.contactExists(this.state.user.username);
       if (userExists) {
           alert('User exists');
            return;
       }
       this.props.onAddUser(this.state.user);
  	}

	render() {
      const { firstName, lastName, username } = this.props;
        return (
          <div>
          <form onSubmit={this.handleAddUser}>
              Firstname: <input type='text' name="firstName" value={firstName} onChange={this.handleInputChange} />
              Lastname: <input type='text' name="lastName" value={lastName} onChange={this.handleInputChange} />
              Username: <input type='text' name="username" value={username} onChange={this.handleInputChange} />
              <button 
				className='user-add' 
				id='addUserButton' 
				disabled
				>Add User</button>
          </form>

          </div>
      	)
	}
}

AddUser.propTypes = {
    	firstName: PropTypes.string,
    	lastName: PropTypes.string,
    	username: PropTypes.string,
    	games: PropTypes.arrayOf(PropTypes.number)
}

AddUser.defaultProps = {
  games: [0]
};

export default AddUser
