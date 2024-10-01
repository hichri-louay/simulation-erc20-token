import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, ArcElement, Tooltip, Legend } from 'chart.js';
import { Line, Pie } from 'react-chartjs-2';
import './App.css';

// Register the required components
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, ArcElement, Tooltip, Legend);

function App() {
  // Tokenomics details
  const totalSupply = 1000000000; // 1 billion total supply
  const firstRoundMint = totalSupply * 0.1; // First round mints 10% of the total supply (100 million tokens)

  // Token allocations for the first round
  const airdropAmount = firstRoundMint * 0.1; // 10% for airdrop
  const seedSale = firstRoundMint * 0.7; // 70% for seed sale
  const burnAmount = firstRoundMint * 0.1; // 10% to be burned
  const reservedTokens = firstRoundMint * 0.1; // 10% reserved

  // Example supply simulation data (starting with first round mint)
  const years = [2024, 2025, 2026, 2027, 2028];
  const supply = [0.1, 0.3, 0.5, 0.7, 1]; // Supply growth over time (in billions)

  // Simulate token distribution (e.g., pie chart for first round distribution)
  const distributionData = {
    labels: ['Airdrop', 'Seed Sale', 'Reserved', 'Burned'],
    datasets: [
      {
        data: [airdropAmount, seedSale, reservedTokens, burnAmount], // Include airdrop, seed sale, reserved, and burned tokens
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF9F40'],
      },
    ],
  };

  // Data for the supply simulation (Line Chart)
  const supplyData = {
    labels: years,
    datasets: [
      {
        label: 'Total Supply (Billion)',
        data: supply,
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
    ],
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Futira Token Simulation</h1>
        <p>Total Supply: {totalSupply.toLocaleString()} Tokens</p>
        <p>First Round Mint: {firstRoundMint.toLocaleString()} Tokens (10% of Total Supply)</p>
        <p>Airdrop: {airdropAmount.toLocaleString()} Tokens (10% of First Round Mint)</p>
        <p>Seed Sale: {seedSale.toLocaleString()} Tokens (70% of First Round Mint)</p>
        <p>Reserved Tokens: {reservedTokens.toLocaleString()} Tokens (10% of First Round Mint)</p>
        <p>Burned Tokens: {burnAmount.toLocaleString()} Tokens (10% of First Round Mint)</p>
        <p className="burn-description">
          <strong>Why Burn 10%?</strong> To maintain equilibrium because we are distributing 10% of the supply as an airdrop. We anticipate that many users who receive airdropped tokens will sell them, so we are burning 10% of the minted tokens to counterbalance this selling pressure and help maintain token value stability.
        </p>
      </header>

      {/* Line Chart for Supply Simulation */}
      <div className="chart-container">
        <h2>Supply Simulation Over Time</h2>
        <Line data={supplyData} />
      </div>

      {/* Pie Chart for First Round Token Distribution */}
      <div className="chart-container">
        <h2>First Round Token Distribution</h2>
        <Pie data={distributionData} />
      </div>
    </div>
  );
}

export default App;
