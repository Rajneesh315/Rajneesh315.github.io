var OSName = "Unknown OS";
if (navigator.userAgent.indexOf("Win") != -1) OSName = "Win";
if (navigator.userAgent.indexOf("Mac") != -1) OSName = "Mac";
if (navigator.userAgent.indexOf("Linux") != -1) OSName = "Linux";
if (navigator.userAgent.indexOf("Android") != -1) OSName = "Android";
if (navigator.userAgent.indexOf("like Mac") != -1) OSName = "iOS";
console.log('Your OS: ' + OSName);

if (OSName === "Win") {
	document.getElementById("prompt").innerHTML = "> ";
}
else if (OSName === "Mac" || OSName === "Linux" || OSName === "Android" || OSName === "iOS") {
	document.getElementById("prompt").innerHTML = "$ ";
}
else {
	document.getElementById("prompt").innerHTML = "~ ";
}