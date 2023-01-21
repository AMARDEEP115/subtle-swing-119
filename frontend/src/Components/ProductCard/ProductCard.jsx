import { Navigate, useNavigate } from 'react-router-dom'
import cards from './productCard.module.css'
const ProductCard = ({image,rating,count,name,brand,price,off_price,direction,id}) => {



// let image="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg"
// let rating=3.9
// let count=29
// let name="Men Blue Slim Fit Solid Casual Shirt"
// let brand="Roadster"

// let price=699

// let offprice=1049
const Navi=(id,direction)=>{
  return <Navigate to={`/singlepage/${direction}/${id}`} />
}
// const =(id)=>{



// }

if(image!="" && price!="" ){


  return (
    <div className={cards.product_main_container}  >

        <div className={cards.product_image_container} >
            <img src={image} alt="" className={cards.product_image}/>

        </div>
        <div>
        <div className={cards.product_rating}><p>{rating }</p><p>{count}</p>  </div>
          
            <h3 className={cards.product_brand}>{brand}</h3>
            <p className={cards.product_name}>{name}</p>
<span> {price} -{off_price}</span>
          
        </div>
      
    </div>
  )
}
}

export default ProductCard
