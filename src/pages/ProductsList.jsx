import { useContext, useEffect, useState } from "react";
import axios from 'axios'
import ProductCard from "../components/ProductCard";
import LangContext from "../contexts/Language";

const ProductList = () => {
    const { lang, setLang } = useContext(LangContext)


    const [products,setProducts] = useState([]);
    useEffect(()=>{
        axios
            .get(import.meta.env.VITE_API_URL )
            .then(res =>setProducts(res.data.products))
            .catch(err => console.log(err))
    },[])
    return (
        <>
            <div dir={lang === 'ar'?'rtl':'ltr'} className="row g-4">
                {products.map((product) => (
                    <div className="col-12 col-md-6 col-lg-4" key={product.id}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </>
            )
}
            export default ProductList;


            <div className="row">
            <div className="col-md-4">
            </div>
          </div>