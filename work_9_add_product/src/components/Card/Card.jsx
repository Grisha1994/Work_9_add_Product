import React from 'react'
import s from '../Card/styleCard.module.css'

export default function Card({id, name, price, deleteCard}) {


  return (
    <div className={s.card} >
        <p>{name}</p>
        <p>{price}</p>
        <button className={s.delete_btn} onClick={() => deleteCard(id)}>X</button>
    </div>
  )
}
