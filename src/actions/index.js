import { createAction } from 'redux-actions'

export const makeRequest = createAction('REQUEST')
export const requestStart = createAction('REQUEST_START')
export const requestFailure = createAction('REQUEST_FAILURE')
export const requestSuccess = createAction('REQUEST_SUCCESS')
