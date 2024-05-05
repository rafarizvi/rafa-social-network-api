const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reaction: {
            type: String, 
            required: true, 
            maxlength: 280,
        },
        username: {
            type: String, 
            required: true,
        },  
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAt => {
                const options = {
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true 
                };
                // Format the date using toLocaleString with custom options
                return createdAt.toLocaleString('en-US', options);
            }
        },
    },
    {
        toJSON: {
            getters: true, 
        },
        id: false,
    }
);

module.exports = reactionSchema;
