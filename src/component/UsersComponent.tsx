import UserComponent from "./UserComponent.tsx";
import {useFetch} from "../hooks/useFetch.tsx";


const UsersComponent = () => {

// useFetch - це власний хук, де об'єднано два хуки: useState та useEffect
// і використовується в цьому компоненті
// це потрібно для зручності, коли повторюється використання хуків, або логіки,
// тоді можна винести в окремий власний хук

const users = useFetch();
    return (
        <div>
            {
               users.map(user => <UserComponent key={user.id} item={user}/>)
            }
        </div>
    );
};

export default UsersComponent;