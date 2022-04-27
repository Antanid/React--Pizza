import './scss/app.scss';
import { Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { setPizzas as setPizzasAction } from './redux/actions/pizzas';

import { Home, Cart, Header } from './pages';


/*
function App() {

const [Pizzas, setPizzas] = useState([])

  useEffect(() => {
     fetch('http://localhost:3000/db.json').then((response) => response.json()).then((json) => {
      setPizzas(json.pizzas)
    }); 
axios.get('http://localhost:3000/db.json').then(({ data }) => {
  setPizzas()
})
  }, [])

return (
 
);
} 
*/

class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      this.props.setPizzas(data.pizzas);
    })
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Header />
          <div className="content">
            <Routes>
              <Route path='/' element={<Home items={this.props.items} />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.pizzas.items,
    filters: state.filters,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setPizzas: (items) => dispatch(setPizzasAction(items)),
    dispatch
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
