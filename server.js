const express = require("express");
const app = express();
app.use(express.json());

app.post("/api/emtl/calculate", (req, res) => {
    const { amount, sameAccount } = req.body;
    let levy = 0;
    if (!sameAccount && amount >= 10000) levy = 50;

    res.json({
        amount,
        sameAccount,
        levy,
        total: amount + levy,
        date: new Date()
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
