// services/UserService.js
import User from '../models/User';

class UserService {
  static async fetchUser(userId) {
    try{
      console.log(userId)

    }catch(e){
      console.error(e.message)
    }
  }
}

export default UserService;
