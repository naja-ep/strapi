module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "3042d918fb1f9921b19297935436c10f"),
  },
  url: "/dashboard",
});
