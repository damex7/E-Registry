function login(username, password){

    const user = users.find(user =>

        user.username === username &&
        user.password === password

    );

    if(user){

        sessionStorage.setItem(
            "currentUser",
            JSON.stringify(user)
        );

        return user;

    }

    return null;

}