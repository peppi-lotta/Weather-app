import type { NextApiRequest, NextApiResponse } from 'next';
import { Horizons } from '../../../public/types';

const getHorizon = async (
  req: NextApiRequest,
  res: NextApiResponse<Horizons>
): Promise<void> => {
  try {
    const response = await fetch(`${process.env.REACT_APP_STRAPI_BASE}api/horizons`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).end('Server error');
  }
};

export default getHorizon;
