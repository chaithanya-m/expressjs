var express = require('express');
var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
const userController = require('../controlar/usercontrolar.js');

router.get('/', userController.HomePage);

router.get('/listofusers', userController.ListofUsers);

router.get('/AddUsers', userController.AddUsers);
router.post('/add', userController.AddToDB)

router.get('/edit/:id',userController.Update)
router.get('/update/:id', userController.UpdateTable);

router.get('/delete/:id', userController.Delete);




// router.get('/',userController.findGigs);
// router.get('/:id', userController.findGigById);
// router.put('/:id', userController.updateGig);
// router.delete('/:id', userController.deleteById);

module.exports = router;
