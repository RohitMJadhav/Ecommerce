import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error=useRouteError()
    console.log(error);
  return (
    <div><h1> OOPs!!!!!!!!!!</h1><h1>Sonething went wrong!!</h1>
    <h2>{error.status}</h2>
    <h3>{error.statusText}</h3>
    <h4>{error.data}</h4>
    </div>
  )
}

export default Error