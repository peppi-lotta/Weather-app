import styles from '@/styles/Style.module.scss';

export default function Menu() {

    return (
        <>
            <div className={styles.menu}>
                <a href="#" className={styles.logo}>Weather app</a>
                <ul>
                    <li><a className={styles.active} href='#'>Etusivu</a></li>
                    <li><a href='#'>Ennuste</a></li>
                    <li><a href='#'>Vertailu</a></li>
                </ul>
            </div>
        </>
    );
}