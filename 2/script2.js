/*window.onload = function() {
    const fileDisplayArea = document.getElementById('fileDisplayArea');

    const file = new File(null, "../hello.txt");
    const textType = /text.*//*;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        fileDisplayArea.textContent = reader.result; 
    }
    reader.readAsText(file);	
    
}*/
window.onload = function() {
    const fileDisplayArea = document.getElementById('fileDisplayArea');
    
	fetch('../hello.txt')
	.then(function(response) {
		return response.text()
	}).then(function(body) {
		fileDisplayArea.textContent = body
	})};