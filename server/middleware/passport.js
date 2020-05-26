const config = require("../config");
const User = require("../models/userModel");
const passport = require("passport");

const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.JWT_SECRET;
passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const user = await User.findById(jwt_payload.id);
      if (!user) {
        return done(new Error("Not found this user"), null);
      }
      return done(null, user);
    } catch (error) {
      done(error);
    }
  })
);

module.exports.isLogin = passport.authenticate("jwt", { session: false });
