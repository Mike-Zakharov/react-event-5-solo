import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../api/useFetch';

const RequestsList = () => {
  const { page } = useParams(); // Get the current page from the URL
  const token = ''; // Retrieve your token from the zustand store or context
  const { data: requests, loading, error } = useFetch(`/request?page=${page}`, token); // Use the custom hook with token

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div>
        <Typography variant="h1" component="h2">
          Найдено {requests ? requests.length : 0} запросов
        </Typography>
        <div>View toggler</div>
      </div>
      <div>
        {requests &&
          requests.map((request, index) => (
            <div key={index}>
              {/* Replace with appropriate request display */}
              <p>{request.title}</p>
            </div>
          ))}
      </div>
      <div>
        {/* Pagination block */}
        {'Pagination block'}
      </div>
    </div>
  );
};

export default RequestsList;
