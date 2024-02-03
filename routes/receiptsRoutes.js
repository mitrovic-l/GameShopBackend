const {sequelize, Receipts} = require('../models');
const express = require('express');
const route = express.Router();

function authToken(req, res, next){
    try{
        const token = req.headers.authorization.split(' ')[1];
        const decTok = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        if (decTok){
            console.log("Korisnik ulogovan, authToken ide dalje.");
            next();
        } else{
            console.log("ULOGUJ SE!");
            return res.status(400).json({msg: "Korisnik nije ulogovan."});
        }
    }catch(err){
        console.log("Morate biti ulogovani.");
        return res.status(400).json({msg: "Korisnik nije ulogovan!"});
    }
}

route.use(express.json());
route.use(express.urlencoded({extended: true}));
//route.use(authToken);

route.get('/', (req, res) => {
    Receipts.findAll()
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json({msg: err}));
});

route.get('/:id', (req, res) => {
    Receipts.findByPk(req.params.id)
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json({msg: err}));
});

route.get('/user/:user', (req, res) => {
    Receipts.findAll({where: {user_receipt: req.params.user}})
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json(err));
});

route.post('/', async (req, res) => {
    try{
       await Receipts.create(req.body)
            .then(rows => res.json(rows))
            .catch(err => res.status(500).json({msg: err}));
    } catch(err){
        return res.status(400).json({msg: err});
    }
});

route.put('/:id', async (req, res) => {
    try{
        Receipts.findByPk(req.params.id)
            .then(receipt => {
                receipt.total = req.body.total,
                receipt.usersId = req.body.usersId,
                receipt.cartId = req.body.cartId,
                cart.save()
                    .then(rows => res.json(rows))
                    .catch(err => res.status(500).json({msg: err}));
            })
            .catch(err => res.status(500).json({msg: err}));
    } catch(err){
        return res.status(400).json({msg: err});
    }
});

route.delete('/:id', (req, res) => {
    try {
        Receipts.findByPk(req.params.id)
            .then(receipt => {
                receipt.destroy()
                    .then(rows => res.json(rows))
                    .catch(err => res.status(500).json({msg: err}));
            })
            .catch(err => res.status(500).json({msg: err}));
    } catch(err){
        return res.status(400).json({msg: err});
    }
});

module.exports = route;
