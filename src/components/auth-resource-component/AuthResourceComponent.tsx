import {loadAuthPosts, refresh} from "../../services/api.service.tsx";

const AuthResourceComponent = () => {

   loadAuthPosts().then(response => {
       console.log(response)
   }).catch(reason => {
       console.log(reason);
       refresh()
           .then(() => loadAuthPosts())
               .then(value => console.log(value))
   })
    return (
        <div>

            </div>
    );
};

export default AuthResourceComponent;