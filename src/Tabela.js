import React from "react";

function Tabela({vetor, selecionar}) {
  return (
    <table class="table table-sm table-striped table-hover table-bordered ">
      <thead>
        <tr class="table-secondary">
          <th scope="col">ID</th>
          <th scope="col">NOME</th>
          <th scope="col">CPF</th>
          <th scope="col">EMAIL</th>
          <th>AÇÕES</th>
        </tr>
      </thead>

      <tbody>
        {vetor.map((obj, indice) => (
          <tr key={indice}>
            <td>{indice + 1}</td>
            <td>{obj.nome}</td>
            <td>{obj.cpf}</td>
            <td>{obj.email}</td>
            <td>
              <button
                onClick={() => {
                  selecionar(indice);
                }}
                className="btn btn-success">
                selecionar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabela;
