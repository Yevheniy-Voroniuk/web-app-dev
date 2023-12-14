function setInLocalStorage() {
    const cookies = document.cookie;
    if (cookies) {
        const accessTokenCookie = decodeURIComponent(cookies).split(';').find(cookie => cookie.trim().startsWith('accessToken='));
        const accessTokenData = accessTokenCookie ? accessTokenCookie.split('=')[1] : null;
        const accessToken = accessTokenData.split('.')[1];
        if (accessToken) {
            localStorage.setItem('isAuth', true);
            const tokenData = JSON.parse(atob(accessToken));
            if (tokenData.role === 'admin') {
                localStorage.setItem('isAdmin', true);
            }
        }
    }
}

function deleteFromLocalStorage() {
    localStorage.removeItem('isAuth');
    localStorage.removeItem('isAdmin');
}

export {setInLocalStorage, deleteFromLocalStorage};