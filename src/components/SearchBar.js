import React, { useState } from 'react';
import { Paper, IconButton } from '@mui/material';
import { Search } from "@mui/icons-material"
import { useNavigate } from "react-router-dom";

const SearchBar = () => {

  const [filteredText, setFilteredText] = useState("");
  const navigate = useNavigate();


  /// Change Handler
  const changeHandler = (event) => {
       setFilteredText(event.target.value);
  }


  /// Submit Handler
  const submitHandler = (event) => {
      event.preventDefault();

      if(filteredText.trim().length === 0){
        return;
      }
      
      navigate(`/search/${filteredText}`);
      setFilteredText("");
  }

  return (
    <Paper component="form" onSubmit={submitHandler} sx={{borderRadius:15, border:"1px solid #e3e3e3", mr:{ sm : 5}, p:1}}>
        <input type="text" onChange={changeHandler} value={filteredText} className='search-bar' placeholder='Search..'/>
        <IconButton type="submit" sx={{p:"5px", color:"red"}}><Search/></IconButton>
    </Paper>
  )
}

export default SearchBar;