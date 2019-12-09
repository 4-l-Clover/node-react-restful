const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/testdb');

const proposalSchema = new Schema({
    description: String,
    status: Number, // 0: pending, 1: accepted, 2: rejected
    price: Number,
    company_id: Number,
    user_name: String,
    created_at: {type: Date, default: Date.now},
    updated_at: Date
});
 
module.exports = mongoose.model('Proposal', proposalSchema);