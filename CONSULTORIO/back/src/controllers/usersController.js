import UsersDAO from "../DAO/UsersDAO.js"

class usersController {
  static rotas(app){
    app.get('/usuario', usersController.listar)
    app.post('/usuario', usersController.inserir)
    app.delete('/usuario/:id', usersController.deletar)
    app.put('/usuario/:id', usersController.atualizar)
  }

  static async listar(req, res){
    const usuarios = await UsersDAO.listar()

    res.send(usuarios)
  }

  static async inserir(req, res){
    const usuario = {
      nome: req.body.nome,
      email: req.body.email,
      senha: req.body.senha
    }

    const result = await UsersDAO.inserir(usuario)

    if(result.erro) {
      res.status(500).send(result)
    }

    res.send(result)
  }

  static async deletar(req, res){
    const usuario = await UsersDAO.deletar(req.params.id)

    if(usuario.erro){
        res.status(500).send('Erro ao deletar o conteúdo')
    }

    res.send({mensagem: 'Conteúdo removido com sucesso'})
  }

  static async atualizar(req, res){
    const usuario = {
      nome: req.body.nome,
      email: req.body.email,
      senha: req.body.senha
    }

    const result = await UsersDAO.atualizar(req.params.id, usuario)

    if(result.erro){
        res.status(500).send('Erro ao atualizar o conteúdo')
    }

    res.send({mensagem: 'Conteúdo alterado com sucesso'})
  }
}

export default usersController