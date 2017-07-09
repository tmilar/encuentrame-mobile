import {AsyncStorage} from 'react-native'

class UserService {

  constructor() {
    this.initialUsers = [{
      email: 'admin',
      password: 'admin'
    }];
  }

  /**
   * Fetch registered users. Using local storage for now.
   */
  async checkCredentials(user) {
    let found = await this.findByEmail(user.email);

    if (!found) {
      console.log(`El usuario '${user.email}' no esta registrado.`);
      return false;
    }

    // Check password
    if (this.checkUserPassword(found, user.password)) {
      console.log(`La contraseña ingresada para '${user.email}' es incorrecta.`);
      return false;
    }

    console.log(`Valid credentials! Welcome: `, found);
    return found;
  }

  /**
   * Naive implementation to Vslidate user credentials against input password.
   *
   * @param user
   * @param password
   * @returns {boolean}
   */
  checkUserPassword(user, password) {
    return user.password !== password;
  }

  async findByEmail(userEmail) {
    let allUsers = await this.findAll();

    return allUsers.find(u => {
      return u.email === userEmail;
    });
  }

  async findAll() {

    let users;
    let storedUsersJson = await AsyncStorage.getItem("users");

    try {
      users = JSON.parse(storedUsersJson) || [];
    } catch (e) {
      throw new Error("Problem parsing users!", e);
    }

    let allUsers = users;

    if(this.initialUsers && this.initialUsers.length) {
      // synchronize (first time only)
      allUsers = [...this.initialUsers, ...users];
      delete this.initialUsers;
      await AsyncStorage.setItem("users", JSON.stringify(allUsers));
    }

    console.log(`Found users total: ${allUsers ? allUsers.length : 0}.`);

    return allUsers;
  }

}

let userService = new UserService();
export default userService;
