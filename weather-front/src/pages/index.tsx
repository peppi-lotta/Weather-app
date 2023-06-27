import styles from '@/styles/Style.module.scss';
import { useState, useEffect } from 'react';
import Menu from '../../public/components/menu';
import Parallax_banner from '../../public/components/parallax_banner';
import { Horizon } from '../../public/types';

export default function Home() {

  const [data, setData] = useState(null);
  const [temp, setTemp] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`api/horizon`);
      const json = await res.json();
      setData(json);
      const postData = {
        method: "Post",//HTTP method
        headers: { "Content-Type": "application/json" },//headers for the request
        body: JSON.stringify({
          city: "honolulu",
        })
      }
      const temp_res = await fetch(`api/weather`, postData);
      const temp_json = await temp_res.json();
      setTemp(temp_json.current.temp_c);
    }
    fetchData();
  }, []);


  let bottom_img_url = "";
  let middle_img_url = "";
  let top_img_url = "";

  if (data !== null) {
    const horizon: Horizon = data.data[0];
    bottom_img_url = "http://localhost:1337" + `${horizon.attributes.Bottom.data.attributes.url}`;
    middle_img_url = "http://localhost:1337" + `${horizon.attributes.Middle.data.attributes.url}`;
    top_img_url = "http://localhost:1337" + `${horizon.attributes.Top.data.attributes.url}`;
  }

  return (
    <>
      <Menu />
      {/* <Main_banner top_img_url={top_img_url} middle_img_url={middle_img_url} bottom_img_url={bottom_img_url} /> */}
      <Parallax_banner top_img_url={top_img_url} middle_img_url={middle_img_url} bottom_img_url={bottom_img_url} temp={temp} />
      <div className={styles.content} id="content"></div>
    </>
  )
}

