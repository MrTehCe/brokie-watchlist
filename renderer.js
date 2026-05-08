const watchlistEl = document.getElementById('watchlist');

const symbols = [
  { symbol: 'MES', price: 5312.75, change: 18.5, changePct: 0.35 },
  { symbol: 'MNQ', price: 28814.50, change: 87.25, changePct: 0.30 },
];

function render() {
  watchlistEl.innerHTML = symbols.map(s => {
    const isUp = s.change > 0;
    return `
      <div class="symbol">
        <div class="left">
          <strong>${s.symbol}</strong>
        </div>
        <div style="text-align: right;">
          <div class="price ${isUp ? 'green' : 'red'}">
            ${s.price.toFixed(2)}
          </div>
          <div class="change ${isUp ? 'green' : 'red'}">
            ${isUp ? '+' : ''}${s.change.toFixed(2)} (${s.changePct}%)
          </div>
        </div>
      </div>
    `;
  }).join('');
}

render();
// TODO: Connect to real data later
setInterval(render, 2000);