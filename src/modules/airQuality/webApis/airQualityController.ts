import { Request, Response } from 'express';
import {airQualityService, airQualityRep} from "../index";

export const AirQualityController = {
    getAll: async (req: Request, res: Response): Promise<void> => {
        try {
            const items = await airQualityRep.getAll();
            res.json(items);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    getNearestCityPollution: async (req: Request, res: Response): Promise<void> => {
        try {
            const { lat, lon } = req.query;
            if (!lat || !lon) {
                res.status(400).json({ error: 'Latitude and longitude are required parameters.' });
                return;
            }
            let result = await airQualityService.getNearestCityAirQuality(Number(lat), Number(lon));
            res.json(result);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    getMostPollutedTime: async (req: Request, res: Response): Promise<void> => {
        try {
            let result = await airQualityService.getMostPollutedTime();
            res.json(result);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    getById: async (req: Request, res: Response): Promise<void> => {
        try {
            const { id } = req.params;
            const item = await airQualityRep.getById(id);
            if (item) {
                res.json(item);
            } else {
                res.status(404).json({ error: 'Item not found' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    create: async (req: Request, res: Response): Promise<void> => {
        try {
            console.log(req.body);
            console.log("processs.....")
            const newitem = await airQualityRep.create(req.body);
            res.status(201).json(newitem);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    update: async (req: Request, res: Response): Promise<void> => {
        try {
            const { id } = req.params;
            const updatedItem = await airQualityRep.update(id, req.body);
            if (updatedItem) {
                res.json(updatedItem);
            } else {
                res.status(404).json({ error: 'Item not found' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    delete: async (req: Request, res: Response): Promise<void> => {
        try {
            const { id } = req.params;
            const result = await airQualityRep.delete(id);
            if (result) {
                res.json({ success: true });
            } else {
                res.status(404).json({ error: 'Item not found' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    test: async (req: Request, res: Response): Promise<void> => {
        try {
            console.log("API WORKS FINE >>>>>>>>>>>>>>>>>>>>>>")
            res.json("Welcome in Test Page :D ");
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
};
