import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { getRepository } from '../api/github';

function Repository() {
  const [repository, setRepository] = useState({});
  let history = useHistory();
  const { owner, name } = useParams();

  useEffect(() => {
    getRepository(owner, name)
      .then(data => setRepository(data));
  }, [])
  
  return (
    <>
      <button onClick={() => history.goBack()}>Voltar</button>
      <h1>{repository.name}</h1>
    </>
  );
}

export default Repository;