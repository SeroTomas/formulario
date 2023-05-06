'use client'
//style
import styles from '../styles/page.module.scss'
//components
import Indicators from '../components/Indicators/Indicators';
import Card from '@/components/Card/Card';
import Buttons from '@/components/Buttons/Buttons';
// hooks
import { useState } from 'react';

export default function Home() {

  const [info, setInfo] = useState({
    page: 1
  });

  return (
    <main className={styles.main}>
      <div className={styles.indicatorsContainer}>
        <Indicators info={info} setInfo={setInfo}/>
      </div>
      <div className={styles.cardContainer}>
        <Card />
      </div>
      <div className={styles.buttonsContainer}>
        <Buttons info={info} setInfo={setInfo}/>
      </div>
    </main>
  )
}
