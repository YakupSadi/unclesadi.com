const jwt = require('jsonwebtoken')
const { CustomError } = require('../middleware/custom_error')

const auth = async (req, res, next) => {
    const { token } = req.body

    if (!token) { return next(new CustomError('Not Found Token', 401)) }
    
    try
    {
        const payload = jwt.verify(token, process.env.JWT_SECRET)

        req.admin = { 
            adminId: payload.adminId, 
            email: payload.email 
        }
        next()
    }
    catch (err) { return next(new CustomError('Not Found User', 401)) }
}

module.exports = auth