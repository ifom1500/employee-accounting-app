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
        { name: 'Ivan', salary: 800, increase: false, rise: false, id: 1 },
        { name: 'Tamara', salary: 9000, increase: true, rise: false, id: 2 },
        { name: 'Carl', salary: 100, increase: false, rise: true, id: 3 },
        { name: 'Foncato', salary: 293, increase: false, rise: false, id: 4 },
        { name: 'Yecun', salary: 928, increase: true, rise: false, id: 5 },
      ],
      term: '',
      filter: 'all',
    };

    this.maxId = this.state.data.length;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      // { data } = state

      // data должен быть иммутабелен, то есть не должен изменяться

      // TODO 1 способ - разбить массив на 2 половинке за исключением искомого элемента
      // const index = data.findIndex(item => item.id === id);
      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);
      // const newData = [...before, ...after];

      // TODO 2 способ - фильтр - можно сразу писать в return без дополнительной переменной
      const newData = data.filter((item) => item.id !== id);

      return {
        data: newData,
      };
    });
  };

  addItem = (name, salary) => {
    if (name && salary) {
      const newItem = {
        name,
        salary,
        increase: false,
        rise: false,
        id: ++this.maxId,
      };
      this.setState(({ data }) => {
        const newArr = [...data, newItem];
        return {
          data: newArr,
        };
      });
    } else {
      console.warn('Введите данные нового сотрудника');
    }
  };

  // onToggleIncrease = (id) => {
  //   // TODO: 1 способ
  //   this.setState(({ data }) => {
  //     const index = data.findIndex(item => item.id === id);
  //     const oldItem = data[index];
  //     const newItem = { ...oldItem, increase: !oldItem.increase };
  //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

  //     return {
  //       data: newArr,
  //     };
  //   });

  //   // TODO: 2 способ
  //   this.setState(({ data }) => ({
  //     data: data.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, increase: !item.increase };
  //       }
  //       return item;
  //     }),
  //   }));
  // };

  // объединение обработчиков для rise и increase в один метод
  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  filterPost = (items, filter) => {
    switch (filter) {
      case 'rise':
        return items.filter((item) => item.rise);
      case 'moreThan1000':
        return items.filter((item) => item.salary > 1000);
      default:
        return items;
    }
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { data, term, filter } = this.state;
    const awardEmployeesAmount = data.filter((item) => item.increase === true).length;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);

    return (
      <div className="app">
        <AppInfo employeesAmount={data.length} awardEmployeesAmount={awardEmployeesAmount} />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
        </div>

        <EmployeesList data={visibleData} onDelete={this.deleteItem} onToggleProp={this.onToggleProp} />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
