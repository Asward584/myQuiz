import { Route } from 'react-router';
import './App.css';

import Quiz from './containers/Quiz/Quiz';
import QuizCreator from './containers/QuizCreator/QuizCreator';
import QuizList from './containers/QuizList/QuizList';
import Auth from './containers/Auth/Auth';
import Layout from './HOC/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Route path="/quiz" component={Quiz} />
        <Route path="/quiz-creator" component={QuizCreator} />
        <Route path="/" exact component={QuizList} />
        <Route path="/auth" component={Auth} />
      </Layout>
    </div>
  );
}

export default App;
