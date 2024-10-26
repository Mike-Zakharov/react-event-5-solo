import React from 'react';
import useUserData from '../store/store';
//import RequestsList from '../components/RequestsList/RequestsList';
import Search from '../components/Search/Search';

const CatalogPage = () => {
  const data = useUserData();

  console.log(data);

  return (
    <>
      <Search />
      {/*<RequestsList />*/}
    </>
  );
};
export default CatalogPage;
