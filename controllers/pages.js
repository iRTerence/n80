function landingPage(req, res, next) {
    res.render('index', { title: 'Easy Money Sniper' });
  }


module.exports = {
    landingPage,
  };
  