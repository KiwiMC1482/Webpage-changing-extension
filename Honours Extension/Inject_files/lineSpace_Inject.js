(function changePage()
{	
	var el = document.querySelectorAll('*');

	//Style changes go here : Spacing between lines
	for(var i=0;i<el.length;i++)
	{
		el[i].style.lineHeight = "35px";
	}
})();