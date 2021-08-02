
import React from 'react'
import { useForm } from "react-hook-form";
import { dataBase } from '../Firebase/firebase'
import firebase from "firebase/app";
import 'firebase/firestore'
import { CartContext } from '../Context/CartContext'
import { useState, useContext } from 'react';
import OutOfStock from '../Components/Cart/OutOfStock';

export const ConfirmBuy = ({setSwitcher, total, outOfStockArr, setOutOfStockArr}) => {
    
    const {register, handleSubmit,} = useForm(0)
    const {addItems} = useContext(CartContext)
    const [orderId, setOrderId] = useState();
    

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
            setSwitcher(2)
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
            console.log(OutOfStock)
            setSwitcher(1)
            return outOfStockArr
        }
    })
  }
    

    return (
        <form onSubmit= {handleSubmit(addOrderUpdateItems)} >
            <h1> Name </h1>
            <input {...register("name", { required: true, pattern: /^([a-zA-Z]|\s)*$/i })}/>
            <label for="exampleInputEmail1" class="form-label">Surname</label>
            <input {...register("surname", { required: true, pattern: /^([a-zA-Z]|\s)*$/i })}/>
            <label for="email" class="form-label">Email address</label>
            <input placeholder="example@mail.com" {...register("email", { required: true , pattern: /[^@\s]+@[^@\s]+\.[^@\s]+/ })}/>
            <h1> Phone </h1>
            <input {...register("phone", { required: true })}/>
            <input type="submit"/>     
        </form>
    //     <form onSubmit= {handleSubmit(addOrderUpdateItems)} >
    //         <div class="mb-3">
    //             <label for="exampleInputEmail1" class="form-label">Email address</label>
    //             <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    //             <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    //         </div>
    //         <div class="mb-3">
    //             <label for="exampleInputPassword1" class="form-label">Password</label>
    //             <input type="password" class="form-control" id="exampleInputPassword1"/>
    //         </div>
    //     </form>
    )
}

export default ConfirmBuy
