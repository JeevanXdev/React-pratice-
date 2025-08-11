import { useState } from 'react'
import './App.css'
import Greeting from './Component/Greetings';
import UserCard from './Component/UserCard';
import Counter from './Component/Counter';
import UserForm from './Component/UserForm';
import NameInput from './Component/NameInput';
import Toggle from './Component/ToogleSwitch';
import TaskList from './Component/TaskList';
import FirstEffect from './Component/FirstEffect';
import UserFetcher from './Component/UserFetcher';
import WatchCount from './Component/WatchFile';
import Quotefetcher from './Component/QuoteGenerator(useEffect)';
import LoginForm from './Component/Loginform';
import UserGreetings from './Component/ConditionalRendering(example)';
import NameManager from './Component/LiftinUp(Example.parent)';

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <div>
      <h1>Welcome</h1>
      <Greeting name="Dark" />
    </div>
    <div>
      <h1> User list </h1>
      <UserCard name = "Jeevan" age ={22} isStudent = {true}/>
      <UserCard name = "Aayush" age ={27} isStudent = {false}/>
    </div>
    <div>
      <h1>Counter</h1>
      {/*....... existing components*/}
      <Counter />
    </div>
    <div>
      <h1>useState Examples</h1>
      <NameInput />
      <Toggle />
      <UserForm />
      <TaskList />
    </div>

  
    <div>
    <h1>useEffect Examples</h1>
      <FirstEffect />
      <WatchCount />
      <UserFetcher />
    </div>

    <div>
      <h1> Quote Fetcher</h1>
      <Quotefetcher/>
    </div>

    <div>
      <h1> Login form using React </h1>
      <LoginForm /> 
    </div>

    <div>
      <h1> Conditional Rendering Example</h1>
      <UserGreetings/>
    </div>

    <div>
      <h1>Liftin up Exapmle </h1>
      <NameManager />
    </div>
    </>
  );
}

export default App
