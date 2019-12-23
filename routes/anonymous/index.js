const express = require('express');
const router = express();
const esportTournament = require("./readEsport");
const matchResult = require("./readMatchResult");
const playerList = require("./readPlayerList");
const tounamentCalendar = require("./readTournamentCalendar");
//  router root "/"
router.get('/',(req,res)=>{
    const context = {
        title : "Trang chủ"
    }
    res.render('anonymous/index',context)
})
router
    .get('/esport', esportTournament.read)
    .get('/esport/:id',esportTournament.readById)
    .get('/matchResult', matchResult.read)
    .get('/playerList', playerList.read)
    .get('/tournamentCalendar', tounamentCalendar.read);
module.exports = router;