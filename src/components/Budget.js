
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, currency } = useContext(AppContext);
    const [budgetValue, setBudgetValue] = useState(budget)

    const handleBudget = (e) => {
        console.log(e.target.value)
        setBudgetValue(e.target.value)
        dispatch({
            type: 'SET_BUDGET',
            payload: e.target.value,
        })
    }


    return (
        <div className='alert alert-secondary' style={{height:"57.6px"}}>
            <label> Budget:{currency}</label>
           <input type='number' value={budgetValue} onChange={handleBudget} max="20000" style={{width: "12em"}} />

        </div>
    );
};

export default Budget;