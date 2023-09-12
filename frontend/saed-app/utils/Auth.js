import axios from 'axios';

export async function createUser(email, password, username) {
  const response = await axios.post("http://localhost:8000/api/user/signup", {
    email: email,
    password: password,
    username: username,
  });
}
