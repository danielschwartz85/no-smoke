const moment = require('moment')

function load() {
    const quitDate = new Date('2018-04-13T11:00:00.000Z')
    const years = moment().diff(quitDate, 'years')
    const months = moment().diff(quitDate, 'months') - (years * 12)
    document.getElementById('title').innerText = `smoke free for ${years} years and ${months} months`
    console.log(moment().diff(quitDate, 'days'))
    const nis = parseInt(moment().diff(quitDate, 'days') * 18 * (34 / 20))
    document.getElementById('sub-title').innerText = `which also makes me ${nis} richer`
}

document.addEventListener("DOMContentLoaded", load);