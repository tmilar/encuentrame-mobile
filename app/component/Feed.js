import React, {Component} from 'react';
import {List, ListItem} from 'react-native-elements';

class Feed extends Component {
  state = {
    news: [],
    users: []
  };

  constructor(props) {
    super(props);
    this.state = {
      news: this.props.news,
      users: this.props.users
    }
  }

  render() {
    return (
      <List>
        {this.state.users.map((user) => (
          <ListItem
            key={user.login.username}
            roundAvatar
            avatar={{uri: user.picture.thumbnail}}
            title={`${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}`}
            subtitle={user.email}
            onPress={() => console.log("Pressed on: ", user.name)}
          />
        ))}
      </List>
    );
  }
}



export default Feed;
