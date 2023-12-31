const multer = require('multer')


const storage = multer.diskStorage({
    filename: function(request, file, callback){
        callback(null, file.originalname)
    },
    destination: function(request, file, callback)
    {
        callback(null, './assets')
        callback(null, './controllers/assets')
    },
})

const upload = multer({storage})
module.exports = upload