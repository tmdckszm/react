import React from 'react';

const UserList = ({ users }) => {
    console.log(users)
    return(
        <div>
            {users.map(user => {
                return(<div class="card" key={user.id}>
                    <div className="card-body">
                        {user.name}
                    </div>
                </div>);
            })}
        </div>
    );
};

export default UserList;