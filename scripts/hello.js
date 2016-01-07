'use strict';

module.exports = (robot) => {
  robot.router.get('/hello', (req, res) => {
    res.send('hello');
});

robot.hear(/hello/i, (msg) => {
  msg.send('hello');
});
};