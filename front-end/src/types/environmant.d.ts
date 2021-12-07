// declare global env variable to define types
declare global {
    namespace NodeJS {
      interface ProcessEnv {
        PORT: string;
        REACT_APP_SECRET: string;
        REACT_APP_SITE_URL: string;
        REACT_APP_STRIPE_PUBLISHABLE_KEY: string;
        REACT_APP_STRIPE_SECRET_KEY: string;
        STRIPE_WEBHOOK_SECRET: string;
        STRIPE_authorizeUri: string;
        STRIPE_tokenUri: string;
      }
    }
  }
  
  export { };