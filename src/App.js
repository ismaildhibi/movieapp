
import React, { Component } from 'react'
import Listmovie from './compoents/listmovie'
import './App.css';
import Filter from './compoents/filtername'
import Rating from './compoents/rating'
import { listmovie } from './compoents/data';
import Modal from './compoents/modal'

import WithLoading from './compoents/withloading'

const ListWithLoading = WithLoading(Listmovie);


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rating: 0,
      filtername: '',
      movies: listmovie,
      loading: false
    }
  }

  handleChangeRating = (rate) => {
    this.setState({
      rating: rate

    })
  }
  handleSearchName = (name) => {
    this.setState({
      filtername: name
    })
  }
  addnewMovie = (title, image, rating) => {
    this.setState({
      movies: this.state.movies.concat({ title: title, image: image, rating: rating })
    })
  }
  componentDidMount = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  };
  




  render() {
    return (
      <div>
        <div className='search-bar'>
          <Filter value={this.state.titleFilter} handleSearchName={this.handleSearchName} />
          <Rating count={this.state.rating} handleChangeRating={this.handleChangeRating} /></div>
        <ListWithLoading isLoading={this.state.loading} listmovie={this.state.movies.filter(el => el.title.toLowerCase().includes(this.state.filtername.toLowerCase()))} rate={this.state.rating} />
        <Modal add={this.addnewMovie} />
      </div>
    )
  }
}




