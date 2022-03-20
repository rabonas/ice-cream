import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function AddIceCream() {

    const history = useHistory();

    const[title, setTitle] = useState('');
    const[text, setText] = useState('');
    const[price, setPrice] = useState('')

    const hendleButton = (event) => {
        event.preventDefault();
        const newObj = {
            iceCream: {
                name: title
            },
            description: text,
            price
        }

        fetch('http://localhost:8000/menuData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newObj)
        }).then( response => {
            console.log('Post qo`shildi', response)
            history.push('/')
        })

        setTitle('');
        setText('');
        setPrice('');
    } 
    return (
        <div>
            <form className="form" onSubmit={hendleButton}>

                <h2>Add Ice-Cream</h2>

                <label>Write title</label>
                <input type="text" id="title" value={title} onChange={(e) => {setTitle(e.target.value)}}/>

                <label>Write text</label>
                <input type="text" id="text" value={text} onChange={(e) => {setText(e.target.value)}}/>

                <label>Price</label>
                <input type="text" id="price" value={price} onChange={(e) => {setPrice(e.target.value)}}/>

                <button type="submit" className="link">Add post</button>
            </form>
        </div>
    )
}