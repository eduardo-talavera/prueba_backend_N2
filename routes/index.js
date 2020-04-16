const express = require('express');
const router = express.Router();

const dnaCheckerController = require('../controllers/dnaCheckerController');

module.exports = () => {


    router.post('/mutation', dnaCheckerController.checkDna);

    return router;
}