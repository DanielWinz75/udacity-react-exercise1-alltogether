import React, { Component } from 'react';
import './App.css';

class User extends Component {
  	state = {
      showGames: this.props.user.showGames
    }

	toggleShowGames = (event) => {
      event.preventDefault();
      this.setState((prevState) => ({showGames: !prevState.showGames}));
      this.props.onToggleShowGames(this.props.user.username);
    }
  
	render() {
    	return(
        	 <div className='user-details'>
                <p>Firstname: {this.props.user.firstName}</p>
                <p>Lastname: {this.props.user.lastName}</p>
                <p>Username: {this.props.user.username}</p>

				{(this.state.showGames === true) && (<p>Number of games: {this.props.user.numberOfGames}</p>)}

                <button 
                	className='toggle-games' 
                	id='toggleGames' 
					onClick={this.toggleShowGames}
				>
				{(this.state.showGames ? 'Hide ' : 'Show ')}number of Games
				</button>
                <hr/>
			</div>
        )
    }
}

export default User

