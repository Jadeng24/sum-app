// eslint-disable-next-line import/extensions
const pool = require('../../db.ts');

module.exports = {
    async getBoats(req, res) {
        try {
            const allBoats = await pool.query('SELECT * FROM boats');

            res.json({ data: await allBoats.rows });
        } catch (err) {
            console.error(err.message);
        }
    },
    async createBoat(req, res) {
        const { name, email, message, copy } = req.body;
        try {
            await pool.query(
                "INSERT INTO boats(name, length, type, width, model, featured_image, description)VALUES('Aluminum Custom Jetboat', 14, 'aluminum', 6, 'sumv1aluminum', 'https://www.discoverboating.com/sites/default/files/styles/large/public/jet_boat2.JPG?h=736091d5&itok=l_f8x_EE', 'Check out the all-new 2022 aluminum jetboat from Sport Utility Marine.')",
                (response) => {
                    res.json({ status: 200 });
                },
                (err) => {
                    res.json({ status: 'Error' });
                }
            );
        } catch (err) {
            console.error(err.message);
        }
    },
    async deleteBoat(req, res) {
        const id = parseInt(req.params.id, 10);
        try {
            const boat = await pool.query(`DELETE from boats where id = ${id}`);

            res.json({ status: 200 });
        } catch (err) {
            console.error(err.message);
        }
    },
};
