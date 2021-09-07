const moment = require('moment');

function load() {
  const {
    quitAt = '2018-04-13T11:00:00.000Z',
    cigPerDay = 18,
    packPrice = 34,
    cigPerPack = 20,
    currency = '₪',
  } = getOptions();
  const quitDate = new Date(quitAt);
  const years = moment().diff(quitDate, 'years');
  const months = moment().diff(quitDate, 'months') - (years * 12);
  document.getElementById('title').innerText = `smoke free for ${years} years and ${months} months`;
  const nis = parseInt(moment().diff(quitDate, 'days') * cigPerDay * (packPrice / cigPerPack));
  document.getElementById('sub-title').innerText = `which also makes me ${nis.toLocaleString()} ${currency} richer`;
}

function getOptions() {
  const url = new URL(window.location.href);
  const quitAt = url.searchParams.get('quitAt') || undefined;
  const cigPerDay = url.searchParams.get('cigPerday') || undefined;
  const packPrice = url.searchParams.get('packPrice') || undefined;
  const cigPerPack = url.searchParams.get('cigPerPack') || undefined;
  const currency = url.searchParams.get('currency') || undefined;
  return {quitAt, cigPerDay, packPrice, cigPerPack, currency};
}

document.addEventListener('DOMContentLoaded', load);
if (navigator.serviceWorker) {
  navigator.serviceWorker.register('./sw.js').then(function(registration) {
    console.log('Service worker registration succeeded:', registration);
  });
}
