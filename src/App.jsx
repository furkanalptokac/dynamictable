import React from 'react';
import DynamicTable from './DynamicTable';
import data from './SampleData';

const App = () => {
  return (
    <DynamicTable data={data} />
  );
}

export default App;
