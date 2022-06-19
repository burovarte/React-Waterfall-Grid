import React, {FC, useCallback} from 'react'

type ColorPickerProps = {
  color: string
  setSortColor: (color: string) => void
  active: boolean
  setScroll: React.Dispatch<React.SetStateAction<boolean>>
  myRef: any
}
export const ColorPicker: FC<ColorPickerProps> = ({
  color,
  setSortColor,
  active,
  setScroll,
  myRef,
}) => {
  const activeClass = active ? 'active-picker' : ''
  const scrollTo = () => myRef.current.scrollIntoView()

  const changeColor = () => setSortColor(color)
  const twoFunction = useCallback(() => {
    scrollTo()
    changeColor()
  }, [])
  return (
    <button
      type="button"
      className={`Button  ${color}-picker ${activeClass}`}
      onClick={twoFunction}
    />
  )
}
