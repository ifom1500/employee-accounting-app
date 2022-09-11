import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'Ivan', salary: 800, increase: false, id: 1 },
        { name: 'Tamara', salary: 9000, increase: true, id: 2 },
        { name: 'Carl', salary: 100, increase: false, id: 3 },
        { name: 'Foncato', salary: 293, increase: false, id: 4 },
        { name: 'Yecun', salary: 928, increase: true, id: 5 },
      ],
    };
    this.maxId = this.state.data.length;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      // { data } = state

      // data должен быть иммутабелен, то есть не должен изменяться

      // 1 способ - разбить массив на 2 половинке за исключением искомого элемента
      // const index = data.findIndex(item => item.id === id);
      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);
      // const newData = [...before, ...after];

      // 2 способ - фильтр - можно сразу писать в return без дополнительной переменной
      const newData = data.filter((item) => item.id !== id);

      return {
        data: newData,
      };
    });
  };

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      id: ++this.maxId,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  render() {
    const { data } = this.state;

    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList data={data} onDelete={this.deleteItem} />
        <EmployeesAddForm onAdd={this.addItem}/>
      </div>
    );
  }
}

export default App;
