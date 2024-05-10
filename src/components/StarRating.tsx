import { useState } from 'react'
import { FaStar } from 'react-icons/fa'

import { createArray } from '../utils'

type StarProps = {
  selected: boolean
  onSelect: () => void
}

type StarRatingProps = {
  totalStars: number
}

const Star = ({ selected = false, onSelect }: StarProps) => (
  <FaStar color={selected ? 'red' : 'grey'} onClick={onSelect} />
)

export default function StarRating({ totalStars = 5 }: StarRatingProps) {
  const [selectedStars, setSelectedStars] = useState(3)
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star key={i} selected={selectedStars > i} onSelect={() => setSelectedStars(i + 1)} />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  )
}
