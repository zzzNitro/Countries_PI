const { Router } = require('express');
const { addActivity, getActivities } = require('../controllers/activityController');
const router = Router();

router.post('/', addActivity);
router.get('/', getActivities)

module.exports = router;