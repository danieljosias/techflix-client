import { Switch, Route, Redirect } from 'react-router-dom'
import { SignUp } from '../pages/SignUp'
import { SignIn } from '../pages/SignIn'
import { Alter } from '../pages/Alter'
import { Delete } from '../pages/Delete'
import { Homepage } from '../pages/Homepage'
import { Movies } from '../pages/Movies'
import { Watch } from '../pages/Watch'
import { Search } from '../pages/Search'

export const Router = () => {
  return (
    <Switch>
      <Route exact path='/signup'>
        <SignUp/>
      </Route>
      <Route exact path='/signin'>
        <SignIn/>
      </Route>
      <Route exact path='/alter-password'>
        <Alter/>
      </Route>
      <Route exact path='/delete'>
        <Delete/>
      </Route>
      <Route exact path='/homepage'> 
        <Homepage/>
      </Route>
      <Route exact path='/movies'> 
        <Movies/>
      </Route>
      <Route exact path='/watch'>
        <Watch/>
      </Route>
      <Route exact path='/search'>
        <Search/>
      </Route>
    </Switch>
  );
};