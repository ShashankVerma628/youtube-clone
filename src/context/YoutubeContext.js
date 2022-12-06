import React, { createContext, useContext, useState } from "react";

const YoutubeContext = createContext();

const initialState = {
    searchTerm: "",
    isLoggedIn: false,
    userDetails: {},
    searchResults: []
}

export const YoutubeContextProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState(initialState.searchTerm);
    const [isLoggedIn, setIsLoggedIn] = useState(initialState.isLoggedIn);
    const [userDetails, setUserDetails] = useState(initialState.userDetails);
    const [searchResults, setSearchResults] = useState(initialState.searchResults);

    const handleSearchTerm = (e) => {
        setSearchTerm(e.target.value);
    }

    return (
        <YoutubeContext.Provider value={{
            searchTerm: searchTerm,
            isLoggedIn: isLoggedIn,
            userDetails: userDetails,
            searchResults: searchResults,
            handleSearchTerm: handleSearchTerm,
            setIsLoggedIn: setIsLoggedIn,
            setUserDetails: setUserDetails,
            setSearchResults: setSearchResults
        }}>
            {children}
        </YoutubeContext.Provider>
    )
}

export const useStateContext = () => useContext(YoutubeContext);