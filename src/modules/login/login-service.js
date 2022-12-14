import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken';

class LoginService {
    constructor(
        loginRepository
    ) {
        this.loginRepository = loginRepository
    }

    async verify(data) {
        const email = data.email
        const selectFields = 'email password'
        const client = await this.clientRepository.getByEmail(email, selectFields)

      
        if (!client) {
            throw new Error("User not found")
        }

        const match = await bcrypt.compare(data.password, client.password)
    
        if (!match) {
            throw new Error("Invalid password")
        }

        const jwt_secret = process.env.JWT_SECRET;
        const accessToken = jwt.sign(
          {
            user: {
              id: client.email,
              role: 'CLIENT',
            },
          },
          jwt_secret,
          {
            subject: client.email,
            expiresIn: '30d',
          },
        );
        return {accessToken}
    }

}

export default LoginService






