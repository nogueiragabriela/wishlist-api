import LoginService from './login-service.js'
import LoginRepository from './login-repository.js'
import httpStatus from 'http-status'

class LoginController {
    LoginRepository = new LoginRepository()
    async login(req, res) {
        try {
            const loginService = new LoginService(this.LoginRepository)
            const accessToken = await loginService.verify(req.body)
            res.status(httpStatus.OK).send(accessToken)
        }
        catch (err) {
            res.status(httpStatus.UNAUTHORIZED).json({
                message: err.message
            })
        }
    }
}


export default LoginController