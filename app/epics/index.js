import { ofType } from 'redux-observable'
import { Observable } from 'rxjs/Observable';
import * as actions from '../actions/index'
import { mapTo,map ,mergeMap, mergeMapTo ,switchMap, catchError,of} from 'rxjs/operators';
import axios from 'axios';
import { dispatch } from 'rxjs/internal/observable/pairs';
import { from } from 'rxjs';
import 'rxjs';
import { combineEpics } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
//import store from '../store'

//store.dispatch({ type: 'ERROR_FETCH_API_USER' });

export const getUsersEpic = action$ => action$.pipe(
    ofType(actions.GET_USERS),
    mapTo(actions.fetchUsers())
);


export const fetchUsersEpic = action$ => action$.pipe(
                            ofType(actions.FETCH_USERS)
                            ,mergeMap(action =>
                                ajax.getJSON(`http://localhost:3000/personnes`)
                                    .pipe(
                                        map(user => actions.setUserToStore(user)),
                                        catchError(error => 
                                             Observable.of( actions.errorFetchApiUsers(error)).do(() => {
                                                console.log(error);
                                              })
                                            )
                                    )
                                                
                            )

    
    ); 
export  const rootEpic = combineEpics(
        getUsersEpic,
        fetchUsersEpic
      );