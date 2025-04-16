import {IUsersDummy} from "../../../models/users-dummy/IUsersDummy.ts";
import {FC} from "react";

type PropsUserDummyType = {
    item: IUsersDummy
}
const UserDummyComponent: FC<PropsUserDummyType> = ({item}) => {
    return (
        <div className={'flex p-2 border-y-1'}>
            <div className={'flex-1/5 mr-2'}>
                <h2>{item.id}. {item.firstName} {item.lastName} {item.maidenName}</h2>
                <p>age: {item.age}</p>
                <p>gender: {item.gender}</p>
                <p>email: {item.email}</p>
                <p>phone: {item.phone}</p>
                <p>username: {item.username}</p>
                <p>password: {item.password}</p>
                <p>birthDate: {item.birthDate}</p>
                <p>bloodGroup: {item.bloodGroup}</p>
                <p>height: {item.height}</p>
                <p>weight: {item.weight}</p>
                <p>eyeColor: {item.eyeColor}</p>
                <ul> hair:
                    <li> - color: {item.hair.color}</li>
                    <li> - type: {item.hair.type}</li>
                </ul>
            </div>
            <div className={'flex-1/6 mr-2'}>
                <p>ip: {item.ip}</p>
                <ul> address:
                    <li>country: {item.address.country}</li>
                    <li>city: {item.address.city}</li>
                    <li>address: {item.address.address}</li>
                    <li>state: {item.address.state}</li>
                    <li>stateCode: {item.address.stateCode}</li>
                    <li>postalCode: {item.address.postalCode}</li>
                    <ul>coordinates:
                        <li>lat: {item.address.coordinates.lat}</li>
                        <li>lng: {item.address.coordinates.lng}</li>
                    </ul>
                </ul>
            </div>
            <div className={'flex-1/5 mr-2'}>
                <p>macAddress: {item.macAddress}</p>
                <p>university: {item.university}</p>
                <ul>bank:
                    <li>cardExpire: {item.bank.cardExpire}</li>
                    <li>cardNumber: {item.bank.cardNumber}</li>
                    <li>cardType: {item.bank.cardType}</li>
                    <li>currency: {item.bank.currency}</li>
                    <li>iban: {item.bank.iban}</li>
                </ul>
            </div>
            <div className={'flex-1/5 mr-2'}>
                <ul>company:
                    <li>department: {item.company.department}</li>
                    <li>name: {item.company.name}</li>
                    <li>title: {item.company.title}</li>
                    <ul> address:
                        <li>country: {item.company.address.country}</li>
                        <li>city: {item.company.address.city}</li>
                        <li>address: {item.company.address.address}</li>
                        <li>state: {item.company.address.state}</li>
                        <li>stateCode: {item.company.address.stateCode}</li>
                        <li>postalCode: {item.company.address.postalCode}</li>
                        <ul>coordinates:
                            <li>lat: {item.company.address.coordinates.lat}</li>
                            <li>lng: {item.company.address.coordinates.lng}</li>
                        </ul>
                    </ul>
                </ul>
            </div>
            <div className={'flex-1/4 mr-2'}>
                <p>ein: {item.ein}</p>
                <p>ssn: {item.ssn}</p>
                <p>userAgent: {item.userAgent}</p>
                <ul>crypto
                    <li>coin: {item.crypto.coin}</li>
                    <li>wallet: {item.crypto.wallet}</li>
                    <li>network: {item.crypto.network}</li>
                </ul>
                <p>role: {item.role}</p>
            </div>
        </div>
    );
};

export default UserDummyComponent;
