
var button = document.getElementById('like'),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "Liked: " + count;
};
