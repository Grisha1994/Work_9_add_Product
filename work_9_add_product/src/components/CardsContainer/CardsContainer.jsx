import React from 'react'
import Card from '../Card/Card'
import s from '../CardsContainer/styleCardsContainer.module.css'


export default function CardsContainer({cards, deleteCard, plus, minus}) {
  return (
    <div className={s.container}>
        {
            cards.map(el => <Card key={el.id} {...el} {...{deleteCard, plus, minus}}/>)
        }
    </div>
  )
}
