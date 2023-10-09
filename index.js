var Name = "Unknown OS";
if (navigator.userAgent.indexOf("Win") != -1) Name =
	"Windows OS";
if (navigator.userAgent.indexOf("Mac") != -1) Name =
	"Macintosh";
if (navigator.userAgent.indexOf("Linux") != -1) Name =
	"Linux OS";
if (navigator.userAgent.indexOf("Android") != -1) Name =
	"Android OS";
if (navigator.userAgent.indexOf("like Mac") != -1) Name =
	"iOS";

alert("Hello " + Name + ",This Site Is Under Construction.")
