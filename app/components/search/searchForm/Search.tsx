'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export interface SearchProps {
  buttonText?: string
}

const Search: React.FC<SearchProps> = ({ buttonText }) => {
  const router = useRouter()
  const [searchTerms, setSearchTerms] = useState<string>('')
  return (
    <form
      className="flex flex-col items-center gap-y-3"
      onSubmit={(e) => {
        e.preventDefault()
        router.push(`/results?search=${searchTerms}`)
      }}
    >
      <input
        type="text"
        className="rounded-full border-2 w-5/6 sm:w-96 h-12 px-3"
        value={searchTerms}
        onChange={(e) => setSearchTerms(e.target.value)}
      />
      <div className="space-x-3">
        <button className="btn-primary" type="submit">
          Search
        </button>
        <button className="btn-primary" type="submit">
          {buttonText}
        </button>
      </div>
    </form>
  )
}

export default Search
