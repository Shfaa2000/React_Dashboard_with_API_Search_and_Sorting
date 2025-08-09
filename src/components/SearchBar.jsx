import React from 'react'

export const SearchBar = ({search, setSearch}) => {
  return (
     <input
          placeholder="Search by Title or Category"
          className="bg-white w-2xs p-1.5 rounded-4xl"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
  )
}
