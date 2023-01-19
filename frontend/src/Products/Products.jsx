import './products_module.css'
import { Checkbox,Stack,Radio} from '@chakra-ui/react'
import { FaCircle} from 'react-icons/fa'
const Products = () => {
  return (
    <>
        <div className="products_navbar">navbar</div>
<div className='main_section'>

<div className='filter_section'>

<div className='brand_filter' >
<span>BRAND</span>
<Checkbox colorScheme="red"  borderColor="grey" > Roadster</Checkbox >
<Checkbox colorScheme="red"  borderColor="grey" >H&M </Checkbox >
<Checkbox colorScheme="red"  borderColor="grey" > HERE&NOW</Checkbox >
<Checkbox colorScheme="red"  borderColor="grey" >Dressberry</Checkbox >
<Checkbox colorScheme="red"  borderColor="grey" > Clovia</Checkbox >
<Checkbox colorScheme="red"  borderColor="grey" > Roadster</Checkbox >
<Checkbox colorScheme="red"  borderColor="grey" > Roadster</Checkbox >

</div>
<div className='price_filter'>
    <span>PRICE</span>
<Checkbox colorScheme="red"  borderColor="grey" > Rs. 149 to Rs. 862</Checkbox >
<Checkbox colorScheme="red"  borderColor="grey" >Rs. 862 to Rs. 1575</Checkbox >
<Checkbox colorScheme="red"  borderColor="grey" >Rs. 1575 to Rs. 2288</Checkbox >
<Checkbox colorScheme="red"  borderColor="grey" > Rs. 2288 to Rs. 3001</Checkbox >
</div>
<div className='color_filter'>

    <span>COLOR</span>
    <div>   <Checkbox colorScheme="red"   borderColor="grey" > <FaCircle color='black'/></Checkbox ><span>Black</span></div>
 

 <div>    <Checkbox colorScheme="red"  borderColor="grey" > <FaCircle color='blue'/></Checkbox ><span>Blue</span></div>

    <div><Checkbox colorScheme="red"  borderColor="grey" ><FaCircle color='red'/> </Checkbox ><span>Red</span></div>

    <div><Checkbox colorScheme="red"  borderColor="grey" > <FaCircle color='green'/></Checkbox ><span>Green</span></div>
 <div>   <Checkbox colorScheme="red"  borderColor="grey" > <FaCircle color='brown'/></Checkbox ><span>Brown</span></div>

<div>   <Checkbox colorScheme="red"  borderColor="grey" > <FaCircle color='pink'/></Checkbox ><span>Pink</span></div>
</div>
<div className='discount_filter'>

<Radio colorScheme="red"  borderColor="grey" >10% and above </ Radio>
<Radio colorScheme="red"  borderColor="grey" > 20% and above</ Radio>
<Radio colorScheme="red"  borderColor="grey" > 30% and above</ Radio>
<Radio colorScheme="red"  borderColor="grey" > 40% and above</ Radio>
<Radio colorScheme="red"  borderColor="grey" >50% and above </ Radio>
<Radio colorScheme="red"  borderColor="grey" > 60% and above</ Radio>
<Radio colorScheme="red"  borderColor="grey" >70% and above </ Radio>
</div>


</div>


<div className='product_section'></div>
</div>
      
    </>
  )
}

export default Products
{/* <div><input type="checkbox" /><span>H&M</span></div>
<div> <input type="checkbox" /><span>HRX</span></div>
<div><input type="checkbox" /><span>HERE&NOW</span></div>
<div><input type="checkbox" /><span>Dressberry</span></div>
<div><input type="checkbox" /><span>Clovia</span></div>

<div><input type="checkbox" /><span>indus route by Pantaloons</span></div>
<div><input type="checkbox" /><span>Street Armor by Pantaloons</span></div> */}

