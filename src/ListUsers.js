import React, { Component } from 'react';
import './App.css';
//import PropTypes from 'prop-types';
import AddUser from './AddUser.js';
import User from './User.js';

class ListUsers extends Component {

  	state = {
      users: [],
    }

	addUser = (user) => {  
      user['numberOfGames'] = 0;
      user['showGames'] = true;
      this.setState( (prevState) => ({users: [...prevState.users, user]}) );
    }

	toggleShowGames = (username) => {
      console.log('toggleShowGames: ' , username);
      
      let index = 0;
      let user;
      for(let u of this.state.users) {
      	if ( u.username === username ) {
          user = u;
			break;
        }
        index++;
      }
      
      user = { 
        firstName: user.firstName, 
        lastName: user.lastName, 
        username: username,
        numberOfGames: user.numberOfGames, 
        showGames: !user.showGames 
      };

    	//update state value.
      	this.setState({
        users: [
          ...this.state.users.slice(0, index),
          user,
          ...this.state.users.slice(index + 1)
        ]
      })
      
      console.log(this.state.users);
    }

    render() {
    	return (
          <div>
        {(this.state.users.length < 1) && (<p>No users yet</p>)}
		{(this.state.users.length >= 1) && ( 
              <ol className='user-list'>
                  {this.state.users.map((user) => (
                    <li key={user.username} className='user-list-item'>
                     	<User user={user} onToggleShowGames={this.toggleShowGames} />
                    </li> 
                  ))}
              </ol>
		)}
		<AddUser users={this.state.users} onAddUser={this.addUser} />
			</div>
    	)
    }
} 

//ListUsers.propTypes = {
//  user: PropTypes.shape({
//    	firstname: PropTypes.string,
//    	lastname: PropTypes.string,
//    	username: PropTypes.string,
//    	games: [{name: PropTypes.string}]
//    })
//}

export default ListUsers
