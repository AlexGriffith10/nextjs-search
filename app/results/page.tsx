'use client'
// import { GetServerSideProps } from 'next'
import { useSearchParams } from 'next/navigation'

// import { mockSearchResultProps } from '../components/search/searchResult/SearchResult.mocks'
// import { NextPageWithLayout } from '../pages'
import SearchResult from '../components/search/searchResult/SearchResult'
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout'
import { ISearchData } from '@/app/lib/search/types'
import { ApiSearchResponseData } from '../api/search/route'
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from 'react'

export interface SearchResultsType {
  searchResults: ISearchData[]
}

// export const getServerSideProps: GetServerSideProps<
//   SearchResultsType
// > = async ({ query }) => {
//   let searchResults: ApiSearchResponseData = []
//   const searchTerm = query.search

//   if (searchTerm && searchTerm.length > 0) {
//     const searchResponse = await fetch('http://localhost:3000/api/search', {
//       method: 'POST',
//       body: JSON.stringify({ searchTerm }),
//       headers: { 'Content-Type': 'application/json' },
//     })

//     searchResults = await searchResponse.json()
//   }

//   return {
//     props: {
//       searchResults,
//     },
//   }
// }

export const revalidate = 0

async function getSearchResults(
  searchTerm: string
): Promise<SearchResultsType> {
  let searchResults: ApiSearchResponseData = []
  // const searchTerm = useSearchParams().get('search')
  if (searchTerm) {
    const searchResponse = await fetch('http://localhost:3000/api/search', {
      method: 'POST',
      body: JSON.stringify({ searchTerm }),
      headers: { 'Content-Type': 'application/json' },
    })

    searchResults = await searchResponse.json()
  }

  return { searchResults }
}
// const testArray: SearchResultProps[] = []

// testArray[0] = mockSearchResultProps.base
// testArray[1] = mockSearchResultProps.altText

// const Results: NextPageWithLayout<SearchResultsType> = async () => {
//   const searchResults = await getSearchResults({})
//   const hasResults = searchResults.length > 0
//   return (
//     <section className="flex flex-col items-center gap-y-5">
//       {hasResults ? (
//         <div className="flex flex-col space-y-8 w-2/4">
//           {searchResults.map((result, idx) => {
//             return <SearchResult key={idx} {...result} />
//           })}
//         </div>
//       ) : (
//         <p>No results found.</p>
//       )}
//     </section>
//   )
// }

async function Results() {
  const searchTerm = (await useSearchParams().get('search')) || ''
  const searchResults = await getSearchResults(searchTerm)
  const hasResults = searchResults.searchResults.length > 0
  return (
    <section className="flex flex-col items-center gap-y-5">
      {hasResults ? (
        <div className="flex flex-col space-y-8 w-2/4">
          {searchResults.searchResults.map((result, idx) => {
            return <SearchResult key={idx} {...result} />
          })}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </section>
  )
}

export default Results

Results.getLayout = (
  page:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined
) => {
  return <PrimaryLayout justify="items-start">{page}</PrimaryLayout>
}
