import React from 'react'

import { UseTodos } from '../UseTodos'

const TodoFilter = ({ onUpdateFilter }) => {
  const onChangeValue = (event) => {
    onUpdateFilter(event.target.value)
  }

  const { FILTER_ALL, FILTER_COMPLETED, FILTER_UNCOMPLETED } = UseTodos()

  return (
    <div className="filter">
      <div onChange={onChangeValue}>
        <input
          type="radio"
          value={FILTER_ALL}
          name="filter"
          defaultChecked={true}
        />{' '}
        All
        <input type="radio" value={FILTER_COMPLETED} name="filter" /> Completed
        <input type="radio" value={FILTER_UNCOMPLETED} name="filter" />{' '}
        Uncompleted
      </div>
    </div>
  )
}

export default TodoFilter
