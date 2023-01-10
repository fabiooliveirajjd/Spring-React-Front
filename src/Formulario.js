import React from "react";
function Formulario({
  botao,
  eventoTeclado,
  cadastrar,
  obj,
  cancelar,
  remover,
  alterar
}) {
  return (
    <div>
      <br />
      <br />{" "}
      <div className="container">
        <div className="row">
          <div>
            <form>
              <input
                type="text"
                value={obj.nome}
                onChange={eventoTeclado}
                name="nome"
                placeholder="Nome"
                className="form-control"
              />
              <input
                type="text"
                value={obj.cpf}
                onChange={eventoTeclado}
                name="cpf"
                placeholder="CPF"
                className="form-control"
              />
              <input
                type="text"
                value={obj.email}
                onChange={eventoTeclado}
                name="email"
                placeholder="Email"
                className="form-control"
              />
              <input
                type="text"
                value={obj.senha}
                onChange={eventoTeclado}
                name="senha"
                placeholder="Senha"
                className="form-control"
              />

              {botao ? (
                <div>
                  <br></br>
                  <input
                    type="button"
                    value="Cadastrar"
                    onClick={cadastrar}
                    className="btn btn-primary"
                  />
                </div>
              ) : (
                <div>
                  <input
                    onClick={alterar}
                    type="button"
                    value="Alterar"
                    className="btn btn-warning"
                  />
                  <input
                    onClick={remover}
                    type="button"
                    value="Remover"
                    className="btn btn-danger"
                  />
                  <imput
                    onClick={cancelar}
                    type="button"
                    value="Cancelar"
                    className="btn btn-secondary mb-2">
                    Cancelar
                  </imput>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Formulario;
