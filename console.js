/*PrestaShop Admin Module Translate Merger*/

window.ntrTrans = {};

$.each($("div[name='modules_div'] table > tbody > tr"), function(key, value)
{
	var __key = $(value).find("td:first-child").text();
	var __value = $(value).find("td:nth-child(3)").find("input, textarea").val();
	
	if (__value != "") window.ntrTrans[__key] = __value;
});


$.each(window.ntrTrans, function(defaultLang, translated)
{
	var tds = $("div[name='modules_div'] table > tbody > tr > td:first-child:contains('"+defaultLang+"')");

	if (tds.length)
	{
		$.each(tds, function(index, td)
		{
			if ($(td).text() == defaultLang && $(td).parent().find("td:nth-child(3)").find("input, textarea").val() == "")
			{
				$(td).parent().find("td:nth-child(3)").find("input, textarea").val(translated);
			}
		});
	}
});