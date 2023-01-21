import css from './filter.module.css'
import { Checkbox,Stack,Radio, RadioGroup} from '@chakra-ui/react'
import { FaCircle} from 'react-icons/fa'
import { useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

const Filter = ({one,two,three,four,five,six,seven}) => {

const [searchParams,setSearchParams]=useSearchParams()


const initialcategory=searchParams.getAll("category")
const initialsort=searchParams.getAll("sort")
const [category,setCategory]=useState(initialcategory || [])
const [sort,setSort]=useState(initialsort[0]|| '')



const handleCheckBox=(e)=>{

  const newCategory=[...category]

  if(newCategory.includes(e.target.value)){

    newCategory.splice(newCategory.indexOf(e.target.value))
  }else{

    newCategory.push(e.target.value)
  }
  setCategory(newCategory)
}
useEffect(()=>{

  let params={}

  params.category=category
  sort && (params.sort=sort)

  setSearchParams(params)


},[category,setSearchParams,sort])

const Handlesort=(e)=>{

  setSort(e.target.value)

}

  return (
<div className={css.filter_section} >
<div className={css.price_filter}>
    <span>Sort By Price</span>
    <RadioGroup >
  <Stack spacing={2} direction='column' onChange={Handlesort}>
  <Radio value="asc" defaultChecked={sort==="asc"} colorScheme="red"  borderColor="grey" >Low to High </ Radio>
<Radio value="desc" defaultChecked={sort==="desc"} colorScheme="red" borderColor="grey" > High to Low</ Radio>


  </Stack>
</RadioGroup>
</div>
<div className={css.brand_filter} >
<span>BRAND</span>
<Checkbox value={one}checked={category.includes("Roadster")}  onChange={handleCheckBox} colorScheme="red"  borderColor="grey" >{one}</Checkbox >
<Checkbox value={two} checked={category.includes("H&M")} colorScheme="red" onChange={handleCheckBox} borderColor="grey" >{two} </Checkbox >
<Checkbox  value={three} checked={category.includes("HRX by Hrithik Roshan")} onChange={handleCheckBox} colorScheme="red"  borderColor="grey" >{three}</Checkbox >
<Checkbox value={four} colorScheme="red" checked={category.includes("HERE&NOW")}  onChange={handleCheckBox}  borderColor="grey" > {four}</Checkbox >
<Checkbox value={five} colorScheme="red" checked={category.includes("Huetrap")}  onChange={handleCheckBox} borderColor="grey" >{five}</Checkbox >
<Checkbox value={six} colorScheme="red"  checked={category.includes("WROGN")} onChange={handleCheckBox} borderColor="grey" > {six}</Checkbox >

<Checkbox value={seven} colorScheme="red" checked={category.includes("Urbano Fashion")} onChange={handleCheckBox} borderColor="grey" > {seven}</Checkbox >

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


<RadioGroup defaultValue='2'>
  <Stack spacing={2} direction='column'>
  <Radio colorScheme="red" value="10" borderColor="grey" >10% and above </ Radio>
<Radio colorScheme="red" value="20" borderColor="grey" > 20% and above</ Radio>
<Radio colorScheme="red" value="30" borderColor="grey" > 30% and above</ Radio>
<Radio colorScheme="red" value="40" borderColor="grey" > 40% and above</ Radio>

<Radio colorScheme="red" value="50"  borderColor="grey" >50% and above </ Radio>
<Radio colorScheme="red" value="60"  borderColor="grey" > 60% and above</ Radio>
<Radio colorScheme="red" value="70" borderColor="grey" >70% and above </ Radio>

  </Stack>
</RadioGroup>

</div>


</div>
  )
}

export default Filter
