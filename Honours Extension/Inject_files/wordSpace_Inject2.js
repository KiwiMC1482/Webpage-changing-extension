(function changePage()
{	
	var el = document.querySelectorAll('*');

	//Spacing between words
	for(var i=0;i<el.length;i++)
	{
		el[i].style.wordSpacing = "35px";
	}
})();