var express = require("express");
var router = express.Router();
var Proposal = require('../models/db.js');

// Register Proposals to Mongodb Database
router.post("/register", function(req, res, next) {
    var saveData = {
        user_name: req.body.user_name,
        company_id: req.body.company_id,
        price: req.body.price,
        description: req.body.description,
        status: 0,
        updated_at: ''
    };

    var proposal = new Proposal(saveData);
    proposal.save(function(err, success) {
        if (err) res.send({msg: "Something Went Wrong, Please try again"});
        else res.send({msg: "Successfully Saved!"});
    });
});

// get Proposals from Database by company_id
router.get("/getData", function(req, res, next) {
    Proposal.find({company_id: req.query.company_id}, function(err, proposals) {
        if (err) res.send({msg: "Something Went Wrong, Please try again"});
        else res.send(proposals);
    });
});

// update Proposal's status by company admin
router.get("/updateStatus", function(req, res, next) {
    Proposal.findByIdAndUpdate(req.query.id, {status: req.query.status}, function(err, proposals) {
        if (err) res.send({error: true});
        else res.send({error: false});
    });
});

module.exports = router;