import { auth } from '../firebase-admin/firebaseAdminConf.js'

export const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization

  if (!token) {
    return res.status(401).json({message: 'Token not provided'})
  }

  try {
    const authUser = await auth.verifyIdToken(token)
    req.user = authUser
    next()
  } catch (error) {
    return res.status(401).json({message: 'Token unauthorized'})
  }
}
