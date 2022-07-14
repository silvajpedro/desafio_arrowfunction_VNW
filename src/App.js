import React, { Component } from "react";

export default class desafioarrow extends Component {

  ExibirMsg = (nome1) => {
    return (
      <div>
        <h1>{`Olá meu nome é ${nome1}`}</h1>
      </div>
    )
  }

  DobrarNum = (num1) =>{
    return(
      <div>
        <h2>{`O dobro de ${num1} é ${num1*2}`}</h2>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.ExibirMsg("João")}
        {this.DobrarNum(8)}
      </div>
    )
  }
}