import { useState } from 'react';
import UsersApi from './api/UsersApi';
import CreateUserModal from './components/CreateUserModal/CreateUserModal';

const usersApi = UsersApi();

function App() {
  const [showCreateUserModal, setShowCreateUserModal] = useState(false);

  const handleCloseCreateUserModal = () => setShowCreateUserModal(false);

  const handleShowCreateUserModal = () => setShowCreateUserModal(true);

  return (
    <div>
      <button onClick={handleShowCreateUserModal}>Criar usuário</button>
      <CreateUserModal
        isModalOpen={showCreateUserModal}
        handleClose={handleCloseCreateUserModal}
        createUser={usersApi.createUser}
      />
    </div>
  );
}

export default App;