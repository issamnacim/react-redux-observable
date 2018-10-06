<img title="logo" src="images/logo-small.gif" width="16.5%">
<img title="redux-observable" src="images/logo-text-small.png" width="72%">

# Intorduction to redux-observable

RxJS 6-based middleware for Redux. Compose and cancel async actions to create side effects and more.
redux-observable requires an understanding of Observables with RxJS v6. If you're new to Reactive Programming with RxJS v6, head over to http://reactivex.io/rxjs/ to familiarize yourself first.

An Epic is the core primitive of redux-observable : It is a function which takes a stream of actions and returns a stream of actions. Actions in, actions out.

While you'll most commonly produce actions out in response to some action you received in, that's not actually a requirement! Once you're inside your Epic, use any Observable patterns you desire as long as anything output from the final, returned stream, is an action.

Root Epic :  Similar to redux requiring a single root Reducer, redux-observable requires a single root Epic. we can use combineEpics() to accomplish this.

export const rootEpic = combineEpics(
  pingEpic,
  fetchUserEpic
);
