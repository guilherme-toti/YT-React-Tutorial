import React from 'react'

const Item = ({ id, full_name }) => (
  <li key={id}>{full_name}</li>
)

export default Item