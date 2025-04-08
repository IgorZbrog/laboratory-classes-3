const express = require('express');
const router = express.Router();
const { LOGOUT_LINKS } = require('../constants/navigation');

router.get('/', (req, res) => {
  res.render('logout', {
    headTitle: 'Logout',
    path: '/kill',
    menuLinks: LOGOUT_LINKS,
    activeLinkPath: '/kill'
  });
});

module.exports = router;