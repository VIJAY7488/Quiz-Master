
module.exports = (err, res) => {

    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Issue.";

    res.status(err.statusCode).json({success: false, message: err.message});
}