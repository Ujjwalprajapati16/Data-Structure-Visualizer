import React from 'react';

const ShowSpecificData = ({ specificData = {} }) => {
  let Visualize = 'div';
  if (specificData.value.classname === 'List') {
    Visualize = StaticList; // Assuming StaticList is imported from './staticContainer/StaticList'
  }

  return (
    <div className='bg-gray-100 rounded-lg p-4'>
      <div className='text-lg font-bold text-gray-800 mb-2'>DataStructure</div>
      <div className='p-4 bg-white rounded-lg shadow-md'>
        <Visualize data={specificData} />
      </div>
    </div>
  );
};

export default ShowSpecificData;
