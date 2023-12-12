import { Response } from 'express';

export const handleValidationError = (res: Response, errorMessage: string) => {
    res.status(400).json({ error: errorMessage });
};

export const handleGenericError = (res: Response, errorMessage: string) => {
    console.error("Error:", errorMessage);
    res.status(500).json({ error: errorMessage });
};
