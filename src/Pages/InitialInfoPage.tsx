import React, { useState, ChangeEvent, useEffect, useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import { v4 as uuidv4 } from 'uuid';
import Select from '../components/Select';
import Input from '../components/Input';
import CountryArray from '../helpers/Country';
import Button from '../components/Button';
import Form from 'react-bootstrap/Form';
import {  Link } from 'react-router-dom';

import { useNavigate } from "react-router-dom";
import InputReducer, { InputState } from '../state/reducers/InputReducer';
import UpdateInput,{UpdateInputEmail,UpdateInputCountry} from '../state/actions/InputAction/UpdateInputAction';


const InputOneArrayOptions = { ErrorMessage: "", Id: "UserNameInput", Label: "Username",Name : "UserName" ,type:"text",PlaceHolder:"Input UserName",Value: "",Icon :  <i className="icon">!</i>,};

const InputTwoObjectOptions = {ErrorMessage:"test", Id:'EmailInput', Label:'Email', Name:'Email', type:'email', PlaceHolder:'Input Email', Value:"", Icon: <i className="icon">!</i>}

const buttonOptions = {BGColor:'#A39FC1', ButtonType:"button",  Title:'Continue', poinerEvent:true , FontColor:'#8B85B1'}

const InitialInfo: React.FC = () => {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [poinerEvent, setPoinerEvent] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  // const [state, dispatch] = useReducer(InputReducer, inititalState);
  const navigate = useNavigate();

  const handleInputChangeUserName = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    if (newValue.length < 4) {
      setError('The character length must be at least 4');
    } else if (newValue.length > 12) {
      setError('The character length must be at most 12');
    } else {
      setError('');
    }
    setUserName(newValue);
    
    dispatch(UpdateInput(newValue))
    updatePointerEvent(newValue, email);
  };

  const handleInputChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    
    setEmail(newValue);
    dispatch(UpdateInputEmail(newValue))
    updatePointerEvent(userName, newValue);
  };

  const handleInputSelectedOption = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    
    updatePointerEvent(userName, newValue);
  };


  const updatePointerEvent = (newUserName: string, newEmail: string) => {
    if (newUserName.trim() !== '' && newEmail.trim() !== '') {
      setPoinerEvent(true);
    } else {
      setPoinerEvent(false);
    }
  };


  useEffect(() => {
    console.log(selectedOption,'selectedOption')
    dispatch(UpdateInputCountry(selectedOption))
  },[selectedOption])

  const HandleClick = (event:  any) => {
    var e = event.target.value;
    console.log(e);
     navigate(`StepTwo`);
    
  };


  return (
    <>
      <Header HeaderTitle='Super test form' SubHeaderTitle='Password Screen' key={uuidv4()} />
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
                    value={userName}
                    onChange={handleInputChangeUserName}
                  />
                </Form.Group>  
            </Input>

            <Input options={InputTwoObjectOptions} marginRow="" height="111px"  margin=""  error={errorEmail} >
                <Form.Group>
                  <Form.Label htmlFor={InputTwoObjectOptions.Id}>{InputTwoObjectOptions.Label}</Form.Label>
                  <Form.Control
                    type={InputTwoObjectOptions.type}
                    placeholder={InputTwoObjectOptions.PlaceHolder}
                    value={email}
                    onChange={handleInputChangeEmail}
                  />
                </Form.Group>  
            </Input>
            {/* <Input options={InputTwoObjectOptions} marginRow="" margin="" height="119px"  key={uuidv4()} /> */}
            <Select setSelectedOption={setSelectedOption} selectedOption={selectedOption} margin="mb-4" placeholder='Select country' title='Country' key={uuidv4()} options={CountryArray} />

            <div className='d-flex justify-content-center mb-4' >
            <Link to="/StepTwo" type={"button"} style={{ backgroundColor: poinerEvent ? 'white':'#A39FC1' , color: buttonOptions.FontColor , fontSize: '15px' ,textAlign:"center",padding: "7px",textDecoration: "none",width: '100%',borderRadius:'3px',pointerEvents : buttonOptions.poinerEvent === poinerEvent ? "auto" : "none" }}>
              {buttonOptions.Title}
            </Link>
              {/* <Button options={buttonOptions} height="47px" type="button" poinerEvent={poinerEvent} path={"StepTwo"} ></Button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InitialInfo;
