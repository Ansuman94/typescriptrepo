import { put, takeLatest, all } from "redux-saga/effects";
import actionWatcherUserDetails from "../User/Saga/SagaUserDetails";
//import EmplyeeWatcher from "../Views/DashBoard/Home/HomeBody/Search/sagas/saga";

export default function* rootSaga() {
  yield all([actionWatcherUserDetails()]);
}
