// this is the code which will be injected into a given page

(function changePage()
{	
	var el = document.querySelectorAll('*');

	//Style changes to bg colour
	for(var i=0;i<el.length;i++)
	{
		el[i].style.backgroundColor = "#f8fd89";
	}
})();