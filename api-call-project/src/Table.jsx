import React from 'react';
import NavBar from './NavBar'
import IncidentCardList from './IncidentCardList'

const Table = (props) => {
    return ( 
        <>
        <NavBar 
         page={props.page}
         navButtonHandler={props.navButtonHandler}
         typeSearch={props.typeSearch}/>
        <h4>Page {props.page}</h4>
        <IncidentCardList 
         isLoading = {props.isLoading}
         data = {props.data}/>
        </>
     );
}
 
export default Table;