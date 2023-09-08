import { Switch, Route, Redirect } from 'react-router-dom'
import { SignUp } from '../pages/SignUp'
import { SignIn } from '../pages/SignIn'

export const Router = () => {
  return (
    <Switch>
      <Route exact path='/signup'>
        <SignUp/>
      </Route>
      <Route exact path='/signin'>
        <SignIn/>
      </Route>
    </Switch>
  );
};