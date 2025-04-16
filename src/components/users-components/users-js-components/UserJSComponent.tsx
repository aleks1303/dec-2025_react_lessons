import {IUserJs} from "../../../models/users-js/IUserJs.ts";
import {FC} from "react";

type MyPropsUsersTypeJs = {
    item: IUserJs
}
const UserJSComponent: FC<MyPropsUsersTypeJs> = ({item}) => {
    return (
        <div className={'flex border-1 p-2'}>
            <h2 className={'flex-1/5 mr-5'}>{item.id}. {item.name} {item.username}</h2>
            <div className={'flex-1/5 mr-5'}>
                <p>email: {item.email}</p>
                <p>phone: {item.phone}</p>
                <p>website: {item.website}</p>
            </div>
            <div className={'flex-1/5 mr-5'}>
                <ul>address:
                    <li>street: {item.address.street}</li>
                    <li>suite: {item.address.suite}</li>
                    <li>city: {item.address.city}</li>
                    <li>zipcode: {item.address.zipcode}</li>
                    <ul> geo:
                        <li>lat: {item.address.geo.lat}</li>
                        <li>lng: {item.address.geo.lng}</li>
                    </ul>
                </ul>
            </div >
            <div className={'flex-1/3 mr-5'}>
                <ul>company:
                <li>name: {item.company.name}</li>
                <li>catchPhrase: {item.company.catchPhrase}</li>
                <li>bs: {item.company.bs}</li>
                </ul>
            </div>

        </div>
    );
};

export default UserJSComponent;


// "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//     "street": "Kulas Light",
//         "suite": "Apt. 556",
//         "city": "Gwenborough",
//         "zipcode": "92998-3874",
//         "geo": {
//         "lat": "-37.3159",
//             "lng": "81.1496"
//     }
// },
// "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//     "name": "Romaguera-Crona",
//         "catchPhrase": "Multi-layered client-server neural-net",
//         "bs": "harness real-time e-markets"
// }