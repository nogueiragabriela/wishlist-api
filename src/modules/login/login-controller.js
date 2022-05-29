import LoginService from './login-service.js'
import ClientRepository from '../client/client-repository.js'
import httpStatus from 'http-status'

class LoginController {
    clientRepository = new ClientRepository()
    async login(req, res) {
        try {
            const loginService = new LoginService(this.clientRepository)
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