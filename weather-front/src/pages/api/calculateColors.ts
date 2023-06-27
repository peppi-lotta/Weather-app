import type { NextApiRequest, NextApiResponse } from 'next'

const getColor = async (
  req: NextApiRequest,
  res: NextApiResponse<string>
): Promise<void> => {
  try {
    const type = req.body.type;
    var today = new Date();
    const minutes = today.getHours() * 60 + today.getMinutes();
    //const minutes = 600;
    let r = 255;
    let g = 255;
    let b = 255;
    switch (type) {
      case 'top':
        // from 18 to 24: orange -> dark purple
        if (minutes >= 1080 && minutes <= 1440) {
          let x = minutes - 1080;
          let y = 360 - x;
          let z = y / 360;
          r = Math.ceil(30 + z * 195)
          g = Math.ceil(15 + z * 85)
          b = Math.ceil(45 + z * -30)
        }
        // from 0 to 12: dark purple -> sky blue 
        else if (minutes >= 0 && minutes <= 720) {
          let z = minutes / 720;
          r = Math.ceil(30 + z * -30)
          g = Math.ceil(15 + z * 225)
          b = Math.ceil(45 + z * 210)
        }
        // from 12 to 18 sky blue -> orange
        else {
          let x = minutes;
          let y = 1080 - x;
          let z = y / 360;
          r = Math.ceil(225 + z * -225)
          g = Math.ceil(100 + z * 140)
          b = Math.ceil(15 + z * 240)
        }
        break;
      case 'bot':
        // from 18 to 24: yellow -> dark blue
        if (minutes >= 1080 && minutes <= 1440) {
          let x = minutes - 1080;
          let y = 360 - x;
          let z = y / 360;
          r = Math.ceil(15 + z * 210)
          g = Math.ceil(50 + z * 140)
          b = Math.ceil(95 + z * -85)
        }
        // from 0 to 12: dark blue -> white 
        else if (minutes >= 0 && minutes <= 720) {
          let z = minutes / 720;
          r = Math.ceil(15 + z * 240)
          g = Math.ceil(50 + z * 205)
          b = Math.ceil(95 + z * 160)
        }
        // from 12 to 18 white -> yellow
        else {
          let x = minutes;
          let y = 1080 - x;
          let z = y / 360;
          r = Math.ceil(255 + z * -25)
          g = Math.ceil(255 + z * -155)
          b = Math.ceil(255 + z * -140)
        }
        break;
    }

    const data = 'rgb(' + r.toString() + ',' + g.toString() + ',' + b.toString() + ')';
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).end('Server error');
  }
};