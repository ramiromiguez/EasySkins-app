import React from 'react'
import { useState } from 'react'
import { Item } from './Item'
import './itemList.scss'

const skinsList = [

    {
        id:0,
        gunName:"M9 Bayonet",
        state:"MW",
        float:"0.07584947",
        price:"$2000",
        photo:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KmsjxPr7Dl2dV18hwmOvN8IXvjVCLpxo7Oy3tIdLEdgdqNAmBqFa_kO3mh8K9uJqbyiMy7HIn5H3VzUPl1B0dO7M7hOveFwvYitsMFw/360fx360f",
    },
    {
        id:1,
        gunName:"M4A1-S",
        state:"FN",
        float:"0.00433277",
        price:"$2020",
        photo:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uOxh7-Gw_alDLbUlWNQ18x_jvzS4Z78jUeLpxo7Oy3tJo-ScVVoZAuB8wW_xOft0ZC6uZ-bn3Nn63Mq7C2Oyx2yiBsYarNv1OveFwt9ELX6XQ/360fx360f",
    },
    {
        id:2,
        gunName:"Specialist Gloves",
        state:"FN",
        float:"0.006801648",
        price:"$4300",
        photo:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DAQ1h3LAVbv6mxFABs3OXNYgJR_Nm1nYGHnuTgDL3Tn1Rd4cJ5ntbN9J7yjRrlrkBtZ2zwJYaVc1M4N1_YqFftwry5hJC77ZvOwSBn63F0tneJm0awn1gSOeTQ2mnL/360fx360f",
    },
    {
        id:3,
        gunName:"AK-47",
        state:"FT",
        float:"0.20222768",
        price:"$5800",
        photo:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5lpKKqPv9NLPF2G1UsZFw373Cp96kigbgrUBuY22nLIWUcgRvN17Y8lnrlbrm157quJ3XiSw0p7BLliM/360fx360f",
    },
    {
        id:4,
        gunName:"AWP",
        state:"FN",
        float:"0.03585305",
        price:"$7800",
        photo:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAZh7PLfYQJE7dizq4yCkP_gDLfQhGxUppF0076Z8N2miwfn8kU_YjvycYWXJw83YgmGqFW4w7281MW5ucnOwXF9-n51Xlh34oU/360fx360f",
    },
    {
        id:5,
        gunName:"USP-S",
        state:"FN",
        float:"0.00116184",
        price:"$1800",
        photo:"https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uOxh7-Gw_alDLbUlWNQ18x_jvzS4Z78jUeLpxo7Oy3tJo-ScVVoZAuB8wW_xOft0ZC6uZ-bn3Nn63Mq7C2Oyx2yiBsYarNv1OveFwt9ELX6XQ/360fx360f",
    },
]              

export const ItemList = () => {
    
    const myPromise = new Promise ((resolve,reject) =>{
        setTimeout(() => resolve(
            skinsList
        ),2000)
    });        

    const [skinsItem, setSkinsItem] = useState([]);


    myPromise
        .then(result =>  setSkinsItem(result))

    
    return(
        <div className="container">
            <div className="row">
                {skinsItem.map((element) => 
                <Item key= {element.id}
                    id={element.id}
                    skinName={element.gunName}
                    state={element.state}
                    float={element.float}
                    photo={element.photo}
                    price={element.price}
                />)}
            </div>
        </div>
    ) 
}


export default ItemList
