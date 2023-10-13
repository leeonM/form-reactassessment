import styles from './App.module.css';
import Form from './components/Form';

function App() {
  return (
    <div className={styles.app}>
    <div className={styles.container}>
    <div className={styles.title}>
    <h1>Submit Your Details</h1>
    </div>
      <Form />
    </div>
    </div>
  );
}

export default App;
