import React, { useState,ChangeEvent,useEffect } from 'react';
import Header from '../components/Header';
import { v4 as uuidv4 } from 'uuid';
import Input from '../components/Input';
import Button from '../components/Button';
import Form from 'react-bootstrap/Form';
import {  Link } from 'react-router-dom';

import { useNavigate } from "react-router-dom";

const InputOneArrayOptions = { ErrorMessage: "", Id: "PasswordInput", Label: "Password", Name: "Password", type: "password", PlaceHolder: "Input Password", Value: "", Icon: null, };

const buttonOptions = { BGColor: '#A39FC1', ButtonType: "button", Title: 'Continue', poinerEvent: true, FontColor: '#8B85B1' }

const InputTwoObjectOptions = { ErrorMessage: "test", Id: 'PasswordInputRepeat', Label: 'Repeat passport', Name: 'PasswordRepeat', type: 'password', PlaceHolder: 'Repeat password', Value: "", Icon: null }


const PasswordScreen: React.FC = () => {
   
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [poinerEvent, setPoinerEvent] = useState(false);

  const [error, setError] = useState('');
  const [errorRepeat, setErrorRepeat] = useState('');
  const navigate = useNavigate();
  const handleInputPassword = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    
    setPassword(newValue);
    updatePointerEvent(newValue, passwordRepeat);
  };


  const updatePointerEvent = (password: string, passwordRepeat: string) => {
    if (password.trim() !== '' && passwordRepeat.trim() !== '') {
      setPoinerEvent(true);
    } else if(passwordRepeat.trim() == password.trim()) {
      setErrorRepeat('Passwords are not Equal')
      setPoinerEvent(false);
    }else {
      setPoinerEvent(false);  
    }
  };

   const handleInputRepeatPassword = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setPasswordRepeat(newValue);
    updatePointerEvent(password, newValue);
  };

  const HandleClick = (event:  any) => {
    var e = event.target.value;
    console.log(e);
     navigate(`StepThree`);
    
  };
  return (
    <>
    <Header HeaderTitle='Super test form' SubHeaderTitle='Initial info' key={uuidv4()} />
    <br />
    <br />
    <div style={{ width:'100%' }}>
      <div className='container' style={{ backgroundColor: '#817CA5',borderRadius:'18px',width: '25%'}}>
        <div className='row '>
          <Input options={InputOneArrayOptions} marginRow="mt-2" height="131px"  margin="mt-4"  error={error} >
              <Form.Group>
                <Form.Label htmlFor={InputOneArrayOptions.Id}>{InputOneArrayOptions.Label}</Form.Label>
                <Form.Control
                  type={InputOneArrayOptions.type}
                  placeholder={InputOneArrayOptions.PlaceHolder}
                  value={password}
                  onChange={handleInputPassword}
                />
              </Form.Group>  
          </Input>

          <Input options={InputTwoObjectOptions} marginRow="" height="111px"  margin=""  error={errorRepeat} >
              <Form.Group>
                <Form.Label htmlFor={InputTwoObjectOptions.Id}>{InputTwoObjectOptions.Label}</Form.Label>
                <Form.Control
                  type={InputTwoObjectOptions.type}
                  placeholder={InputTwoObjectOptions.PlaceHolder}
                  value={passwordRepeat}
                  onChange={handleInputRepeatPassword}
                />
              </Form.Group>  
          </Input>
         
          <div className='d-flex justify-content-center mb-4' >
            <Link to="/StepThree" type={"button"} style={{ backgroundColor: poinerEvent ? 'white':'#A39FC1' , color: buttonOptions.FontColor , fontSize: '15px' ,textAlign:"center",padding: "7px",textDecoration: "none",width: '100%',borderRadius:'3px',pointerEvents : buttonOptions.poinerEvent === poinerEvent ? "auto" : "none" }}>
              {buttonOptions.Title}
            </Link>
              {/* <Button options={buttonOptions} height="47px" type="button" poinerEvent={poinerEvent} path={"StepThree"} ></Button> */}
          </div>
        </div>
      </div>
    </div>
  </>
  )
}


export default PasswordScreen;