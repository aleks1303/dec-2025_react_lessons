import UsersComponent from "./components/UsersComponent.tsx";
import PostsComponents from "./components/PostsComponents.tsx";
import CommentsComponent from "./components/CommentsComponent.tsx";


const App = () => {
    return (
        <div className={'flex justify-around'}>
            <UsersComponent/>
            <PostsComponents/>
            <CommentsComponent/>
        </div>
    );
};

export default App;