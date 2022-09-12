import React from "react";
import UserList from "../components/UsersList";

const Users = () => {
    const USERS=[
        {
            id: 'u1', 
            name: 'Rachel Weisberger', 
            image:'https://i.kym-cdn.com/entries/icons/facebook/000/001/300/kittycatdance.jpg', 
            places: 2
        }
    ];

    return <UserList items={USERS} />;
};

export default Users;
