import React,{ChangeEvent} from 'react'
import { useNavigate } from "react-router-dom";

// Define the props type for your component
type MyComponentProps = {
  Title: string;
  BGColor: string; 
  FontColor: string; 
  poinerEvent: boolean;
};
type ButtonType = {
  ButtonType: "button" | "submit" | "reset"; 
}

// Create your functional component
const Button: React.FC<{options:MyComponentProps,height:string,type:string,poinerEvent:boolean,path:string
}> = ({
  options,
  height,
  type,
  poinerEvent,
  path
}) => {
  
  const navigate = useNavigate();

  const HandleClick = (event:  any) => {
    var e = event.target.value;
    console.log(e);
     navigate(`${path}`);
    path = "";
  
  };

  return (
    // padding: '10px 15px 10px 15px',  margin :'9px'
    <button onClick={HandleClick} type={"button"} style={{ backgroundColor:options.BGColor, color: options.FontColor , fontSize: '15px',width: '100%',borderRadius:'3px',pointerEvents : options.poinerEvent === poinerEvent ? "auto" : "none" }}>
      {options.Title}
    </button>
  )
}

export default Button;