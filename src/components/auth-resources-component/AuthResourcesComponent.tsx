import {useEffect, useState} from "react";
import {loadAuthComments, refresh} from "../../services/api.service.tsx";
import {IComment} from "../../models/IComment.ts";
import AuthResourceComponent from "./AuthResourceComponent.tsx";


const AuthResourcesComponent = () => {
    const [comments, setComments] = useState<IComment[]>([])
    useEffect(() => {
        loadAuthComments().then(response => {
            setComments(response)
        }).catch(reason => {
            console.log(reason)
            refresh()
                .then(() => loadAuthComments())
                .then(response => setComments(response))

        })
    }, []);
    return (
        <div>
            {
                comments.map(comment => <AuthResourceComponent key={comment.id} item={comment}/>)
            }
        </div>
    );
};

export default AuthResourcesComponent;