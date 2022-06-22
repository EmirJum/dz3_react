import React from "react";
import UsersList from "../../components/usersList/UsersList";
function UsersPage () {
    const users = ["Dastan", "   Emir", "   Elina"]

    const user = {
        name: "Emir",
        age: "19",
        position: "Front-end dev"
    }
    return(
        <div>

            <h1>Список пользователей</h1>
            <UsersList usersProps={users} user={user}/>

        </div>
    )
}
export default UsersPage;