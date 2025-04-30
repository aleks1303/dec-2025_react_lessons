// import {useEffect} from "react";
// import {login} from "../../services/api.service.tsx";
//
//
// const LoginComponent = () => {
//     useEffect(() => {
//             login({
//            username: 'noahh',
//            password: 'noahhpass',
//            expiresInMins: 1
//         })
//     }, []);
//     return (
//         <div>
//
//         </div>
//     );
// };
//
// export default LoginComponent;
import {useState} from "react";
import {login} from "../../services/api.service.tsx";
import {LoginData} from "../../models/LoginData.ts";


const LoginComponent = () => {
    const [formData, setFormData] = useState<LoginData>({
        username: '',
        password: '',
        expiresInMins: 60, // за замовчуванням, можна змінити
    });

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const user = await login(formData);
            console.log("Успішний вхід:", user);
        } catch (err) {
            console.log(err)
            setError('Невірний логін або пароль');
        } finally {
            setLoading(false);
        }
    };
    const classBaseInput = 'border-1'
    return (
        <div>
            <h2>Логін</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Ім'я користувача:</label>
                    <input  className={classBaseInput}
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Пароль:</label>
                    <input className={classBaseInput}
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Завантаження...' : 'Увійти'}
                </button>
                {error && <p style={{color: 'red'}}>{error}</p>}
            </form>
        </div>
    );
};

export default LoginComponent;
