// Create token and save in the cookie

export default (user, statusCode, res) => {

    // Create JWT Token
    const token = user.getJwtToken()

    // Options for cookie
    const options = {
        sameSite: 'none', secure: true,  maxAge: 100 * 60 * 1000
    };

    res.cookie("token", token, options).status(statusCode).json({
        token,
    });
};