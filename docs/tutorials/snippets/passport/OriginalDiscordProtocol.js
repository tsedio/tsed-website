const {Strategy} = require("passport-discord");
import { authService } from 'path/to/authService';

passport.use(
  new Strategy(
    {
      clientID: "id",
      clientSecret: "secret",
      callbackURL: "callbackURL"
    },
    (accessToken, refreshToken, profile, cb) => {
      authService.findOrCreate({discordId: profile.id}, cb);
    }
  )
);
