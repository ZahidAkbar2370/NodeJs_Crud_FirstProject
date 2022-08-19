const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 5000;                  //Save the port number where your server will be listening

const express = require('express')
const router = express.Router()

const EmployeeController = require('../controllers/EmployeeController')

router.get('/',EmployeeController.index)
router.post('/show',EmployeeController.show)
router.post('/store',EmployeeController.store)
router.post('/update',EmployeeController.update)
router.post('/delete',EmployeeController.destroy)
