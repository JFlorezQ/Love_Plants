const {Router} = require('express')
const postUserHandler = require('../handlers/User/postUserHandler')
const getUserHandler = require('../handlers/User/getUserHandler')
const userByPk = require ('../handlers/User/userBypkHandler')
const userSoftDeleteHandler = require('../handlers/User/deleteUserHandler')

const putUserHandler = require ('../handlers/User/putUserHandler')
const postGoogleHandler = require('../handlers/User/postGoogleHandler')
const putPasswordHandler = require('../handlers/User/putPasswordHandler')
const usernameHandler = require('../handlers/User/usernameHandler')



const router = Router()

router.get("/", getUserHandler)
router.post("/", postUserHandler)
router.post('/google', postGoogleHandler)
router.get('/bypk/:id', userByPk)
router.delete("/:id", userSoftDeleteHandler)

router.put("/:id", putUserHandler)
router.put('/password/update', putPasswordHandler)
router.get('/username', usernameHandler)

module.exports = router