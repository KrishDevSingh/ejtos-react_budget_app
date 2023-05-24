
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import {AiFillMinusCircle} from 'react-icons/ai'
import {IoMdAddCircle} from 'react-icons/io'
import {FaTimesCircle} from 'react-icons/fa'

const ExpenseItem = (props) => {
    const { dispatch, currency} = useContext(AppContext);

    const handleIncreaseByTen = () => {
        const item= {
            cost: 10,
            name: props.name
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: item,
        });
    };

    const handleDecreaseByTen = () =>{
        const item = {
            cost: 10,
            name: props.name
        }

        dispatch({
            type: 'RED_EXPENSE',
            payload: item
        })
    }

    const handleDeleteItem = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'DELETE_EXPENSE',
            payload: item,
        });
    };


    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><IoMdAddCircle size='2.2em' color="green" onClick={handleIncreaseByTen}></IoMdAddCircle></td>

        <td><AiFillMinusCircle size='2.2em' color="red" onClick={handleDecreaseByTen}></AiFillMinusCircle></td>
        <td><FaTimesCircle  onClick={handleDeleteItem}></FaTimesCircle></td>
        </tr>
    );
};

export default ExpenseItem;