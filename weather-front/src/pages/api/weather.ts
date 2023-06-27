import type { NextApiRequest, NextApiResponse } from 'next'

const getHorizon = async (
    req: NextApiRequest,
    res: NextApiResponse<any>
): Promise<void> => {
    try {
        //const city = req.body.city;
        const city = 'honolulu';
        const response = await fetch(`${process.env.REACT_APP_WEATHER_BASE}/current.json?key=${process.env.REACT_APP_WEATHER_KEY}&q=${city}&aqi=no`);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).end('Server error');
    }
};

export default getHorizon;