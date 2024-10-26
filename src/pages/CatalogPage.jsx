import React from 'react';
import useUserData from '../store/store';

const CatalogPage = () => {
  const data = useUserData();

  console.log(data);

  return <div>Auth Status:</div>;
};
export default CatalogPage;
