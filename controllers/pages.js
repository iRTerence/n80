function landingPage(req, res, next) {
    res.render('index', { title: 'Easy Money Sniper' });
  }

function menuPage(req, res, next) {
    res.render('menu', );
  }

module.exports = {
    landingPage,
    menuPage,
  };
  