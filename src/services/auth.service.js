const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user.model');

class AuthService {
    static async authenticationUser (email, password) {
        const user = await User.findOne({email})
        if (!user) {
            return null;
        }

        try {
            const publicKey = process.env.PUBLIC_KEY;
            const token = AuthService.generateToken(user);
            const decoded = jwt.verify(token, publicKey, { algorithms: ['RS256'] });
            console.log(decoded); // { userId: '1234567890' }
        } catch (err) {
            console.error(err);
        }

        const isPasswordValid = await  bcrypt.compare(password, user.password);
        if (!isPasswordValid) return null;

        return user;
    }

    static generateToken(user) {
        const privateKey = process.env.PRIVATE_KEY;
        const token = jwt.sign(user._id, privateKey, {algorithm: 'SHA256'});
        return token;
    }
}
