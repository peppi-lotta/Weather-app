import { promises as fs } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';

function filterValuePart(arr: Array<any>, part: string) {
  part = part.toLowerCase();

  return arr.filter(function(obj) {
      return Object.keys(obj)
                   .some(function(k) { 
                             return obj[k].toLowerCase().indexOf(part) !== -1; 
                         });
  });
}

export const getCities = async (
  req: NextApiRequest,
  res: NextApiResponse<any>
): Promise<void> => {
  try {
      //const city = req.body.city.toLowerCase();
      const city = "hon";
      const fileContents = require('../../../public/json/cities.json');    
      const data_filter = filterValuePart( fileContents, city);
      console.log(data_filter);
      res.status(200).json(data_filter);

  } catch (error) {
      console.error(error);
      res.status(500).end('Server error');
  }
};
export default getCities;