import jwt, { VerifyErrors, JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { IGetUserAuthInfoRequest } from "../types/express"


const SECRET = process.env.SECRET


const decodeUserFromToken = ((expressRequest: Request, res: Response, next: NextFunction) => {
	const req = expressRequest as IGetUserAuthInfoRequest
	let token = req.get('Authorization') || req.query.token || req.body.token
	if (token) {
		token = token.replace('Bearer ', '')
		jwt.verify(token, SECRET, (err: VerifyErrors | null, decoded: JwtPayload | undefined) => {
			if (err) {
				next(err)
			} else {
					req.user = decoded?.user
					next()
				}
		})
	} else {
		next()
	}
})

const checkAuth = (expressRequest: Request, res: Response, next: NextFunction) => {
	const req = expressRequest as IGetUserAuthInfoRequest
	return req.user ? next() : res.status(401).json({ msg: 'Not Authorized' })
}

export {
  decodeUserFromToken,
  checkAuth
}