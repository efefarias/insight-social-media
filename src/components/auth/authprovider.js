const bcrypt = require('bcryptjs')

export default {
    // called when the user attempts to log in
    login: ({ username, password }) =>  {
        var salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);
        const request = new Request('http://localhost:3000/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, hashedPassword }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
        .then((response) => {
            if (response.status < 200 || response.status >= 300) {
                throw new Error(response.statusText);
            }
            return response.json()
                .then((auth) => {
                    localStorage.setItem('auth', JSON.stringify(auth));
                });
        })   
    },
    // called when the user clicks on the logout button
    logout: () => {
        localStorage.removeItem('auth');
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        return localStorage.getItem('auth')
            ? Promise.resolve()
            : Promise.reject();
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
};