import React from 'react'
import { IMG_CDN_URL } from '../config'


function FoodItemCard({name, description,imageId,price, defaultPrice}) {
  return (
    <div className='w-56 p-2 m-2 shadow-lg bg-orange-100'>
        <img src={IMG_CDN_URL+ imageId}/>
        <h1 className='font-bold text-xl'>{name}</h1>
        <h3> {description}</h3>
        <h3> Rs.{(price || defaultPrice)/100} </h3>
    </div>
  )
}

export default FoodItemCard