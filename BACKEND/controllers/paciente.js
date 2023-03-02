import {db} from "../db.js"

export const getPacientes = (_, res) => {
    const q = "SELECT * FROM pacientes";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
}

export const addPaciente = (req, res) => {
    const q =
      "INSERT INTO pacientes(`nome`, `cpf`, `telefone`,`email`, `data_nasc`) VALUES(?)";
  
    const values = [
      req.body.nome,
      req.body.cpf,
      req.body.telefone,
      req.body.email,
      req.body.data_nasc,
    ];
  
    db.query(q, [values], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Usuário criado com sucesso.");
    });
  };

  export const updatePaciente = (req, res) => {
    const q =
      "UPDATE pacientes SET `nome` = ?, `cpf` = ?, `telefone` = ?,`email` = ?, `data_nasc` = ? WHERE `id` = ?";
  
    const values = [
      req.body.nome,
      req.body.cpf,
      req.body.telefone,
      req.body.email,
      req.body.data_nasc,
    ];
  
    db.query(q, [...values, req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Usuário atualizado com sucesso.");
    });
  };

  export const deletePaciente = (req, res) => {
    const q = "DELETE FROM pacientes WHERE `id` = ?";
  
    db.query(q, [req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Usuário deletado com sucesso.");
    });
  };