import styles from './styles.module.scss';

export function Body() {

    return (
        <>
            <div className={styles.middle}>
                <img src="/capa-blackfriday.png" alt="blackfriday" width="800" height="500" />
            </div>

            <div className={styles.form}>
                <label>Digite seu e-mail para cadastro: </label>
                <input type="email" />
                <button>Enviar</button>
            </div>
        </>
    );
}