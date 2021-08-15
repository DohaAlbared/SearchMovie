import React from 'react'
import {GiMagnifyingGlass} from "react-icons/gi"
import 'bootstrap/dist/css/bootstrap.css';
import {DropdownButton, Dropdown} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { updateMovie } from './actions/updateAction';
import { useState } from 'react';
import { BrowserRouter as Router, useHistory} from "react-router-dom";


export default function MoviesList(){
    const movieData = useSelector(state => state.update.movie)
    const dispatch =  useDispatch()
    const history = useHistory()

    const [year, setYear] = useState()
    const [movie, setMovie] = useState("")
    const [feedBack,setFeedBack] = useState()

    var viewColor = movieData.Response === "True"? "green":"grey"
    var years = [1999]
    for(var i = 2000;i <2021;i++){
        years.push(i)
    }   
    if(movieData.Response ==="False"){
        setFeedBack("Movie is not found")
    } 

    const handleSelect =(eventkey)=>{
        setYear(eventkey)  
    }
    const myTextChangeHandler =(event)=>{
        setMovie( event.target.value)
    }
    const Redirect =()=>{
        if(movieData.Response === "True"){
            history.push({
                pathname: "/Details",
                search: '?Details',
            })
        }

    }
    const fetchMovie=()=>{
        if(movie === ""){
            setFeedBack( "Please type in a movie name in the search bar")
        }else{
            setFeedBack("")
            fetch("http://www.omdbapi.com/?apikey=3e3f65ea&t=" + movie  +"&y" + year)
            .then(response => response.json())
            .then(data => dispatch(updateMovie(data)))
        }
    }      
        return(
            <div  className = "ListPage">
                <h1>Search A Movie </h1>
                <div className = "ListBox">                
                <div className = "filters">
                    <div className ="searchBar">
                        <input className = "searchField"
                            type='text'
                            placeholder = "Search by movie name"
                            onChange = {myTextChangeHandler}
                        />
                        <GiMagnifyingGlass size = "20px" color = "grey"/>
                    </div>
                    <div className= "dropDown" >
                        <DropdownButton variant = "success" id = "dropdown-basic-button" title= "year" onSelect = {handleSelect}>
                        {years.map( year => <Dropdown.Item eventKey = {year}> {year} </Dropdown.Item>)}
                        </DropdownButton>
                    </div>    
                    <button className = "btnn" onClick = {fetchMovie}>Submit</button>
                </div>              
                <hr/>
                <div>
                     {feedBack} 
                     <p>Title: {movieData.Title} </p>
                     <p>Year: {movieData.Year}</p>
                     <button style = {{backgroundColor: viewColor}}className = "btnn"  onClick = {Redirect} >View Details</button>
                </div>
                </div>
            </div>
        )
}
