import React from 'react';
import { Link } from 'react-router-dom';

const Nomatch = () => (
  <>
    <h1>404 page not found</h1>
    <Link to='/'>Return home</Link>
  </>
)

export default Nomatch;