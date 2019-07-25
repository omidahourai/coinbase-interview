import React from 'react'
import styled from 'styled-components'

const Handle = styled.div`
  width: 30px;
  flex: 0 0 auto;
  background-color: #CCC;
  &:hover {
    cursor: pointer;
  }
`
const Input = styled.input`
  width: 150px;
  margin: 0;
  padding: 0;
  border: 1px solid #CCC;
  box-sizing: border-box;
`
const Option = styled.li`
  height: 50px;
  text-align: center;
  line-height: 50px;
  border: 1px solid #CCC;
  width: 100%;
  border-top: 0;
  ${({sel, id}) => id === sel && `
    background-color: lightblue;
  `}
  &:hover {
    cursor: pointer;
    background-color: blue;
    color: #FFF;
  }
`
const MenuOptions = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`
const SelectWrapper = styled.div`
  width: 180px;
  display: flex;
  ${Input}, ${Handle} {
    height: 50px;
  }
`
const MenuWrapper = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
`

export default props => (
  <MenuWrapper>
    <SelectWrapper>
      <Input
        value={props.inputValue}
        onChange={props.handleInputChange}
        onFocus={props.handleOpen}
      />
      <Handle onClick={props.handleOpenClose} />
    </SelectWrapper>
    <MenuOptions>
    {props.isOpen && props.visibleMenuOptions.map(option => (
      <Option sel={props.selectedOption.id} id={option.id} onClick={e => props.handleSelectOption(option)}>{option.text}</Option>
    ))}
    </MenuOptions>
  </MenuWrapper>
)
