import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Select from 'react-select';

const Currency = () => {

  const {dispatch } = useContext(AppContext);

  const options = [
    { value: '$', label: '$ Dollar' },
    { value: '£', label: '£ Pound' },
    { value: '€', label: '€ Euro' },
    { value: '₹', label: '₹ Rupee' }
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);

 const changeCurrency = (selectedOption)=>{
    setSelectedOption(selectedOption);
            dispatch({
                type: 'CHG_CURRENCY',
                payload: selectedOption.value,
            })
    }
    

  return (

        <div className='alert alert-secondary' style={{height:"57.6px", display:'flex', alignItems:"center"}} > 


<label style={{
          height: '40px',backgroundColor:'#8cff8c', color:"white",display:"flex", alignItems:"center", justifyContent:"center", borderRadius:'2px'}}>Currency
 

    <Select
    name='currency'
    id='currency'
      value={selectedOption}
      onChange={changeCurrency}
      options={options}
      styles={{
        control: (provided) => ({
            ...provided,
            height: '30px',
            width: '150px', // Adjust the width as per your preference
            backgroundColor: '#8cff8c',
            color: '#ffffff',
            display: 'inline-flex',
            border:"none"
          }),  
          dropdownIndicator: (provided) => ({
            ...provided,
            color: '#ffffff',
            border: 'none' // Set the color of the dropdown arrow
          }),
          singleValue: (provided) => ({
            ...provided,
            color: '#ffffff'
          }),
        
        option: (provided, state) => ({
            ...provided,
            backgroundColor: '#8cff8c',
            color: '#000000',
            ':hover': {
              backgroundColor: '#ffffff',
              color: '#000000'
            }
          })
      }}
    />

</label>
    </div>
    );
};

export default Currency;