function newUser(user, age, country) {
    let uID = Math.random();
    return {
        user: user,
        age: age,
        country: country,
        id: uID
    }
}