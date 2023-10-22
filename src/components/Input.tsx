import React, { ChangeEvent,useEffect } from 'react';
import '../styles/Input.scss';
import Form from 'react-bootstrap/Form';


type MyComponentProps = {
  PlaceHolder: string;
  Id: string;
  Label: string;
  Value: string | number | undefined;
  ErrorMessage: string | null;
  Icon: React.ReactNode;
  Name: string;
  type: 'text' | 'button' | 'email' | 'password' | 'number' | string;
};

const Input: React.FC<{ children: React.ReactNode; options:MyComponentProps, margin:String,marginRow:string,height:string,error:string }> = ({ options,children, margin, marginRow, height,error}) => {
  
 const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    
  }

  return (
    <div className="input-icon container">
      <div className={`row ${marginRow}`} style={{ height }}>
        <div className={`form-group ${margin}`}>
          <div className="d-flex justify-content-center flex-column">
            {children}
            {options.Icon && error && options.Icon} 
            {error && (
              <span className="text-danger" style={{ position: "relative", bottom: "15px" }}>
                {error}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
