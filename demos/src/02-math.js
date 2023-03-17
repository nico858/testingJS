function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return null;
  return a / b;
}

function secondsToHours(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = (seconds % 3600) % 60;

  return `${hours}:${minutes}:${secs}`;
}

module.exports = {
  sum,
  multiply,
  divide,
  secondsToHours,
};
