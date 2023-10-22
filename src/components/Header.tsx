import React from 'react';
import '../styles/Header.scss';
// Define the props type for your component
type MyComponentProps = {
  HeaderTitle: string;
  SubHeaderTitle: string;
 
  
};

// Create your functional component
const Header: React.FC<MyComponentProps> = ({
  HeaderTitle,SubHeaderTitle
}) => {
  return (
    <div className='text-center'>
      <h1 className='py-2 my-2' style={{color: '#413C5F'}}>{HeaderTitle}</h1>
      <h5 className='py-2 my-2' style={{color: '#8F8AAF'}}>{SubHeaderTitle}</h5>
    </div>
  );
};

export default Header;
