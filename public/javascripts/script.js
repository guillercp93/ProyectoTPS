function downloadPDF(){
	var imgData,
		doc = new jsPDF('p','pt','letter');

	html2canvas($('#formatoPrueba'), {
		background: '#fff',
   		onrendered: function(canvas) {
   			imgData = canvas.toDataURL('image/jpeg', 1.0);
			doc.addImage(imgData, 'jpeg', 50, 50);
			
			var nombre = decodeURI($('#formatoPrueba tbody tr')[3].getElementsByTagName('span')[1].innerHTML);
			doc.save(nombre+".pdf");
  		}
	});
}