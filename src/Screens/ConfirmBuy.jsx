import React from 'react'
import { useForm } from "react-hook-form";
import { dataBase, itemsCollection } from '../Firebase/firebase'
import firebase from "firebase/app";
import 'firebase/firestore'
import { CartContext } from '../Context/CartContext'
import { useState, useEffect, useContext } from 'react';

export const ConfirmBuy = () => {
    
    const {register, handleSubmit, errors} = useForm(0)
    const [addItems] = useContext(CartContext)
    const [ buyer, setBuyer ] = useState({})
    const [orderNumber, setOrderNumber] = useState("");
    const [orderId, setOrderId] = useState();
    const [outOfStockArr, setOutOfStockArr] = useState([]);
    const [ switcher, setSwitcher ] = useState([false]);

    const itemsToUpdate = dataBase.collection("items")
    .where(firebase.firestore.FieldPath.documentId(), 'in', addItems.map(i => i.id));


    const createOrder = (buyer) => {
        const newOrder = {
            buyer: buyer,
            items: addItems,
            date: new Date(),
        }
        return newOrder;
    }
  
  
    const addNewOrder = (buyer) => {
        const newOrder = createOrder(buyer);
        const orders = dataBase.collection("orders");
        try {
            orders.add(newOrder).then((doc) => {
            setOrderId(doc.id);
            setSwitcher(false)
        })
        } catch(error) {
        console.log("Firebase add doc error:", error);
        }
    }

  const addOrderUpdateItems = (buyer) => {
    
    itemsToUpdate.get().then((querySnapshot) => {
      const batch = dataBase.batch();
      const outOfStock = [];
        querySnapshot.docs.forEach((docSnapshot, idx) => {
            if(docSnapshot.data().stock >= addItems[idx].stock){
                batch.update(docSnapshot.ref, {'stock': docSnapshot.data().stock - addItems[idx].stock});
            } else {
                outOfStock.push({ ...docSnapshot.data(), id: docSnapshot.id });
            }
        })

        if(outOfStock.length === 0){
            batch.commit().then(() => {
                addNewOrder(buyer);         
            });
        } else {
            setOutOfStockArr(outOfStock);
        }
    })
  }
    

    return (
        <form onSubmit= {handleSubmit(addOrderUpdateItems)} >
            <h1> Name </h1>
            <input {...register("name", { required: true, pattern: /^([a-zA-Z]|\s)*$/i })}/>
            <h1> Surname</h1>
            <input {...register("surname", { required: true, pattern: /^([a-zA-Z]|\s)*$/i })}/>
            <h1> Email </h1>
            <input {...register("email", { required: true})}/>
            <h1> Gender</h1>
            <select {...register("gender")}>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
            </select>
            {switcher?
            <input type="submit"/>
            :
            <>
                <h4>Thanks for buying!</h4>
                <h6>Your purchase id is {orderId} </h6>
            </>}
        </form>
    )
}

export default ConfirmBuy
