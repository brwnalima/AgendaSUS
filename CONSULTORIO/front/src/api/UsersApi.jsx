const UsersApi = () => {
    const url = 'http://localhost:3000'
  
    return {
        getUsers () {
            return fetch(`${url}/usuario`, {
                method: 'GET',
                headers: {
                    'User-Type': 'application/json'
                }
            })
        },
        deleteUser (userId) {
          return fetch(`${url}/usuario/${userId}`, {
            method: 'DELETE',
            headers: {
                'User-Type': 'application/json'
            }
         })
        },
        createUser (nome, email, senha) {
          return fetch(`${url}/usuario`, {
            method: 'POST',
            headers: {
                'User-Type': 'application/json'
            },
            body: JSON.stringify(
              {
                nome: nome,
                email: email,
                senha: senha
              }
            )
         })
        },
        updateUser(userId, nome, email, senha) {
          return fetch(`${url}/usuario/${userId}`, {
            method: 'PUT',
            headers: {
                'User-Type': 'application/json'
            },
            body: JSON.stringify(
              {
                nome: nome,
                email: email,
                senha: senha
              }
            )
         })
        },
    }
  }
  
  export default UsersApi