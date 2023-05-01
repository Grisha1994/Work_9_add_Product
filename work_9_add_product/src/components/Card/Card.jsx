import React from 'react'
import s from '../Card/styleCard.module.css'

export default function Card({id, name, price, deleteCard, count, plus, minus}) {


  return (
    <div className={s.card} >
        <p>{name}</p>
        <div className={s.price}>

          <button onClick={() => minus(id)}>-</button>
          <p>{count}</p>
          <button onClick={() => plus(id)}>+</button>
          
          <p>{price}</p>
          <button className={s.delete_btn} onClick={() => deleteCard(id)}>X</button>
        </div>
    </div>
  )
}
