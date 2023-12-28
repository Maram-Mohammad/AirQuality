import { Request, Response, NextFunction } from 'express';

const handleErrors = (err: Error, req: Request, res: Response, next: NextFunction): void => {
  console.error(`Error: ${err.message}`);
  res.status(500).json({ error: err.message });
};


export default handleErrors;
