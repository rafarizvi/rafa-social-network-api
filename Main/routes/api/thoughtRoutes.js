const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought).put(updateThought);

// /api/thoughts/:thoughtId/reaction
router.route('/:thoughtId/reaction').post(addReaction);

// /api/thoughts/:thoughtId/reaction/:reactionId
router.route('/:thoughtId/reaction/:reactionId').delete(removeReaction);

module.exports = router;
