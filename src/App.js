import "./App.css";

import React, {useEffect, useState} from "react";

import Formulario from "./Formulario";
import Tabela from "./Tabela";

function App() {
  //Objeto cliente
  const cliente = {
    idCliente: 0,
    nome: "",
    cpf: "",
    email: "",
    senha: "",
    dataCriacao: undefined
  };

  //UseState
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [clientes, setClientes] = useState([]);
  const [objCliente, setObjCliente] = useState(cliente);

  //UseEffect
  useEffect(() => {
    fetch("http://localhost:8080/listar")
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => setClientes(retorno_convertido));
  }, []);

  //Obtendo dados do formulário
  const aoDigitar = (e) => {
    setObjCliente({...objCliente, [e.target.name]: e.target.value});
  };

  //Cadastrar cliente
  const cadastrar = () => {
    fetch("http://localhost:8080/cadastrar", {
      method: "post",
      body: JSON.stringify(objCliente),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json"
      }
    })
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => {
        if (retorno_convertido.mensagem !== undefined) {
          alert(retorno_convertido.mensagem);
        } else {
          setClientes([...clientes, retorno_convertido]);
          alert("Cliente cadastrado com sucesso!");
          LimparFormulario();
        }
      });
  };

  //Alterar cliente
  const alterar = () => {
    fetch("http://localhost:8080/alterar", {
      method: "put",
      body: JSON.stringify(objCliente),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json"
      }
    })
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => {
        if (retorno_convertido.mensagem !== undefined) {
          alert(retorno_convertido.mensagem);
        } else {
          alert("Cliente alterado com sucesso!");
          //Cópia do vetor de clientes
          let vetorTemp = [...clientes];
          //Índice
          let indice = vetorTemp.findIndex((c) => {
            return c.idCliente === objCliente.idCliente;
          });
          //Alterar cliente do vetorTemporário
          vetorTemp[indice] = objCliente;
          //Atualizar o vetor de clientes
          setClientes(vetorTemp);
          LimparFormulario();
        }
      });
  };

  //Remover cliente
  const remover = () => {
    fetch("http://localhost:8080/remover/" + objCliente.idCliente, {
      method: "delete",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json"
      }
    })
      .then((retorno) => retorno.json())
      .then((retorno_convertido) => {
        //Mensagem
        alert(retorno_convertido.mensagem);
        //Cópia do vetor de clientes
        let vetorTemp = [...clientes];
        //Índice
        let indice = vetorTemp.findIndex((c) => {
          return c.idCliente === objCliente.idCliente;
        });
        //Remover cliente do vetorTemporário
        vetorTemp.splice(indice, 1);
        //Atualizar o vetor de clientes
        setClientes(vetorTemp);
        //Limpar fromulário
        LimparFormulario();
      });
  };

  //Limpar formulário
  const LimparFormulario = () => {
    setObjCliente(cliente);
    setBtnCadastrar(true);
  };

  //Selecionar cliente
  const selecionarCliente = (indice) => {
    setObjCliente(clientes[indice]);
    setBtnCadastrar(false);
  };

  // imagem react  <img src={logo} className="App-logo" alt="logo" />

  return (
    <div className="App">
      <div className="container">
        <Formulario
          botao={btnCadastrar}
          eventoTeclado={aoDigitar}
          cadastrar={cadastrar}
          obj={objCliente}
          selecionar={selecionarCliente}
          cancelar={LimparFormulario}
          remover={remover}
          alterar={alterar}
        />
        <Tabela vetor={clientes} selecionar={selecionarCliente} />
      </div>
    </div>
  );
}

export default App;
