import multer from 'multer'
import path from 'path'
import { v4 } from 'uuid'


const storange = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.resolve("./uploads"))
    },
    filename: (req, file, callback) => {
        const time = new Date().getTime()

        callback(null, `${time}_${file.originalname}`)
    }
})

function fileFilter(req: any, file: any, cb: any) {

    const extensaoImg = ['image/png', 'image/jpg', 'image/jpeg','image/jfif'].find(formatoaceito => formatoaceito === file.mimetype)

    if (extensaoImg) {
        return cb(null, true)
    }

    return cb(null, false)

}


const upload = multer({ storage: storange, fileFilter: fileFilter })

export default upload