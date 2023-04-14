module.exports = mongoose => {
    const Transaction = mongoose.model(
        "transaction",
        mongoose.Schema(
            {
                value: Number,
                sender: String,
                receiver: String,
                hash: { type : String , unique : true }
            },
            { timestamps: true }
        )
    );

    Transaction.createIndexes();

    return Transaction;
};
