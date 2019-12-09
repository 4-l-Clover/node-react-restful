const express = require("express");
const router = express.Router();
const Proposal = require("../models/db.js");

router
  .route("/")
  .get(function(req, res, next) {
    Proposal.find({ company_id: req.query.company_id }, function(
      err,
      proposals
    ) {
      if (err) res.send({ msg: "Something Went Wrong, Please try again" });
      else res.send(proposals);
    });
  })
  .post(function(req, res, next) {
    const saveData = {
      user_name: req.body.user_name,
      company_id: req.body.company_id,
      price: req.body.price,
      description: req.body.description,
      status: 0,
      updated_at: ""
    };

    const proposal = new Proposal(saveData);
    proposal.save(function(err, success) {
      if (err) res.send({ msg: "Something Went Wrong, Please try again" });
      else res.send({ msg: "Successfully Saved!" });
    });
  });

router.route("/:proposalId").put(function(req, res, next) {
  Proposal.findByIdAndUpdate(
    req.params.proposalId,
    { status: req.body.status },
    function(err) {
      if (err) res.send({ error: true });
      else res.send({ error: false });
    }
  );
});

module.exports = router;
