import {useEffect} from "react";


const AuthResourceComponent = () => {
    useEffect(() => {
        loadAuthPosts()
    }, []);
    return (
        <div>
            AuthResourceComponent
            </div>
    );
};

export default AuthResourceComponent;