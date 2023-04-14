const db = require("../models");
const Transaction = db.transaction;

exports.create = (req, res) => {
    const transaction = new Transaction({
        value: req.body.value,
        sender: req.body.sender,
        receiver: req.body.receiver,
        hash: req.body.hash
    });

    transaction
        .save(transaction)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the transaction."
            });
        });

};

exports.findAll = (req, res) => {
    const content = req.query.content;
    const condition = content ? { content: { $regex: new RegExp(content), $options: "i" } } : {};

    Transaction.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving transactions."
            });
        });

};

exports.deleteAll = (req, res) => {
    Transaction.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Transactions were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all transactions."
            });
        });
};
