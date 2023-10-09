{
	var OSName = "Unknown OS";
	if (navigator.userAgent.indexOf("Win") != -1) OSName = "Windows";
	if (navigator.userAgent.indexOf("Mac") != -1) OSName = "Macintosh";
	if (navigator.userAgent.indexOf("Linux") != -1) OSName = "Linux";
	if (navigator.userAgent.indexOf("Android") != -1) OSName = "Android";
	if (navigator.userAgent.indexOf("like Mac") != -1) OSName = "iOS";
	console.log('Your OS: ' + OSName);
}

alert("Hello " + OSName + " ,This Site Is Under Construction.")
