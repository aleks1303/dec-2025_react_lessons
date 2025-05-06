

const HeaderComponent = () => {
    return (
        <div className={'flex justify-between'}>
                <div className={'flex-1/1'}>
                    <ul className={'flex justify-between m-5'}>
                        <li>home</li>
                        <li>about</li>
                        <li>contacts</li>
                        <li>login</li>
                    </ul>
                </div>
                <div className={'flex-1/10'}>
                    <button></button>
                    <button></button>
                </div>
        </div>
    );
};

export default HeaderComponent;