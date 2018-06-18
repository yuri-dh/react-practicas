import React, { Component, Fragment } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Reloj from './Reloj'

class RelojMundial extends Component {
  constructor(props){
    super(props)
    const date = new Date()
    const h = date.getHours() > 10 ? date.getHours() : `0${date.getHours()}`
    const m = date.getMinutes() > 10 ? date.getMinutes() : `0${date.getMinutes()}`
    const s = date.getSeconds() > 10 ? date.getSeconds() : `0${date.getSeconds()}`
    this.state = {
      bsas: ['Buenos Aires (Argentina)', `${h}:${m}:${s}`],
      newyork: ['New York (Estados Unidos)', `${h-1}:${m}:${s}`],
      londres: ['Londres (Reino Unido)', `${h+4}:${m}:${s}`],
      moscu: ['Moscú (Rusia)', `${h+6}:${m}:${s}`],
    }
  }

  horaExacta = () => setInterval(
      () => {
        const date = new Date()
        const h = date.getHours() > 10 ? date.getHours() : `0${date.getHours()}`
        const m = date.getMinutes() > 10 ? date.getMinutes() : `0${date.getMinutes()}`
        const s = date.getSeconds() > 10 ? date.getSeconds() : `0${date.getSeconds()}`
        this.setState({
          bsas: ['Buenos Aires (Argentina)', `${h}:${m}:${s}`],
          newyork: ['New York (Estados Unidos)', `${h-1}:${m}:${s}`],
          londres: ['Londres (Reino Unido)', `${h+4}:${m}:${s}`],
          moscu: ['Moscú (Rusia)', `${h+6}:${m}:${s}`],
        })},
      1000);

  render(){
    {this.horaExacta()}
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <h1>Reloj Mundial</h1>
          <Reloj horario={this.state.bsas}/>
          <Reloj horario={this.state.newyork}/>
          <Reloj horario={this.state.londres}/>
          <Reloj horario={this.state.moscu}/>
        </p>
      </div>
    );
  }
}

export default RelojMundial
