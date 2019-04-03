(function changePage()
{	
	var el = document.querySelectorAll('*');

	//Character spacing changes go here
	for(var i=0;i<el.length;i++)
	{
		el[i].style.letterSpacing = "10px";
	}
})();