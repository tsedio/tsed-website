const {JwtStrategy, ExtractJwt} = require("passport-jwt");
const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "secret";
opts.issuer = "accounts.examplesoft.com";
opts.audience = "yoursite.net";

passport.use(
  new JwtStrategy(opts, (jwt_payload, done) => 
    authService.findOne({id: jwt_payload.sub}, (err, user) => 
      err ? done(err, false) : done(null, user || false)
    )
  )
);
