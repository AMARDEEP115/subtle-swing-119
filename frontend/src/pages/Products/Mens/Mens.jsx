import css from './mens.module.css'
import { Checkbox,Stack,Radio} from '@chakra-ui/react'
import { FaCircle} from 'react-icons/fa'

const Mens = () => {
  return (
    <>
      
<div className={css.main_section}>

<div className={css.filter_section} h={["", "", ""]} w={["", "", ""]} m={["", ]}>

<div className={css.brand_filter} >
<span>BRAND</span>
<Checkbox colorScheme="red"  borderColor="grey" > Roadster</Checkbox >
<Checkbox colorScheme="red"  borderColor="grey" >H&M </Checkbox >
<Checkbox colorScheme="red"  borderColor="grey" > HERE&NOW</Checkbox >
<Checkbox colorScheme="red"  borderColor="grey" >Dressberry</Checkbox >
<Checkbox colorScheme="red"  borderColor="grey" > Clovia</Checkbox >
<Checkbox colorScheme="red"  borderColor="grey" >indus route by Pantaloons</Checkbox >
<Checkbox colorScheme="red"  borderColor="grey" >  Street Armor by Pantal..</Checkbox >

</div>
<div className={css.price_filter}>
    <span>PRICE</span>
<Checkbox colorScheme="red"  borderColor="grey" > Rs. 149 to Rs. 862</Checkbox >
<Checkbox colorScheme="red"  borderColor="grey" >Rs. 862 to Rs. 1575</Checkbox >
<Checkbox colorScheme="red"  borderColor="grey" >Rs. 1575 to Rs. 2288</Checkbox >
<Checkbox colorScheme="red"  borderColor="grey" > Rs. 2288 to Rs. 3001</Checkbox >
</div>
<div className={css.color_filter}>

    <span>COLOR</span>
    <div>   <Checkbox colorScheme="red"   borderColor="grey" > <FaCircle color='black'/></Checkbox ><span>Black</span></div>
 

 <div>    <Checkbox colorScheme="red"  borderColor="grey" > <FaCircle color='blue'/></Checkbox ><span>Blue</span></div>

    <div><Checkbox colorScheme="red"  borderColor="grey" ><FaCircle color='red'/> </Checkbox ><span>Red</span></div>

    <div><Checkbox colorScheme="red"  borderColor="grey" > <FaCircle color='green'/></Checkbox ><span>Green</span></div>
 <div>   <Checkbox colorScheme="red"  borderColor="grey" > <FaCircle color='brown'/></Checkbox ><span>Brown</span></div>

<div>   <Checkbox colorScheme="red"  borderColor="grey" > <FaCircle color='pink'/></Checkbox ><span>Pink</span></div>
</div>
<div className={css.discount_filter}>
 

<Radio colorScheme="red"  borderColor="grey" >10% and above </ Radio>
<Radio colorScheme="red"  borderColor="grey" > 20% and above</ Radio>
<Radio colorScheme="red"  borderColor="grey" > 30% and above</ Radio>
<Radio colorScheme="red"  borderColor="grey" > 40% and above</ Radio>

<Radio colorScheme="red"  borderColor="grey" >50% and above </ Radio>
<Radio colorScheme="red"  borderColor="grey" > 60% and above</ Radio>
<Radio colorScheme="red"  borderColor="grey" >70% and above </ Radio>
</div>


</div>


<div className={css.product_section}></div>
</div>
      
    </>
  )
}

export default Mens