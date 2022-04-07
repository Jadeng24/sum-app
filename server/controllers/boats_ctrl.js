/* eslint-disable no-console */
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
        const {
            name,
            length,
            type,
            width,
            model,
            featuredImage,
            images,
            description,
        } = req.body;
        try {
            await pool.query(
                'INSERT INTO boats(name, length, type, width, model, featured_image, images, description)VALUES($1, $2, $3, $4, $5, $6, $7, $8)',
                [
                    name,
                    length,
                    type,
                    width,
                    model,
                    featuredImage,
                    images,
                    description,
                ],
                (response) => {
                    res.json({ status: 200 });
                },
                (err) => {
                    res.json({ status: 'Error' });
                }
            );
        } catch (err) {
            // eslint-disable-next-line no-console
            console.error(err.message);
        }
    },
    async updateBoat(req, res) {
        const id = parseInt(req.params.id, 10);
        try {
            // const boat = await pool.query(`UPDATE from boats where id = ${id}`); // PUT BOAT

            res.json({ status: 200 });
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
