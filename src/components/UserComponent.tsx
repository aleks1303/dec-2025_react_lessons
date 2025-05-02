import {memo} from "react";

// memo не дає рірендериться цьому компоненту ще раз коли він викликається в UsersComponent
// це необхідно коли компонент важкий, тобто має велику логіку та цикли
// в іншому випадку він непотрібний
const UserComponent = memo(() => {
    console.log('user component')
    return (
        <div>
            UserComponent
        </div>
    );
})

export default UserComponent;