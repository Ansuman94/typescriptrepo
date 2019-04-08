import { combineReducers } from 'redux';

import UserDetails from '../User/Reducer/ReducerUserDetails';
import {userDetailsStateType} from '../User/Reducer/ReducerUserDetails';
// import LeaderShipNav from '../Views/DashBoard/ReducerDashboard/reducer-navigation';
// import Employee from '../Views/DashBoard/Home/HomeBody/Search/EmployeeReducers/employeeReducer'
 
export interface stateType{
    userDetails :userDetailsStateType
}
export type wholeState={} | stateType;
const allReducers = combineReducers({
    userDetails: UserDetails,
    // LeaderShipNavDetails: LeaderShipNav,
    // emp: Employee
});
//export type AppState = ReturnType<typeof allReducers>
export default allReducers;
