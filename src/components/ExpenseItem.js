import { useState } from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';


function ExpenseItem(props) {

    //usestate: [varName, functionToSet] = useState(initialVal)
    //setting initial value to props.title: useState(props.title)
    const [itemTitle, setItemTitle] = useState(props.title)

    const clickHandler = () => {
        setItemTitle('updated!')
        console.log(itemTitle)
    }

    return (
    <div className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
            <h2>{itemTitle}</h2>
            <div className="expense-item__price">$ {props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
    </div>
    )
}

export default ExpenseItem;