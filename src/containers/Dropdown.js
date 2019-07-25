import Dropdown from 'components/Dropdown'
import { compose, withProps, withState, withHandlers, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import * as selectors from 'selectors'
import * as actions from 'actions'

const initialOptions = [{
  id: '1',
  text: 'hello',
},{
  id: '2',
  text: 'goodbye',
},{
  id: '3',
  text: 'perfect',
}]

export default compose(
  connect(state => ({
    ...state,
  }), dispatch => ({
    request: url => dispatch(actions.makeRequest({url}))
  })),
  withState('isOpen', 'setOpen', false),
  withState('menuOptions', 'setMenuOptions', initialOptions),
  withState('visibleMenuOptions', 'setVisibleMenuOptions', initialOptions),
  withState('selectedOption', 'setOption', initialOptions[0]),
  withState('inputValue', 'setInputValue', initialOptions[0].text),
  withHandlers({
    handlePageClick: props => e => {
      console.dir(e)
      // console.dir(e.currentTarget)
      // props.setOpen(false)
    },
    handleInputChange: props => e => {
      props.setInputValue(e.target.value)
      const filterd = props.menuOptions.filter(({text}) => text.includes(e.target.value))
      props.setVisibleMenuOptions(filterd)
    },
    handleOpen: props => e => {
      props.setInputValue('')
      props.setOpen(true)
    },
    handleOpenClose: props => e => props.setOpen(!props.isOpen),
    handleSelectOption: props => option => {
      props.setOption(option)
      props.setInputValue(option.text)
      props.setOpen(false)
      if (props.onSelectOption) {
        props.onSelectOption(option)
      }
    },
  }),
  lifecycle({
    componentDidMount() {
      document.addEventListener('click', this.props.handlePageClick)
    },
    componentWillUnmount() {
      document.removeEventListener('click', this.props.handlePageClick)
    }
  }),
  withProps(props => console.log(props)),
)(Dropdown)
