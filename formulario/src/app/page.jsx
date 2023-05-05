//style
import styles from '../styles/page.module.scss'
//components
import Indicators from '../components/Indicators/Indicators';
import Card from '@/components/Card/Card';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.indicatorsContainer}>
        <Indicators/>
      </div>
      <div>
        <Card/>
      </div>
    </main>
  )
}
