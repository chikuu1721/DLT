document.getElementById('poll-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var selectedColor = document.querySelector('input[name="color"]:checked').value;
    // Simulate sending vote to server
    alert('Vote submitted: ' + selectedColor);
    // Update UI with results (this is just a placeholder)
    document.getElementById('poll-container').style.display = 'none';
    document.getElementById('results-container').style.display = 'block';
    document.getElementById('results').innerHTML = 'Poll results: <br>' + selectedColor + ': 50%';
});
