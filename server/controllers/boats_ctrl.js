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
            height,
            width,
            seats,
            fuel,
            weight,
            weightCapacity,
            storage,
            maxHp,
            price,
            model,
            featuredImage,
            description,
            images,
        } = req.body;

        try {
            await pool.query(
                'INSERT INTO boats(name, length, type, height, width, seats, fuel, weight, weight_capacity, storage, max_hp, price, model, featured_image, description, images)VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)',
                [
                    name,
                    length,
                    type,
                    height,
                    width,
                    seats,
                    fuel,
                    weight,
                    weightCapacity,
                    storage,
                    maxHp,
                    price,
                    model,
                    featuredImage,
                    description,
                    images,
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
        const {
            name,
            length,
            type,
            height,
            width,
            seats,
            fuel,
            weight,
            weightCapacity,
            storage,
            maxHp,
            price,
            model,
            featuredImage,
            description,
            images,
        } = req.body;
        try {
            const boat = await pool.query(
                `UPDATE boats SET name = $1, length = $2, type = $3, height = $4, width = $5, seats = $6, fuel = $7, weight = $8, weight_capacity = $9, storage = $10, max_hp = $11, price = $12, model = $13, featured_image = $14, description = $15, images = $16 WHERE id = ${id}`,
                [
                    name,
                    length,
                    type,
                    height,
                    width,
                    seats,
                    fuel,
                    weight,
                    weightCapacity,
                    storage,
                    maxHp,
                    price,
                    model,
                    featuredImage,
                    description,
                    images,
                ]
            ); // PUT BOAT

            res.json({ status: 200 });
        } catch (err) {
            console.error(err.message);
        }
    },
    async deleteBoat(req, res) {
        const id = parseInt(req.params.id, 10);
        try {
            const boat = await pool.query(`DELETE FROM boats WHERE id = ${id}`);

            res.json({ status: 200 });
        } catch (err) {
            console.error(err.message);
        }
    },
};
