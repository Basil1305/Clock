window.onload = function(){
	//const result = prompt('valueSpeed',[ ]);
	// let speed = result;
	setInterval(function() {
  var date = new Date(),
      positions = [
        date.getHours() / 24,
        date.getMinutes() / 60,
        date.getSeconds() / 60
      ],
      clock = document.querySelector('#wat');

      let hours = document.querySelector('#hours'); hours.textContent = date.getHours();
      let minutes = document.querySelector('#minutes'); minutes.textContent = date.getMinutes();
      let seconds = document.getElementById("seconds"); seconds.textContent = date.getSeconds();
      
      

  positions.forEach(function(rotation, index) {
    clock.children[index].style.transform = 'rotate(' + rotation + 'turn)';
  });


}, //${result}
1000)};

