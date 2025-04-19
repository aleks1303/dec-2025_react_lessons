import CharactersComponent from "../components/character-components/CharactersComponent.tsx";
import PaginationComponent from "../components/pagination-compnents/PaginationComponent.tsx";


const CharacterPage = () => {
    return (
        <div>
            <CharactersComponent/>
            <hr/>
            <PaginationComponent/>
            </div>

    );
};

export default CharacterPage;