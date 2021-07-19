import React from 'react';
import './global.scss';
import styles from './styles.scss';

import { Header } from '../src/components/Header';
import { Body } from '../src/components/Body';

function App() {

    return (
        <>
            <div className={styles.wrapper}>
                <main>
                    <Header />
                </main>
            </div>
            <Body />
        </>
    );
}

export default App;