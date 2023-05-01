const {Router} = require('express')
const { images } = require('../gallery');
const { items } = require('../items');

const router = Router()

router.get('/items', (req, res) => {
    const newItems = JSON.stringify(items)
    res.send(newItems);
})

router.get('/images', (req, res) => {
    const newItems = JSON.stringify(images)
    res.send(newItems);
})

module.exports = router;