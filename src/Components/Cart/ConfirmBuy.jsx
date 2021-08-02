import React from 'react'
import { useForm } from "react-hook-form";
import { dataBase } from '../../Firebase/firebase'
import firebase from "firebase/app";
import 'firebase/firestore'
import { CartContext } from '../../Context/CartContext'
import { useContext } from 'react';
import './confirmBuy.scss'

export const ConfirmBuy = ({setCartSwitcher, total, setOutOfStockArr, setOrderId}) => {
    
    const {register, handleSubmit,} = useForm(0)
    const {addItems} = useContext(CartContext)

    const itemsToUpdate = dataBase.collection("items")
    .where(firebase.firestore.FieldPath.documentId(), 'in', addItems.map(i => i.id));

    const createOrder = (buyer) => {
        const newOrder = {
            buyer: buyer,
            items: addItems,
            total: total,
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
            setCartSwitcher(1)
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
            setCartSwitcher(2)
        }
    })
  }
    

    return (
        <form onSubmit= {handleSubmit(addOrderUpdateItems)} className="form-container border rounded">
            <div className="mb-3 mx-2 mt-1">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" placeholder="Your Name" {...register("name", { required: true, pattern: /^([a-zA-Z]|\s)*$/i })}/>
            </div>
            <div className="mb-3 mx-2 mt-1">
            <label for="surname" class="form-label">Surname</label>
            <input type="text" class="form-control" placeholder="Your Surname" {...register("surname", { required: true, pattern: /^([a-zA-Z]|\s)*$/i })}/>
            </div>
            <div className="mb-3 mx-2 mt-1">
            <label for="email" class="form-label">Email</label>
            <input type="text" class="form-control" placeholder="example@gmail.com" {...register("email", { required: true , pattern: /[^@\s]+@[^@\s]+\.[^@\s]+/ })}/>
            </div>
            <div className="mb-3 mx-2 mt-1">
            <label for="phone" class="form-label">Phone</label>
            <input type="text" class="form-control" placeholder="3429-8923" {...register("phone", { required: true })}/>
            </div>
            <input type="submit" className="btn btn-outline-light mb-1 mx-2 mt-1"/>     
        </form>
    )
}

export default ConfirmBuy
