import express, {Request, Response} from 'express'
import { UserAgent } from 'express-useragent'
const infoRoutes = express.Router()

infoRoutes.get('/', (req, res, next) => {
   res.status(200)
   return res.json({
      name: "API express with TypeScript",
      version: "1.0.0"
   })

})

infoRoutes.get('/info', 
   (req: Request, res: Response, next) => {
      const useragent = <UserAgent>req.useragent
      return useragent.os !== 'Linux 64'
         ? res.json({
            name: "É igual"
         })
         : next()

   },  (req: Request, res: Response, next) => {
      const useragent = <UserAgent>req.useragent

   return res.json({     
      browser: useragent.browser,
      platform: useragent.platform,
      os: useragent.os,
      method: req.method,
      url: req.url,
      protocol: req.protocol,
      path: req.path,
      query: req.query,
      headers: req.headers
   })
})


export default infoRoutes