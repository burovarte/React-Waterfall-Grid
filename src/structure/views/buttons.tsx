import React, {FC} from 'react'
import png from '../allcolors.svg'
import {ColorPicker} from '../components/picker'

const colors = [
  'grey',
  'peach',
  'orange',
  'yellow',
  'green',
  'mint',
  'lilac',
  'pink',
  'all',
]

type ButtonsPartProps = {
  setSortColor: (color: string) => void
  sortColor: string
  setScroll: React.Dispatch<React.SetStateAction<boolean>>
  myRef: any
}

export const ButtonsPart: FC<ButtonsPartProps> = ({
  setSortColor,
  sortColor,
  setScroll,
  myRef,
}) => {
  return (
    <div className="Buttons">
      {colors.map((color) => (
        <ColorPicker
          color={color}
          setScroll={setScroll}
          setSortColor={setSortColor}
          active={sortColor === color}
          myRef={myRef}
        />
      ))}
    </div>
  )
}
