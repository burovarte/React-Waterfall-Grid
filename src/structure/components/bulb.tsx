import React, {FC, useCallback} from 'react'
import bulb from '../bulb.svg'

type BulbProps = {
  content: any
}

export const Bulb: FC<BulbProps> = ({content}) => {
  return content.length === 0 ? (
    <div className="BoxOfBulb">
      <img className="Bulb" alt="" src={bulb} />
      <h1 className="Nothing">Nothing was found</h1>
    </div>
  ) : null
}
