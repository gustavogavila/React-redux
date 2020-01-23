import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {clickButton} from '../../Redux/Action/actionTypes';
import './styles.css';


class Home extends Component {
    state = {
     inputValue: ''
    }
 
     inputChange = event => {
       this.setState({
         inputValue: event.target.value
       })
     }
 
     render(){
       const {clickButton, Pessoa} = this.props;
       const {inputValue} = this.state;
 
         return (
           <div className="home">
                <div className="form">
                    <label>Entre com a palavra </label>
                    <br />
                    <input type='text' value={inputValue} onChange={this.inputChange} />
                    <button
                        onClick={() => clickButton(inputValue)}
                    >
                        Teste lógico
                    </button>
                    <h1>{Pessoa}</h1>
                </div>
           </div>
         );
       }
     }
 
 const mapStateToProps = Store => ({
    Pessoa: Store.clickState.Pessoa
 });
 
 const mapDispatchToProps = dispatch => bindActionCreators({clickButton}, dispatch);
 
 export default connect(mapStateToProps, mapDispatchToProps)(Home);
 