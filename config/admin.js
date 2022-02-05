module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2edc248ae58c40c0bdc3a407ea4e0e27'),
  },
});
