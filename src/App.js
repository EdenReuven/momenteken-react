import './styles/App.scss';
import data from './utils/example.json';
import Form from './components/form/Form';

function App() {
  return (
    <div>
      <h1>טופס - רישומי זיהוי</h1>
      <Form data={data}/>
    </div>
  );
}

export default App;
