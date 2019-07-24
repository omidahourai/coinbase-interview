import { handleActions } from 'redux-actions'

const data = handleActions({
  REQUEST_START: () => [],
  REQUEST_SUCCESS: (state, { payload }) => payload,
}, [])

const loading = handleActions({
  REQUEST_START: () => true,
  REQUEST_SUCCESS: () => false,
  REQUEST_FAILURE: () => false,
}, false)

export default {
  data,
  loading,
}
