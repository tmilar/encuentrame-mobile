import {AsyncStorage} from 'react-native'

class UserService {

  constructor() {
    this.users = [{
      email: 'admin',
      password: 'admin'
    }];
  }

  /**
   * Fetch registered users. Using local storage for now.
   */
  async checkCredentials(user) {
    console.log(`Pre-set users: ${JSON.stringify(this.users)} (total: ${this.users ? this.users.length : 0}).`);

    let users;
    let storedUsersJson = await AsyncStorage.getItem("users");

    try {
      users = JSON.parse(storedUsersJson) || [];
    } catch (e) {
      throw new Error("Problem parsing users!", e);
    }

    console.log(`Found users total: ${users ? users.length : 0}.`);

    let allUsers = [...this.users, ...users];
    let found = allUsers.find(u => {
      return u.email === user.email && u.password === user.password
    });

    console.log(`Valid credentials? ${!!found} ->`, found);
    return found;
  }

}

let userService = new UserService();
export default userService;
