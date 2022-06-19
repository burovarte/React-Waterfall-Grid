import {SetStateAction, useEffect} from 'react'

function getRandomColor() {
  const allColors = [
    'peach',
    'lilac',
    'grey',
    'orange',
    'mint',
    'green',
    'yellow',
    'pink',
  ]
  const randomBetween = (min: number, max: number) =>
    min + Math.floor(Math.random() * (max - min + 1))
  const r = randomBetween(0, allColors.length - 1)
  return allColors[r]
}

export const useHandleScroll = (
  scroll: boolean,
  setLoad: {(value: SetStateAction<boolean>): void; (arg0: boolean): void},
  cards: any[],
  setCards: {
    (
      value: SetStateAction<
        (
          | {
              id: any
              color: string
              order: number
              text: string
              height: any
            }
          | {
              id: any
              color: string
              order: number
              text?: undefined
              height: string
            }
        )[]
      >,
    ): void
    (arg0: any): void
  },
  isLeanghtSearch: number,
  sortColor: string,
  load: boolean,
) => {
  return () => {
    const posit = document.getElementsByClassName('Box')[0]
    const positNow = posit.scrollTop
    const client = posit.clientHeight
    const heightScroll = posit.scrollHeight

    if (
      heightScroll - positNow - client < 20 &&
      isLeanghtSearch === 0 &&
      sortColor === 'all'
    ) {
      const addCards = Array(4)
        .fill(undefined)
        .map((el, i) => ({
          id: (cards.length + i + 1).toString(),
          color: getRandomColor(),
          order: cards.length + i + 1,
          // height: '334px',
          height: `${Math.random() * (434 - 254) + 254}px`,
        }))

      const joined = cards.concat(addCards)

      setLoad(true)

      load
        ? null
        : setTimeout(() => {
            setLoad(false)
            setCards(joined)
          }, 500)
    }
  }
}
