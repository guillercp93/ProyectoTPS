function downloadPDF(){
	var pdf = new jsPDF('p','in','letter'),
		source = $('#formatoPrueba')[0],
		specialElementHandlers = {
			'#bypassme': function(element, renderer){
				return true
			}
		};
	pdf.fromHTML(source, 1, .15, {
		'width':100,
		'elementHandlers': specialElementHandlers
	});
	var nombre = decodeURI($('#formatoPrueba tbody tr')[3].getElementsByTagName('span')[1].innerHTML);
	pdf.save(nombre+".pdf");
}