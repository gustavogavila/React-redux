import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { clickButtonArray } from '../../Redux/Action/actionTypes'
import './styles.css'

class Teste extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Pessoa: [],
            nome: '', 
            email: '',
            teste: '' 
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleSubmit(event) {
        //alert('Nome: ' + this.state.nome +' Email: '+ this.state.email);
        // debugger
        
        // this.Pessoa = {
        //     nome: this.state.nome,
        //     email: this.state.email 
        // }

        this.Pessoa = [this.state.nome, this.state.email]
        
        this.props.clickButtonArray(this.Pessoa);
        this.setState({Pessoa: [],
            nome: '', 
            email: '',
            teste: ''})
        // debugger
        //this.teste = Pessoa[0];
        event.preventDefault();        
    }

    render() {
        // const { email, Pessoa} = this.props;
        const { pessoa } = this.props;
        
        return (
            <div>
            <div className="home">
                
                <form onSubmit={this.handleSubmit} className="form">
                    <label>Nome </label><br />
                    <input type="text" value={this.state.nome} onChange={(e) => this.setState({nome: e.target.value})} /><br />
                    <label>Email</label><br />
                    <input type="text" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}  /><br />
                    <br />
                    <input type="submit" value="Enviar" />
                </form>
            </div>
            <h1>{pessoa.nome} {pessoa.email}</h1>
            </div>
        );
    }
}
// debugger
const mapStateToProps = Store => ({
    // Pessoa: {
    //     nome: Store.clickState.nome,
    //     email: Store.clickState.email
    // },
    pessoa: Store.clickStateArray.Pessoa
});
// debugger
const mapDispatchToProps = dispatch => bindActionCreators({ clickButtonArray }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Teste);
