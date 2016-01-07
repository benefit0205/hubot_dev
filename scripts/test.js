'use strict';

module.exports = (robot) => {
  robot.router.get('/github/webhook', (req, res) => {
    let event_type = req.get('X-Github-Event');

  res.send(event_type);
});
};
