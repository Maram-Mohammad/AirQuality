import { Request, Response, NextFunction } from 'express';
import logger from './logger';

const handleErrors = (err: Error, req: Request, res: Response, next: NextFunction): void => {
  logger.error(`Error: ${err.message}`);
  res.status(500).json({ error: err.message });
};


export default handleErrors;
