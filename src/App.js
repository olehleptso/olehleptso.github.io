import './App.css';
import JobBoard from './components/JobBoard/JobBoard';
import { Routes, Route, Link} from 'react-router-dom';
import JobInfo from './components/JobInfo/JobInfo';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<JobBoard/>}/>
      <Route path="/job/:id" element={<JobInfo/>}/>
    </Routes>
    </>
  );
}

export default App;
