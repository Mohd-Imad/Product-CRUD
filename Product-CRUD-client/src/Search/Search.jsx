import React, { useState } from 'react';

// This holds a list of some fiction people
// Some  have the same name but different age and id
const USERS = [
    { id: 1, name: 'Andy', age: 32 },
    { id: 2, name: 'mandy', age: 25 },
    { id: 3, name: 'sandy', age: 45 }
   
];  
let Search = () => {
    
    // the value of the search field 
    const [name, setName] = useState('');
    // the search result
    const [foundUsers, setFoundUsers] = useState(USERS);
    const filter = (e) => {
        const keyword = e.target.value;
        console.log(keyword);
        if (keyword !== '') {
            const results = USERS.filter((user) => {
                return user.name.toLowerCase().startsWith(keyword.toLowerCase());
                // Use the toLowerCase() method to make it case-insensitive
            });
            setFoundUsers(results);
        } else {
            setFoundUsers(USERS);
            // If the text field is empty, show all users
                }
        setName(keyword);
    };
    return (
        <div className="container">
            <pre>{JSON.stringify(foundUsers)}</pre>
            <input
                type="search"
                value={name}
                onClick={filter}
                className="input"
                placeholder="Filter"
            />{/* <input t */}
            <div className="user-list">
                {foundUsers && foundUsers.length > 0 ? (
                    foundUsers.map((user) => (
                        <li key={user.id} className="user">
                            <span className="user-id">{user.id}</span>
                            <span className="user-name">{user.name}</span>
                            <span className="user-age">{user.age} year old</span>
                        </li>
                    ))
                ) : (
                        <h1>No results found!</h1>
                    )}
            </div>
        </div>
    );
}
export default Search;