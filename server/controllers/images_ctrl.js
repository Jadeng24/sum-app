/* eslint-disable no-console */
// eslint-disable-next-line import/extensions
const pool = require('../../db.ts');

module.exports = {
    async getImages(req, res) {
        // try {
        //     const allBoats = await pool.query('SELECT * FROM boats');
        //     res.json({ data: await allBoats.rows });
        // } catch (err) {
        //     console.error(err.message);
        // }
    },
    async uploadImages(req, res) {
        // const { name, length, type, width, model, featuredImage, description } =
        //     req.body;
        // try {
        //     await pool.query(
        //         "INSERT INTO boats(name, length, type, width, model, featured_image, description)VALUES($1, $2, $3, $4, $5, 'https://www.discoverboating.com/sites/default/files/styles/large/public/jet_boat2.JPG?h=736091d5&itok=l_f8x_EE', $6)",
        //         [name, length, type, width, model, description],
        //         (response) => {
        //             res.json({ status: 200 });
        //         },
        //         (err) => {
        //             res.json({ status: 'Error' });
        //         }
        //     );
        // } catch (err) {
        //     // eslint-disable-next-line no-console
        //     console.error(err.message);
        // }
    },

    async deleteImage(req, res) {
        // const id = parseInt(req.params.id, 10);
        // try {
        //     const boat = await pool.query(`DELETE from boats where id = ${id}`);
        //     res.json({ status: 200 });
        // } catch (err) {
        //     console.error(err.message);
        // }
    },
};
