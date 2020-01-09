const express = require('express');
const router = express();
const createEsport = require("./createEsport");
const inputMatchResult = require("./inputMatchResult");
const inputPlayerList = require("./inputPlayerList");
const inputPlayer = require("./inputPlayer");
const createTounamentCalendar = require("./createTournamentCalendar");
const updateCalendar = require("./updateCalendar");
const updatePlayerList = require("./updatePlayerList");
const login = require('./securities/login');
//  router root "/manager"
router.get('/', (req, res) => {
    const context = {
        title: "Trang Quản Lí"
    }
    res.render('managers/index', context)
})
router.get('/login', login.get);
router.get('/createEsport', createEsport.get);
router.get('/createTournamentCalendar', createTounamentCalendar.get);
router.get('/inputMatchResult', inputMatchResult.get);
router.get('/inputPlayerList', inputPlayerList.get);
router.get('/inputPlayerList/inputPlayer', inputPlayer.get);
router.get('/updateCalendar', updateCalendar.get);
router.get('/updatePlayerList', updatePlayerList.get);
// .get('/createEsport', esportTournament.read)
// .get('/esport/:id',esportTournament.readById)
// .get('/inputMatchResult', matchResult.read)
// .get('/playerList', playerList.read)
// .get('/tournamentCalendar', tounamentCalendar.read);







router.post('/createEsport', createEsport.post);

module.exports = router;