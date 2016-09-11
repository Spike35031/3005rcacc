function dayToInt(day) {
	if (day.toLowerCase().startsWith("su")) {
		return 0;
	}
	if (day.toLowerCase().startsWith("mo")) {
		return 1;
	}
	if (day.toLowerCase().startsWith("tu")) {
		return 2;
	}
	if (day.toLowerCase().startsWith("we")) {
		return 3;
	}
	if (day.toLowerCase().startsWith("th")) {
		return 4;
	}
	if (day.toLowerCase().startsWith("fr")) {
		return 5;
	}
	if (day.toLowerCase().startsWith("sa")) {
		return 6;
	}
	return -1;
}

function intToDay(day) {
	switch (day) {
		case 0:
			return "Sunday";
		case 1:
			return "Monday";
		case 2:
			return "Tuesday";
		case 3:
			return "Wednesday";
		case 4:
			return "Thursday";
		case 5:
			return "Friday";
		case 6:
			return "Saturday";
		default:
			return "Invalid"
	}
}

function monthToInt(month) {
	if (month.toLowerCase().startsWith("jan")){
		return 0;
	}
	if (month.toLowerCase().startsWith("feb")){
		return 1;
	}
	if (month.toLowerCase().startsWith("mar")){
		return 2;
	}
	if (month.toLowerCase().startsWith("apr")){
		return 3;
	}
	if (month.toLowerCase().startsWith("may")){
		return 4;
	}
	if (month.toLowerCase().startsWith("jun")){
		return 5;
	}
	if (month.toLowerCase().startsWith("jul")){
		return 6;
	}
	if (month.toLowerCase().startsWith("aug")){
		return 7;
	}
	if (month.toLowerCase().startsWith("sep")){
		return 8;
	}
	if (month.toLowerCase().startsWith("oct")){
		return 9;
	}
	if (month.toLowerCase().startsWith("nov")){
		return 10;
	}
	if (month.toLowerCase().startsWith("dec")){
		return 11;
	}
	return -1;
}

function intToMonth(month) {
	switch (month) {
		case 0:
			return "January";
		case 1:
			return "February";
		case 2:
			return "March";
		case 3:
			return "April";
		case 4:
			return "May";
		case 5:
			return "June";
		case 6:
			return "July";
		case 7:
			return "August";
		case 8:
			return "September";
		case 9:
			return "October";
		case 10:
			return "November";
		case 11:
			return "December";
		default:
			return "Invalid";
	}
}

function matchMinute(cron, date) {
	if (cron == "*") {
		return true;
	}

	var parts = cron.split(",")
	for (var i = 0; i < parts.length; i++) {
		var part = parts[i]
		if (part.match(/^\d{1,2}$/) && parseInt(part) == date.getMinutes()) {
			return true;
		}
		if (part.match(/^\d{1,2}-\d{1,2}$/)) {
			var range = part.split("-");
			if (parseInt(range[0]) <= date.getMinutes() && date.getMinutes() <= parseInt(range[1])) {
				return true;
			}
		}
		if (part.match(/^\*\/\d{1,2}$/)) {
			var number = part.split("/")[1];
			if (date.getMinutes() % parseInt(number) == 0) {
				return true;
			}
		}
	}
	return false;
}

function matchHour(cron, date) {
	if (cron == "*") {
		return true;
	}

	var parts = cron.split(",")
	for (var i = 0; i < parts.length; i++) {
		var part = parts[i]
		if (part.match(/^\d{1,2}$/) && parseInt(part) == date.getHours()) {
			return true;
		}
		if (part.match(/^\d{1,2}-\d{1,2}$/)) {
			var range = part.split("-");
			if (parseInt(range[0]) <= date.getHours() && date.getHours() <= parseInt(range[1])) {
				return true;
			}
		}
		if (part.match(/^\*\/\d{1,2}$/)) {
			var number = part.split("/")[1];
			if (date.getHours() % parseInt(number) == 0) {
				return true;
			}
		}
	}
	return false;
}

function matchDate(cron, date) {
	if (cron == "*") {
		return true;
	}

	var parts = cron.split(",")
	for (var i = 0; i < parts.length; i++) {
		var part = parts[i]
		if (part.match(/^\d{1,2}$/) && parseInt(part) == date.getDate()) {
			return true;
		}
		if (part.match(/^\d{1,2}-\d{1,2}$/)) {
			var range = part.split("-");
			if (parseInt(range[0]) <= date.getDate() && date.getDate() <= parseInt(range[1])) {
				return true;
			}
		}
		if (part.match(/^\*\/\d{1,2}$/)) {
			var number = part.split("/")[1];
			if (date.getDate() % parseInt(number) == 0) {
				return true;
			}
		}
	}
	return false;
}

function matchMonth(cron, date) {
	if (cron == "*") {
		return true;
	}

	var parts = cron.split(",")
	for (var i = 0; i < parts.length; i++) {
		var part = parts[i]
		if (part.match(/^(?:JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)$/) && monthToInt(part) == date.getMonth()) {
			return true;
		}
		if (part.match(/^\d{1,2}$/) && parseInt(part) == date.getMonth()+1) {
			return true;
		}
		if (part.match(/^\d{1,2}-\d{1,2}$/)) {
			var range = part.split("-");
			if (parseInt(range[0]) <= date.getMonth() && date.getMonth() <= parseInt(range[1])) {
				return true;
			}
		}
		if (part.match(/^(?:JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)-(?:JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)$/)) {
			var range = part.split("-");
			if (monthToInt(range[0]) <= date.getMonth() && date.getMonth() <= monthToInt(range[1])) {
				return true;
			}
		}
		if (part.match(/^\*\/\d\d?$/)) {
			var number = part.split("/")[1];
			if (date.getMonth()+1 % parseInt(number) == 0) {
				return true;
			}
		}
	}
	return false;
}

function getDates(day, month, year) {
	var d = new Date(year, month, 1),
        dates = [];

    d.setDate(d.getDate() + ((7+day) - d.getDay()) % 7)
    while (d.getMonth() === month) {
        dates.push(new Date(d.getTime()));
        d.setDate(d.getDate() + 7);
    }

    return dates;
}

function matchDay(cron, date) {
	if (cron == "*") {
		return true;
	}

	var parts = cron.split(",")
	for (var i = 0; i < parts.length; i++) {
		var part = parts[i]
		if (part.match(/^(?:SUN|MON|TUE|WED|THU|FRI|SAT)$/) && dayToInt(part) == date.getDay()) {
			return true;
		}
		if (part.match(/^\d{1,2}$/) && parseInt(part) == date.getDay()) {
			return true;
		}
		if (part.match(/^\d{1,2}-\d{1,2}$/)) {
			var range = part.split("-");
			if (parseInt(range[0]) <= date.getDay() && date.getDay() <= parseInt(range[1])) {
				return true;
			}
		}
		if (part.match(/^(?:SUN|MON|TUE|WED|THU|FRI|SAT)-(?:SUN|MON|TUE|WED|THU|FRI|SAT)$/)) {
			var range = part.split("-");
			if (dayToInt(range[0]) <= date.getDay() && date.getDay() <= dayToInt(range[1])) {
				return true;
			}
		}
		if (part.match(/^(?:SUN|MON|TUE|WED|THU|FRI|SAT)#\d$/)) {
			var split = part.split("#");
			var possibleDates = getDates(dayToInt(split[0]), date.getMonth(), date.getFullYear())
			if (possibleDates[parseInt(split[1])-1].getDate() == date.getDate() && possibleDates[parseInt(split[1])-1].getMonth() == date.getMonth()) {
				return true;
			}
		}
		if (part.match(/^\d{1,2}#\d$/)) {
			var split = part.split("#");
			var possibleDates = getDates(parseInt(split[0]), date.getMonth(), date.getFullYear())
			if (possibleDates[parseInt(split[1])-1].getDate() == date.getDate() && possibleDates[parseInt(split[1])-1].getMonth() == date.getMonth()) {
				return true;
			}
		}
	}
	return false;

}

function matchCron(cron, date, ignoreTime) {
	var parts = cron.split(" ");
	if (!ignoreTime && (!matchMinute(parts[0], date) || !matchHour(parts[1], date))) {
		return false;
	}
	return matchDate(parts[2], date) && matchMonth(parts[3], date) && matchDay(parts[4], date);
}
