// src/controllers/AirQualityController.ts

import { Request, Response } from 'express';
import { AirQualityRepository } from '../infrastructure/dbModels/mongoose/airQualityRepository';
import axios from 'axios';

const AIRVISUAL_API_KEY = '45b05d0d-c3be-45a5-aced-44a72cd3ba24';

const airQualityRep = new AirQualityRepository();

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
        // try {

        //     const { lat, lon } = req.query;
        //     console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",lat, lon)

        //     if (!lat || !lon) {
        //         res.status(400).json({ error: 'Latitude and longitude are required parameters.' });
        //         return;
        //     }

        //     const apiUrl = `http://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${lon}&key=${AIRVISUAL_API_KEY}`;
        //     const response = await axios.get(apiUrl);
        //     // console.log(">>>>>>>>>>>>>>response>>>>>>>>>>>>>>>>>>",response)

        //     const { data } = response.data;
        //     console.log(">>>>>>>>>>>>>>response>>>>>>>>>>>>>>>>>>",response.data)

        //     const formattedResponse = {
        //         Result: {
        //             Pollution: {
        //                 ts: data.current.pollution.ts,
        //                 aqius: data.current.pollution.aqius,
        //                 mainus: data.current.pollution.mainus,
        //                 aqicn: data.current.pollution.aqicn,
        //                 maincn: data.current.pollution.maincn,
        //             },
        //         },
        //     };

        //     res.json(formattedResponse);
        // } catch (error) {
        //     console.error(error);
        //     res.status(500).json({ error: 'Internal Server Error' });
        // }
        res.json("hi to call service");

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
