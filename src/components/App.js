import React from 'react'
import Dropdown from 'containers/Dropdown'

export default props => (
  <div className="App">
    <Dropdown onSelectOption={props.handleSelectedOption} />
  </div>
)
