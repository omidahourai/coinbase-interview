import App from 'components/App'
import { compose, withProps, lifecycle, withHandlers } from 'recompose'
import { connect } from 'react-redux'
import * as selectors from 'selectors'
import * as actions from 'actions'

export default compose(
  connect(state => ({
    ...state,
  }), dispatch => ({
    request: url => dispatch(actions.makeRequest({url}))
  })),
  lifecycle({
    async componentDidMount() {
      const {props} = this
      props.request('http://api/url')
    }
  }),
  withHandlers({
    handleSelectedOption: props => option => {
      console.log('app got',option)
    }
  }),
  withProps(props => console.log(props)),
)(App)
