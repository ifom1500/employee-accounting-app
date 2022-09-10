import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form'
import './app.css';

const data = [
  {name: "Ivan", salary: 800, increase: false, id: 1,},
  {name: "Tamara", salary: 9000, increase: true, id: 2,},
  {name: "Carl", salary: 100, increase: false, id: 3,},
  {name: "Foncato", salary: 293, increase: false, id: 4,},
  {name: "Yecun", salary: 928, increase: true, id: 5,},
];

function App() {
  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList data={data}/>
      <EmployeesAddForm />
    </div>
  );
}

export default App;
