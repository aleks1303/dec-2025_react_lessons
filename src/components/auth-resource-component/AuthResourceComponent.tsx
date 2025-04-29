import {loadAuthPosts} from "../../services/api.service.tsx";

const AuthResourceComponent = () => {

   loadAuthPosts().then(response => {
       console.log(response)
   })
    return (
        <div>

            </div>
    );
};

export default AuthResourceComponent;