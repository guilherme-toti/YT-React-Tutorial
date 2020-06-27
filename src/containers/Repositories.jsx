import React, { useState, useEffect } from 'react';

import { listRepositories } from '../api/github'
import Item from '../components/Item'

function Repositories() {
  const [data, setData] = useState([]);

  useEffect(() => {
    listRepositories()
      .then(data => {
        setData(data);
      });
  }, []);

  return (
    <ul>
      {data.map(item => <Item key={item.id} {...item} />)}
    </ul>
  );
}

export default Repositories;
