const express = require('express');
const router = express.Router();

const userRoutes = require('./routers');

router.use( userRoutes);


