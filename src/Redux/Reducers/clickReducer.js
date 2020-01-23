import {CLICK_UPDATE_VALUE, ARRAY_LIST} from '../Action/actionTypes';


const initialState = {
    Pessoa: {nome: '',email: ''},
    //nome: '',
    //email: ''
};

let certo = 'Você está certo!';
let errado = 'Você está errado!';

export const clickReducer = (state = initialState, action) => {
    switch(action.type){
        case CLICK_UPDATE_VALUE:
            return{
                ...state,
                Pessoa: action.payload === 'Luis'? certo : errado                
            };
        default: 
            return state;
    }
};

export const clickArrayReducer = (state = initialState, action) => {
    debugger
    switch(action.type){
        case ARRAY_LIST:
            return{
                ...state,
                Pessoa: {
                    nome: action.payload[0],
                    email: action.payload[1]
                }
            };
        default: 
            return state;
    }
}
debugger