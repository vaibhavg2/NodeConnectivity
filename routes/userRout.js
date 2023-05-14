const express=require('express')
const router=express.Router();

const userc= require('../Controller/userController')

router.get('/',userc.getValue);
router.get('/:id',userc.getValueById);
router.post('/',userc.insertValue);
router.put('/:id',userc.updateValue);
router.delete('/:id',userc.deleteValue);

module.exports=router