const express = require('express');
const cors = require('cors');
const path = require('path');
const { PORT, URI } = require('./config');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/authRoutes');


const app = express();

const _dirname = path.resolve();

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173/',
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders: [
        'Content-Type', 'Authorization', 'Cache-Control', 'Expires', 'Pragma'
    ],
    credentials: true
}));

//Database connection
mongoose.connect(URI)
.then(() => console.log("DB is connected successfully"))
.catch((error) => console.log(error))

//API Endpoint
app.use('/api/v1', authRouter);


app.use(express.static(path.join(_dirname, "/frontend/dist")));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(_dirname, 'frontend', 'dist', 'index.html'))
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});