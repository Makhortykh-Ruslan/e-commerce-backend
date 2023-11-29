module.exports = {
  // mongoURI: process.env.MONGODB_URI,
  mongoURI: 'mongodb+srv://Ruslan:chillerPassword@test-online-shop.fffe6.mongodb.net/test-online-shop?retryWrites=true&w=majority',
  secretOrKey: process.env.SECRET_OR_KEY,
  nodemailerUser: process.env.NODEMAILER_USER,
  nodemailerPassword: process.env.NODEMAILER_PASSWORD,
  nodemailerService: process.env.NODEMAILER_SERVICE
};
