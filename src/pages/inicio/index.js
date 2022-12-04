import React, {useEffect,useState} from "react";
import {getFirestore, getDocs, collection, } from "firebase/firestore";
import './style.css'
import Card from "./component";
import Filter from "../../components/filter";


const Inicio = () => {




    const [loading, setLoading]=useState(false);
    const [product, setProduct]=useState([]);
   
    
    
    useEffect(()=>{

        setLoading(true)
        
        setTimeout(()=>{
            setLoading(false)
        }, 3100)

        const db = getFirestore()
        const getProdutCollection = collection(db, 'ca-bbdd')
        getDocs(getProdutCollection)
        .then((snapshot)=>{
            const allProducts = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
            setProduct(allProducts)
        })
    },[])

    return(
        <>  
                    {loading ? 
                    <div className="box-loaging">
                        <span className="loader"></span>
                    </div>
                      : <>
                      <div className="container-input">
                      <Filter item={product} setItem={setProduct}/>
                      </div>
                      
                      <div id='containerCartInicio'>
                        {
                            product.map((prod)=>(
                                <Card key={prod.id} item={prod}/>
                                ))
                            } 
                        </div>
                        </>  
                        }
        </>
    )
}
export default Inicio