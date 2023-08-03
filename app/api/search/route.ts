import { NextResponse, NextRequest } from 'next/server'
import dummyDB from '../../lib/search/dummyDB.json'
import { ISearchData } from '@/app/lib/search/types'
import { NextApiRequest, NextApiResponse } from 'next'

interface ApiSearchRequest extends NextApiRequest {
  body: { searchTerm?: string }
}

export type ApiSearchResponseData = ISearchData[]
// example: remove example from function name to test and comment out all other POST functions
// export async function POSTExample(request: ApiSearchRequest) {
//   const searchTerm = request.body?.searchTerm
//   const response = await fetch('https://dummyjson.com/products/add', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(request.body),
//   })

//   if (request.method === 'POST' && searchTerm && searchTerm.length > 0) {
//     const searchPattern = new RegExp(searchTerm, 'i')
//     const filteredResults = dummyDB.filter((result) => {
//       return searchPattern.test(result.title) || searchPattern.test(result.text)
//     })
//   }

//   console.log(await response.json())

//   const data = dummyDB

//   return NextResponse.json(data)
// }

export async function POST(request: NextRequest, response: NextResponse) {
  const json = await request.json()
  const searchTerm = json?.searchTerm

  if (request.method === 'POST' && searchTerm && searchTerm.length > 0) {
    const searchPattern = new RegExp(searchTerm, 'i')
    const filteredResults = dummyDB.filter((result) => {
      return searchPattern.test(result.title) || searchPattern.test(result.text)
    })

    return new NextResponse(JSON.stringify(filteredResults), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } else {
    return new NextResponse(JSON.stringify([]), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
