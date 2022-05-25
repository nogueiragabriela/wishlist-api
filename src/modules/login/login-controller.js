import LoginService from './login-service.js'
import LoginRepository from './login-repository.js'

class LoginController {
    LoginRepository = new LoginRepository()
    async login(data) {
        try {
            const loginService = new LoginService(this.LoginRepository)
            return await loginService.verify(data)
        }
        catch (err) {
            console.log(err)
        }
    }
}


export default LoginController