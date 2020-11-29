require("dotenv").config();

const config = {
    port: process.env.PORT || 3000,
    dev: process.env.NODE_ENV !== "production",
    cors: process.env.CORS,

    db_user: process.env.DB_USER,
    db_password: process.env.DB_PASSWORD,
    db_host: process.env.DB_HOST,
    db_name: process.env.DB_NAME,

    default_admin_password: process.env.DEFAULT_ADMIN_PASSWORD,
    default_user_password: process.env.DEFAULT_USER_PASSWORD,
    auth_jwt_secret: process.env.AUTH_JWT_SECRET,
    public_api_key_token: process.env.PUBLIC_API_KEY_TOKEN,
    admin_api_key_token: process.env.ADMIN_API_KEY_TOKEN,
};

module.exports = {
    config
};
