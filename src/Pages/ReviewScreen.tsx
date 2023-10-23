import React,{useState} from 'react';
import {useSelector}  from 'react-redux';
import { RootState } from '../state/reducers';
import Header from '../components/Header';
import { v4 as uuidv4 } from 'uuid';
import Button from '../components/Button';


const buttonOptions = {BGColor:'#FFF', ButtonType:"button",  Title:'COMPELETE', poinerEvent:true , FontColor:'#8B85B1'}

const ReviewScreen: React.FC = () => {
  
  const Coutnry = useSelector((state: RootState) => state.Inputed.COUNTRYValue);

  const Email = useSelector((state: RootState) => state.Inputed.EmailValue)
  
  const UserNAme = useSelector((state: RootState) => state.Inputed.inputValue)
  const [poinerEvent, setPoinerEvent] = useState(true);
  return (
    <>
       <Header HeaderTitle='Super test form' SubHeaderTitle='Review Screen' key={uuidv4()} />
       <br />
       <br />
      
      <div style={{ width:'100%' }} className='pt-5'>
        <div className='container' style={{ backgroundColor: '#817CA5',borderRadius:'18px',width: '25%'}}>
          <div className='row '>
          <div className="input-icon container">
            <div className={`row `}>
              <div className={`form-group`}>
                <div className="d-flex justify-content-center flex-column">
                  
                    <div className='PasswordHolder p-3'>
                    <span className='text-white'>UserName</span>
                      <span className='text-white'>{UserNAme}</span>
                    </div>
                    <div className='EmailHolder p-3'>
                      <span className='text-white'>Email</span>
                      <span className='text-white'>{Email}</span>
                    </div>
                    <div className='CountryHolder p-3'>
                      <span className='text-white'>Coutnry</span>
                      <span className='text-white'>{Coutnry.value}</span>
                    </div>
                    <div className='p-3'>
                        <Button options={buttonOptions} height="47px" type="button" poinerEvent={poinerEvent} path={"StepThree"} ></Button> 
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default ReviewScreen;
