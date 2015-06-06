function downloadPDF(){
	var pdf = new jsPDF('p','pt','letter'),
		source = $('#formatoPrueba')[0],
		specialElementHandlers = {
			'#detalles': function(element, renderer){
				return true
			}
		};
	pdf.setFontSize(9);
	pdf.fromHTML(source, 1, 1, {
		'width':900,
		'elementHandlers': specialElementHandlers
	});

	var nombre = decodeURI($('#formatoPrueba tbody tr')[3].getElementsByTagName('span')[1].innerHTML);
	pdf.save(nombre+".pdf");
}