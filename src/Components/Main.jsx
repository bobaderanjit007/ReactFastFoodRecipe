import React from 'react';
import MealDetails from './MealDetails';
import MealList from './MealList';
import SearchBar from './SearchBar';
import Loader from './Loader';
import { useGlobalContext } from '../Context/ContextApi';

const Main = () => {
    const { loader, showPopup } = useGlobalContext();
    return (
        <>
            <div className="container">
                <div className="meal-wrapper">
                    <SearchBar />
                    {loader ? <Loader /> : <MealList />}
                    {showPopup ? <MealDetails /> : <></>}
                </div>
            </div>
        </>
    )
}

export default Main;