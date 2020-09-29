import React from 'react';
import User from './Components/User'
import './App.css';

class App extends React.Component {
  state = {
    username: 'JustinMrks',
    userData: {},
    followers: []
  }

  componentDidMount() {
    console.log('mounted component')
    this.fetchUser()
    this.fetchFollowers()
  }

  fetchUser = () => {
    fetch(`https://api.github.com/users/${this.state.username}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ userData: data })
      })
      .catch(err => console.log(err))
  }

  fetchFollowers = () => {
    fetch(`https://api.github.com/users/${this.state.username}/followers`)
      .then(res => res.json())
      .then(data => {
        this.setState({ followers: data })
      })
      .catch(err => console.log(err))
  }

  render() {
    return(
      <div>
        <User user={this.state.userData}/>
        {this.state.followers.map(follower => {
          return(<User user={follower}/>)
        })}
      </div>)
  }
}

export default App;
