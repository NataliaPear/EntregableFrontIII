import Item from './Item'
import React, { useState, useEffect } from 'react';
import myData from './data.json';
import styles from '../index.module.css'

// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.

export default function Listado(props) {

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(myData)
  }, []);

  function buyItem(id) {
    const newList = data.map(item => {
      if (item.id === id ) {
        if (item.stock > 0) {
          item.stock--;
          props.incrementProductCount();
        }
      }
      return item;
    }
    );
    setData(newList)
  }

  const itemList = data.map(item => 
    <Item key={item.id} value = {item} 
    onBuy = {() => buyItem(item.id)}/>
  );

  return (
    <div className={styles.container}>
      {itemList}
    </div>
  )
}
