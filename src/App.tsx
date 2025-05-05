import UsersComponent from "./components/UsersComponent.tsx";
import QuotesComponent from "./components/QuotesComponent.tsx";
import PostsComponent from "./components/PostsComponent.tsx";


const App = () => {
    return (
        <div className={'flex justify-around'}>
            <div className={'flex-1/5 ml-4'}><UsersComponent/></div>
            <div className={'flex-1/2 ml-4'}><QuotesComponent/></div>
            <div className={'flex-1/3'}><PostsComponent/></div>
        </div>
    );
};

export default App;