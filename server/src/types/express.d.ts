declare global {
    namespace Express {
    interface Request {
      user?: any;
    }
  }
}

declare module 'express-serve-static-core' {
    interface Request {
        user?: string
    }
    interface Response {
        user?: string
    }
  }

export { };