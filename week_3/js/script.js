console.log("JS is working.");

function selectSize() {
  const size = document.getElementById('size').value;
  document.getElementById('selected-size').textContent = size ? `You selected: ${size}` : '';
}

function selectColor() {
  const color = document.getElementById('color').value;
  document.getElementById('selected-color').textContent = color ? `You selected: ${color}` : '';
}
