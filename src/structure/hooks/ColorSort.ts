import {SetStateAction} from 'react'
import colors from '../../colorsCards.json'

export const SortOrange = (
  setSortColor: {
    (value: SetStateAction<string | null | undefined>): void
    (arg0: string | null): void
  },
  setScroll: {(value: SetStateAction<boolean>): void; (arg0: boolean): void},
) => {
  return () => {
    setSortColor(colors.white)
    setScroll(false)
  }
}

export const SortWhite = (
  setSortColor: {
    (value: SetStateAction<string | null | undefined>): void
    (arg0: string | null): void
  },
  setScroll: {(value: SetStateAction<boolean>): void; (arg0: boolean): void},
) => {
  return () => {
    setSortColor('rgb(255,255,255,0.1)')
    setScroll(false)
  }
}

export const SortYellow = (
  setSortColor: {
    (value: SetStateAction<string | null | undefined>): void
    (arg0: string | null): void
  },
  setScroll: {(value: SetStateAction<boolean>): void; (arg0: boolean): void},
) => {
  return () => {
    setSortColor('rgb(255,255,0,0.1)')
    setScroll(false)
  }
}
export const SortGreen = (
  setSortColor: {
    (value: SetStateAction<string | null | undefined>): void
    (arg0: string | null): void
  },
  setScroll: {(value: SetStateAction<boolean>): void; (arg0: boolean): void},
) => {
  return () => {
    setSortColor('rgb(0,128,0,0.1)')
    setScroll(false)
  }
}

export const SortPurple = (
  setSortColor: {
    (value: SetStateAction<string | null | undefined>): void
    (arg0: string | null): void
  },
  setScroll: {(value: SetStateAction<boolean>): void; (arg0: boolean): void},
) => {
  return () => {
    setSortColor('rgb(128,0,128,0.1)')
    setScroll(false)
  }
}

export const SortPink = (
  setSortColor: {
    (value: SetStateAction<string | null | undefined>): void
    (arg0: string | null): void
  },
  setScroll: {(value: SetStateAction<boolean>): void; (arg0: boolean): void},
) => {
  return () => {
    setSortColor('rgb(255,0,0,0.1)')
    setScroll(false)
  }
}

export const SortBrown = (
  setSortColor: {
    (value: SetStateAction<string | null | undefined>): void
    (arg0: string | null): void
  },
  setScroll: {(value: SetStateAction<boolean>): void; (arg0: boolean): void},
) => {
  return () => {
    setSortColor('rgb(165,42,42,0.1)')
    setScroll(false)
  }
}

export const AllSort = (
  setSortColor: {
    (value: SetStateAction<string | null | undefined>): void
    (arg0: string | null): void
  },
  setScroll: {(value: SetStateAction<boolean>): void; (arg0: boolean): void},
) => {
  return () => {
    setSortColor(null)
    setScroll(false)
  }
}
