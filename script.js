'use strict';
document.getElementById('year').textContent = new Date().getFullYear();
const filter = document.getElementById('property-filter');
const cards = [...document.querySelectorAll('.property-card')];
filter.addEventListener('change', () => {
  let count = 0;
  for (const card of cards) {
    const visible = filter.value === 'all' || (filter.value === '165' && Number(card.dataset.price) <= 165) || (filter.value === 'extra' && card.dataset.extra === 'true');
    card.hidden = !visible;
    if (visible) count++;
  }
  document.getElementById('result-count').textContent = `${count} ${count === 1 ? 'property' : 'properties'}`;
});