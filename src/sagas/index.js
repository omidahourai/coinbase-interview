import axios from 'axios'
import { spawn, all, call, put, takeLatest, select, takeEvery } from 'redux-saga/effects'
import * as selectors from 'selectors'
import * as actions from 'actions'

const fetchData = async ({
  url='//localhost:3000',
  method='GET',
}={}) => axios({url, method})

function* getApiData(action) {
  try {
    yield put(actions.requestStart())
    const { data } = yield call(fetchData, {...action.payload})
    yield put(actions.requestSuccess(data))
  } catch (error) {
    yield put(actions.requestFailure(error))
  }
}

export default function* saga(action) {
  yield takeEvery('REQUEST', getApiData)
  // yield all([
  //   getApiData(),
  // ])
}
