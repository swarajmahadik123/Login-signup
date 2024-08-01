import React from 'react';

const FrontPage = () => {
  const h1Style = {
    fontFamily: "'Roboto', sans-serif"
  };

  return (
    <div className='flex justify-center items-center h-[80vh]'>
      <h1 style={h1Style}>Click to Login or Signup</h1>
    </div>
  );
}

export default FrontPage;
