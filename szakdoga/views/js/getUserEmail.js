app.get('/getUserEmail', (req, res) => {
    const userString = req.cookies.userData;

    if (!userString) {
        return res.status(401).json("Hozzáférés megtagadva!");
    }

    const user = JSON.parse(userString);
    const userEmail = user.email;

    res.json({ userEmail });
});