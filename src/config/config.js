module.exports = {
  db: {
    databse: process.env.DB_NAME || "holddown",
    user: process.env.DB_USER || "holddown",
    password: process.env.DB_PASS || "holddown",
    options: {
      dialect: process.env.DIALECT || "sqlite",
      host: process.env.HOST || "localhost",
      storage: "./holddown.sqlite"
    }
  }
};
