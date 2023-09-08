import { Switch, Route, Redirect } from 'react-router-dom'
import { SignUp } from '../pages/SignUp';

export const Router = () => {
  return (
    <Switch>
      <Route>
        <SignUp exact path='/signup'/>
      </Route>
    </Switch>
  );
};