const getUserLocalStorage = () => {
    const item = localStorage.getItem('user') || '';
    if (!item) {
        return {}
    } return  JSON.parse(item)
}

export {getUserLocalStorage}