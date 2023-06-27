import styles from '@/styles/Style.module.scss';
import { useEffect } from 'react';

interface Props {
    top_img_url: string,
    middle_img_url: string,
    bottom_img_url: string,
    temp: number
}

export default function Parallax_banner(props: Props) {
    useEffect(() => {
        async function parallaxScroll() {
            let top_view = document.getElementById('top');
            let middle = document.getElementById('middle');
            let bottom = document.getElementById('bottom');
            let content = document.getElementById('content');
            let temperature = document.getElementById('temperature');
        
            window.addEventListener('scroll', function(){
                let value = this.window.scrollY;
                top_view.style.top = value * 1.05 + 'px';
                middle.style.top = value * 0.7 + 'px';
                temperature.style.top = value * 1.5 + 'px';
            });
        }
        parallaxScroll();
      }, []);

    return (
        <>
            <section className={styles.parallax_banner}>
                <img className={styles.top} id="top"
                    src={props.top_img_url}
                    style={{ width: '100%' }}
                    alt="test"
                />

                <img className={styles.middle} id="middle"
                    src={props.middle_img_url}
                    style={{ width: '100%' }}
                    alt="test"
                />

                <span id="temperature">{props.temp}&#176;</span>

                <img className={styles.bottom} id="bottom"
                    src={props.bottom_img_url}
                    style={{ width: '100%' }}
                    alt="test"
                />

            </section>
        </>
    );
}