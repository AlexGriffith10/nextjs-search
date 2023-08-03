import { useState, useEffect } from 'react'

export const useDummyApiCall = async () => {
  const response: Response = await fetch('https://dummyjson.com/products/1', {
    method: 'GET',
  })

  console.log(response)

  return response.json()
}
