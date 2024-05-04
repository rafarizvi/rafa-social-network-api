// const { Schema, model } = require('mongoose');
// const reactionSchema = require('./reaction');

// const thoughtSchema = new Schema(
//     {
//         thoughtText: {
//             type: string,
//             required: true, 
//             max_length: 280,
//         },
//         createdAt: {
//             type: Date,
//             default: Date.now,
//         },
//         username: {
//             type: string,
//             required: true,
//         },
//         reactions: [reactionSchema],
//     },
//     {
//         toJSON: {
//             getters: true,
//         },
//     }
// );

// const Thought = model('thought', thoughtSchema);

// module.exports = Thought;
