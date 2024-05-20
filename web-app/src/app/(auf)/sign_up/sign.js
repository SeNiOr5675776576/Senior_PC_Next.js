'use server'
import axios from "axios";

 export async function SignUp(){
    await axios.post('http://127.0.0.1:1337/auth/local/register', {
        username: 'test@test.com',
        email: 'test@test.com',
        password: 'Password',
    })
}