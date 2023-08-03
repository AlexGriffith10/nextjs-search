'use client'

import { ISearchData } from '@/app/lib/search/types'
import Link from 'next/link'
//import { useDummyApiCall } from '@/app/hooks/useDummyApiCall'

export type SearchResultProps = ISearchData &
  React.ComponentPropsWithoutRef<'div'>

const SearchResult: React.FC<SearchResultProps> = ({
  url,
  title,
  text,
  className,
  ...divProps
}) => {
  // const results = async () => useDummyApiCall()
  return (
    <div
      {...divProps}
      className={`flex flex-col w-5/6 max-w-screen-md space-y-1 ${className}`}
    >
      <Link href={url}>
        <p className="cursor-pointer hover:underline">{url}</p>
      </Link>
      <p className="text-blue-600 text-xl">{title}</p>
      <p>{text}</p>
      <button onClick={async () => console.log('placeholder')}>Test</button>
    </div>
  )
}

export default SearchResult
