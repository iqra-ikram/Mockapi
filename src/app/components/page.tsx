"use client"
import React, { useEffect, useState } from 'react'

interface User {
    name: string,
    price: number,
    image: string,
    id: string
}


const Fruits = () => {

    const [fruits, setFruits] =useState<User[]>([]);

useEffect(()=>{
 const fetchData = async () => {
    try {
        const response = await fetch('https://677ff9bd0476123f76a9020e.mockapi.io/test')
        const data = await response.json()
        setFruits(data)

    }
    catch (error) {
        console.log("products data not fetch", error)
    }
 }
 fetchData()
}, [])



  return (
    <div className=' px-6 py-12 mt-16'>
        <h1 className='text-3xl font-bold mb-8'></h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {fruits.map((fruits)=> (
            <div className='bg-white border rounded-lg overflow-hidden shadow-md p-4 hover:shadow-lg transition-shadow duration-150' 
            key={fruits.id}>
                <img className='w-94' src={fruits.image} alt={fruits.name} />
                <h3 className='font-semibold'>{fruits.name}</h3>
                <p className='text-red-500'>${fruits.price}</p>
            </div>
        )                             )}
      </div>
    </div>
  )
}

export default Fruits
