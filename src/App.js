import './App.css';
import ProfilePhoto from './ComponentProfile/ProfilePhoto';
import FullName from './ComponentProfile/FullName';
import Adress from './ComponentProfile/Adress';

function App() {
  return (
    <div className="App">
    <ProfilePhoto />
    <FullName />
    <Adress />
    </div>
  );
}

export default App;
