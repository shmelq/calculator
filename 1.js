function plus() {
	    var num1, num2, result;
	     num1 = document.getElementById('n1').value;
		 num1 = parseFloat(num1);
		 
	     num2 = document.getElementById('n2').value;
		 num2 = parseFloat(num2);
		 
		 result = num1 + num2;
		 document.getElementById('out').innerHTML = result;
	  }
function minus() {
	    var num1, num2, result;
	     num1 = document.getElementById('n1').value;
		 num1 = parseFloat(num1);
		 
	     num2 = document.getElementById('n2').value;
		 num2 = parseFloat(num2);
		 
		 result = num1 - num2;
		 document.getElementById('out').innerHTML = result;
	  }
	  function um() {
	    var num1, num2, result;
	     num1 = document.getElementById('n1').value;
		 num1 = parseFloat(num1);
		 
	     num2 = document.getElementById('n2').value;
		 num2 = parseFloat(num2);
		 
		 result = num1 * num2;
		 document.getElementById('out').innerHTML = result;
	  }
	  function del() {
	    var num1, num2, result;
	     num1 = document.getElementById('n1').value;
		 num1 = parseFloat(num1);
		 
	     num2 = document.getElementById('n2').value;
		 num2 = parseFloat(num2);
		 
		 result = num1 / num2;
		 document.getElementById('out').innerHTML = result;
	  }
	  function cos() {
	    var num1, num2, result;
	     num1 = document.getElementById('n1').value;
		 num1 = parseFloat(num1);
		 
	     num2 = document.getElementById('n2').value;
		 num2 = parseFloat(num2);
		 
		 result = Math.cos(num1);
		document.getElementById('out').innerHTML = result;
		 
		 }
		 
	  function sin() {
	    var num1, num2, result;
	     num1 = document.getElementById('n1').value;
		 num1 = parseFloat(num1);
		 
	     num2 = document.getElementById('n2').value;
		 num2 = parseFloat(num2);
		 
		 result = Math.sin(num1);
		 document.getElementById('out').innerHTML = result;
	  }
	  function tan() {
	    var num1, num2, result;
	     num1 = document.getElementById('n1').value;
		 num1 = parseFloat(num1);
		 
	     num2 = document.getElementById('n2').value;
		 num2 = parseFloat(num2);
		 
		 result = Math.tan(num1);
		 document.getElementById('out').innerHTML = result;
	  }
	  function acos() {
	    var num1, num2, result;
	     num1 = document.getElementById('n1').value;
		 num1 = parseFloat(num1);
		 
	     num2 = document.getElementById('n2').value;
		 num2 = parseFloat(num2);
		 
		 result = Math.acos(num1);
		 document.getElementById('out').innerHTML = result;
	  }
	  function asin() {
	    var num1, num2, result;
	     num1 = document.getElementById('n1').value;
		 num1 = parseFloat(num1);
		 
	     num2 = document.getElementById('n2').value;
		 num2 = parseFloat(num2);
		 
		 result = Math.asin(num1);
		 document.getElementById('out').innerHTML = result;
	  }
	  function atan() {
	    var num1, num2, result;
	     num1 = document.getElementById('n1').value;
		 num1 = parseFloat(num1);
		 
	     num2 = document.getElementById('n2').value;
		 num2 = parseFloat(num2);
		 
		 result = Math.atan(num1);
		 document.getElementById('out').innerHTML = result;
	  }
	   function Pi() {
		pi = 3.14;
	     num1 = document.getElementById('n1').value;
		 num1 = parseFloat(num1);
		 document.getElementById('n1').value = pi;
		 
	  }
	  function Pi2() {
		pi = 3.14;
	     num2 = document.getElementById('n2').value;
		 num2 = parseFloat(num1);
		 document.getElementById('n2').value = pi;
		 
	  }
	  function step() {
	    var num1, num2, result;
	     num1 = document.getElementById('n1').value;
		 num1 = parseFloat(num1);
		 
	     num2 = document.getElementById('n2').value;
		 num2 = parseFloat(num2);
		 
		 result = Math.pow(num1, num2);
		 document.getElementById('out').innerHTML = result;
	  }
	  function procent() {
	    var num1, num2, result;
	     num1 = document.getElementById('n1').value;
		 num1 = parseFloat(num1);
		 
	     num2 = document.getElementById('n2').value;
		 num2 = parseFloat(num2);
		 
		 result = num1 / 100 * num2;
		 document.getElementById('out').innerHTML = result;
	  }
	  function koren() {
	    var num1, num2, result;
	     num1 = document.getElementById('n1').value;
		 num1 = parseFloat(num1);
		 
	     num2 = document.getElementById('n2').value;
		 num2 = parseFloat(num2);
		 
		 result = Math.sqrt(num1);
		 document.getElementById('out').innerHTML = result;
	  }
	  function ac1() {
	    var num1;
	     num1 = document.getElementById('n1').value;
	
		 document.getElementById('n1').value = '';
	  }
	  function ac2() {
	    var num2;
	     num2 = document.getElementById('n1').value;
		 document.getElementById('n2').value = '';
	  }
	  
	  
	  


