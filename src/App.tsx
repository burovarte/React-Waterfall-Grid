import React, {
  DragEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
  useRef,
  useContext,
} from 'react'
import './App.css'
import Masonry2 from 'react-masonry-css'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import useMediaQuery from './structure/hooks/useMediaQuery'
import data1 from './data.json'
import datafordnd from './datadndfor.json'
import {useHandleScroll} from './structure/hooks/useHandleScroll'
import {ButtonsPart} from './structure/views/buttons'
import searchLine from './structure/views/searchLine'
import {amountColumns} from './structure/hooks/amountColumns'
import vector from './structure/Vector.svg'
import {LoadAnimation} from './structure/views/loadAnim'
import {Bulb} from './structure/components/bulb'

// const data = data1.map((item) => ({
//   ...item,
//   height: '150px',
// }))
const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
  padding: 10,
  margin: `0 50px 15px 50px`,
  background: isDragging ? '#4a2975' : 'white',
  color: isDragging ? 'white' : 'black',
  border: `1px solid black`,
  fontSize: `20px`,
  borderRadius: `5px`,

  ...draggableStyle,
})

function App() {
  type cards = {
    id?: number
    color?: string
    order?: number
    text?: undefined
    height: string
  }

  const myRef = useRef(null)
  const sm = useMediaQuery('(max-width: 679px)')
  const md = useMediaQuery('(max-width: 939px)')
  const lg = useMediaQuery('(max-width: 1239px)')
  const [cards, setCards] = useState(data1)
  const [scroll, setScroll] = useState(true)
  const [load, setLoad] = useState(false)
  const [isLeanghtSearch, setisLeanghtSearch] = useState(0)
  const [currentCard, setCurrentCard] = useState<
    null | undefined | boolean | number | string | any
  >()
  const [sortColor, setSortColor] = useState('all')
  const [searchFilter, setSearchFilter] = useState<null | undefined | string>(
    null,
  )
  const [gg, setGG] = useState(true)
  const columnsAmount = amountColumns(sm, md, lg)
  const handle = useHandleScroll(
    scroll,
    setLoad,
    cards,
    setCards,
    isLeanghtSearch,
    sortColor,
    load,
  )

  const colorCards = useMemo(
    () =>
      sortColor !== 'all'
        ? cards.filter((f: any) => f.color === sortColor)
        : cards,
    [sortColor, cards],
  )

  const searchCards = useMemo(
    () =>
      searchFilter
        ? colorCards.filter((card: any) =>
            card.id.toString().includes(searchFilter),
          )
        : colorCards,
    [colorCards, searchFilter],
  )

  const preparedCards = useMemo(
    () =>
      searchCards.sort((a: {order: number}, b: {order: number}) =>
        a.order > b.order ? 1 : -1,
      ),
    [searchCards],
  )

  const numberSortUp = useCallback(
    () =>
      setCards(
        cards
          .sort((a: {order: number}, b: {order: number}) =>
            gg === false ? a.order - b.order : b.order - a.order,
          )
          .map((card, i) => ({...card, id: i + 1})),
      ),
    [cards],
  )

  const numberSortDown = useCallback(
    () =>
      setCards(
        cards
          .sort((a: {order: number}, b: {order: number}) => a.order - b.order)
          .map((card, i) => ({...card, id: i + 1})),
      ),
    [cards],
  )

  const her = () => {
    if (gg === true) {
      setGG(false)
    } else {
      setGG(true)
    }
    numberSortUp()
  }

  // @ts-ignore
  const scrollTo = () => myRef.current.scrollIntoView()

  const twoFunction = useCallback(() => {
    scrollTo()
    her()
  }, [scrollTo, her])

  const content = preparedCards.map((card) => (
    <div
      key={card.id}
      className={`Card ${card.color}-card`}
      style={{
        fontFamily: 'Montserrat',
        fontWeight: '400',
        height: card.height,
        width: '198px',
      }}>
      <h1>Card {card.id}</h1>
    </div>
  ))

  return (
    <div className="Main">
      <div className="rtdiv">
        <div className="first">
          <h3 className="title">React Waterfall Grid</h3>
          <div className="colorandsearch">
            <ButtonsPart
              setSortColor={setSortColor}
              sortColor={sortColor}
              setScroll={setScroll}
              myRef={myRef}
            />
            <div className="md">
              <button
                className="sortNumbers"
                type="button"
                onClick={twoFunction}>
                {gg ? (
                  <img
                    src={vector}
                    alt={' '}
                    style={{
                      transform: 'rotateX(3.142rad)',
                      width: '25.2px',
                      height: '16.8px',
                    }}
                  />
                ) : (
                  <img
                    src={vector}
                    alt={' '}
                    style={{
                      width: '25.2px',
                      height: '16.8px',
                    }}
                  />
                )}
              </button>
              {searchLine(
                setSearchFilter,
                setScroll,
                sortColor,
                setisLeanghtSearch,
                myRef,
              )}
            </div>
          </div>
        </div>
        <div className="Box" onScroll={handle}>
          <Bulb content={content} />
          <div ref={myRef}>
            <Masonry2
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
              breakpointCols={columnsAmount}>
              {content}
              <LoadAnimation position={4} cards={cards} load={load} />
              <LoadAnimation position={3} cards={cards} load={load} />
              <LoadAnimation position={2} cards={cards} load={load} />
              <LoadAnimation position={1} cards={cards} load={load} />
            </Masonry2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
