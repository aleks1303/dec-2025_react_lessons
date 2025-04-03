import {simpsons} from "../data/simpsons.ts";
import CharacterComponent from "./CharacterComponent.tsx";

const FamilyComponent = () => {
    return (
        <div>
            {
                simpsons.map((simpson, index) => (
                    <CharacterComponent key={index} simpson={simpson}>
                        <p className={'w-2/3'}>{simpson.info}</p>
                    </CharacterComponent>
                ))
            }
        </div>
    );
};

export default FamilyComponent;