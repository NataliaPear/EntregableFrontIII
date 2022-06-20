// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

import Cabecera from './components/Cabecera'
import Listado from  './components/Listado'
import { useState } from 'react';
import styles from './index.module.css'

function App() {

  const [countItem, setCountItem] = useState(0);

  function incrementProductCount() { 
    setCountItem(countItem + 1);
  }

  return (
    <div className={styles.App}>
      <Cabecera countItem = {countItem} />
      <Listado incrementProductCount = {()=> incrementProductCount()} />
    </div>
  );
}

export default App;
