import React, { useState } from 'react';
//Importowany jest react oraz hook useState z biblioteki reack

function SearchEngine() {
    const [query,setQuery] = useState('');
    //useState zazadza stanem zmienej

    const handleInputChange = (e) =>  {
        setQuery(e.target.value);
    };
    //funkcja do aktualizacij stanu quary przy kazdej zmienej wartosci input
    const styles = {
        SearchContainer:{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px',
        },
        SearchInput:{
            width: '200px',
            padding: '10px',
            border:'2px solid #ccc',
            borderRadius: '10px',
            fontSize: '16px',
            outline: 'none',
        },
        SearchInputFocus:{
        borderColor: '#007bff',
        },
        //style search
    };

    return (
    <div style={styles.SearchContainer}>
        <input
            style={{
                ...styles.SearchInput,
                ...(query ? styles.SearchInputFocus : {}),
            }}
            type="text"
            placeholder="Search..."
            value={query}
            onChange={handleInputChange}
        />
    </div>
);
}
export default SearchEngine;
