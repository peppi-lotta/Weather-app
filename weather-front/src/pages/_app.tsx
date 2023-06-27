import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {

  function getColor(type: string) {
    var today = new Date();
    //const minutes = today.getHours() * 60 + today.getMinutes();
    const minutes = 1000;
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

    return 'rgb(' + r.toString() + ',' + g.toString() + ',' + b.toString() + ')';
  }

  const [color_1, setColor1] = useState(getColor('top'));
  const [color_2, setColor2] = useState(getColor('bot'));

  useEffect(() => {
    async function resetColors() {
      setColor1(getColor('top'));
      setColor2(getColor('bot'));
      document.body.style.background = "linear-gradient(" + color_1 + ", " + color_2 + ")";
    }
    resetColors();
  }, []);

  return (
    <Component {...pageProps} />
  );
}
