import React from 'react'
import s from '../AddCardForm/styleAddCardForm.module.css'

export default function AddCardForm({addCard}) {

    const onSubmit = (event) =>{
        event.preventDefault();

        const {name, price} = event.target;

        const newProduct = {           
            name: name.value, 
            price: price.value,
            id: Date.now()
        }
        addCard(newProduct);
        event.target.reset();
    }

  return (
    <div className={s.wrapper} >
        <form className={s.product} onSubmit={onSubmit}>
            <input type="title" placeholder='Название' name='name'/>
            <input type="number" placeholder='Цена' name='price'/>
            <button type='submit'>добавить</button>
        </form>
    </div>
  )
}
