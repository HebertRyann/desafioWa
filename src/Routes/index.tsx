import { Switch, Route } from 'react-router-dom';
import Main from '../Pages/Main';
import SignIn from '../Pages/SignIn';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/main" exact component={Main} />
    </Switch>
  )
}
export default Routes