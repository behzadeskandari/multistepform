import React,{useState} from 'react'
import Select,{ StylesConfig,GroupBase } from 'react-select'


type MyComponentProps = {
  value: string;
  label: string;
};

const customStyles: StylesConfig<MyComponentProps, false, GroupBase<MyComponentProps>> = {
  control: (provided: object, state: { isFocused: boolean }) => ({
    ...provided,
    border: state.isFocused ? '2px solid #00aaff' : '2px solid #ccc',
    borderRadius: '0px',
    position: 'relative',
    textAlign: 'left', 
  }),
  indicatorSeparator: (provided: object) => ({
    ...provided,
    display: 'none', // Hide the indicator separator
  }),
  valueContainer: (provided:object) => ({
    ...provided,
    justifyContent: 'flex-end',
    display: "flex", // Align selected value to the left
  }),
  singleValue: (provided: object) => ({
    ...provided,
    marginLeft: 0, // Add left margin to selected value
    textAlign: 'left', // Align selected value text to the left
  }),
  placeholder: (provided:object) => ({
    ...provided,
    marginLeft: 0, // Add left margin to placeholder text
    textAlign: 'left', // Align placeholder text to the left
  }),
  menu: (provided: object) => ({
    ...provided,
    textAlign: 'left', // Align text to the left in the dropdown menu
  }),
  menuList: (provided: object) => ({
    ...provided,
    backgroundColor: 'white', // Set the background color to white
  }),
  // selected: (provided: object, state : any) => ({
  //   ...provided,
  //   backgroundColor: state.isSelected ? '#413C5F' : 'white',
  // }),
  // getRow: (provided: object, state: { isOdd: boolean }) => ({
  //   ...provided,
  //   backgroundColor: state.isOdd ? 'lightgrey' : 'white', // Background color for odd and even options
  // }),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  option: (provided: object, state: any) => {
    const isSelected = state.isSelected
    const backgroundColor = isSelected ? '#F6F4FF' : '#FFF'
    const color = isSelected ? '#413C5F' : '#413C5F'
   
    return {
      ...provided,
      backgroundColor,
      color,
      fontWeight: isSelected ? "800" : "400",
      ':after': {
        content: '"✔"',
        marginLeft: '8px',
        color:"purple",
        visibility: isSelected ? 'visible' : 'hidden',
        fontColor: "purple",
      },
    }
  },
}


const CustomSelect: React.FC<{ options: MyComponentProps[] , placeholder: string ,title : string, margin:string,setSelectedOption: React.Dispatch<React.SetStateAction<null>>,selectedOption:null }> = ({ options,placeholder,title,margin,setSelectedOption,selectedOption}) => {
  const [selectedOptionLocal, setSelectedOptionLocal] = useState(null);
 
  const handleChange = (selectedOption: any) => {
    setSelectedOption(selectedOption)
    
  };
  return (
    <>
      <div className='input-icon container'>
        <div className='row'>
          <div className={`form-group ${margin}`}>
              <label> {title} </label>
            <Select
                value={selectedOption}
                className="custom-select"
                options={options.map(option => ({ value: option.value, label: option.label }))}
                placeholder={placeholder}
                styles={customStyles}
                onChange={handleChange}
                />
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomSelect;
