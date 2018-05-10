const passport = require('passport')
import User from '../db/modelos/users'


passport.use(User.createStrategy())

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

