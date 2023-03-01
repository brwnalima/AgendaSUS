import db from '../infra/db.js'

class UsersDAO {
    static listar() {
        const query = 'SELECT * FROM usuarios';
        return new Promise((resolve, reject) => {
            db.all(query, (err, rows) => {
                if (err) {
                    reject(err);
                }

                resolve(rows)
            });
        });
    }

    static inserir(usuario) {
        const query = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
        return new Promise((resolve, reject) => {
            db.run(query, [usuario.nome, usuario.email, usuario.senha], function (err) {
                if (err) {
                    reject({
                        mensagem: 'Erro ao inserir o conteúdo',
                        erro: err
                    })
                }

                resolve({
                    mensagem: 'Conteúdo criado com sucesso',
                    contentId: this.lastID
                 })
            });
        });
    }

    static deletar(id) {
      const query = 'DELETE FROM usuarios WHERE id = ?';
      return new Promise((resolve, reject) => {
          db.run(query, [id], (err) => {
              if (err) {
                  reject({
                      mensagem: 'Erro ao deletar o conteúdo',
                      erro: err
                  })
              }

              resolve({ mensagem: 'Conteúdo deletado com sucesso' })
          });
      });
    }

    static atualizar(id, usuario) {
      const query = 'UPDATE usuarios SET nome = ?, email = ?, senha = ? WHERE id = ?';
      return new Promise((resolve, reject) => {
          db.run(query, [usuario.nome, usuario.email, usuario.senha, id], (err) => {
              if (err) {
                  reject({
                      mensagem: 'Erro ao atualizar o conteúdo',
                      erro: err
                  })
              }

              resolve({ mensagem: 'Conteúdo atualizado com sucesso' })
          });
      });
    }
}

export default UsersDAO;