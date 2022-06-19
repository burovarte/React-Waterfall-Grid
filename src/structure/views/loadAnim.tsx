import React, {FC, useCallback} from 'react'

type LoadAnimationProps = {
  position: number
  load: boolean
  cards: any
}

export const LoadAnimation: FC<LoadAnimationProps> = ({
  position,
  load,
  cards,
}) => {
  return load ? (
    <div
      className="shimmer loadingCard"
      style={{height: '344px'}}
      // style={{height: cards[cards.length - position].height}}
    />
  ) : null
}
