import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({ id, name, full_name, owner: { login } }) => (
  <li key={id}><Link to={`/repos/${login}/${name}`}>{full_name}</Link></li>
)

export default Item