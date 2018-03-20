module.exports = {
	getTotalMemory: function () {
		var used = process.memoryUsage().heapTotal / 1024 / 1024;
		return `${Math.round(used * 100) / 100}MB`;
	},
	getUsedMemory: function () {
		var used = process.memoryUsage().heapUsed / 1024 / 1024;
		return `${Math.round(used * 100) / 100}MB`;
	},
	getRSS: function () {
		var used = process.memoryUsage().rss / 1024 / 1024;
		return `${Math.round(used * 100) / 100}MB`;
	},
	getExternal: function () {
		var used = process.memoryUsage().external / 1024 / 1024;
		return `${Math.round(used * 100) / 100}MB`;
	},
	getAll: function () {
		const used = process.memoryUsage();
		console.log("\n\nMemory Totals:\n");
		for (let key in used) {
		 console.log(`${key}: ${Math.round(used[key] / 1024 / 1024 * 100) / 100}MB`);
		}
	},
	getSYSTotal: function(measurement) {
		if (!os) {
			var os = require("os");
		}
		switch(measurement.toLowerCase()) {
			case "b":
				return (Math.round((os.totalmem())*100) / 100);
			break;
			
			case "kb":
				return (Math.round((os.totalmem() / 1024)*10) / 100);
			break;
			
			case "mb":
				return (Math.round((os.totalmem() / 1024 / 1024)*100) / 100);
			break;
			
			case "gb":
				return (Math.round((os.totalmem() / 1024 / 1024 / 1024)*100) / 100);
			break;
			
			default:
				throw new Error("Invalid Measurement");
		}
	},
	getSYSFree: function(measurement) {
		if (!os) {
			var os = require("os");
		}
		switch(measurement.toLowerCase()) {
			case "b":
				return (Math.round((os.freemem())*100) / 100);
			break;
			
			case "kb":
				return (Math.round((os.freemem() / 1024)*100) / 100);
			break;
			
			case "mb":
				return (Math.round((os.freemem() / 1024 / 1024)*100) / 100);
			break;
			
			case "gb":
				return (Math.round((os.freemem() / 1024 / 1024 / 1024)*100) / 100);
			break;
			
			default:
				throw new Error("Invalid Measurement");
		}
	},
	getSYSUsed: function(measurement) {
		if (!os) {
			var os = require("os");
		}
		switch(measurement.toLowerCase()) {
			case "b":
				return (Math.round((+(Math.round((os.totalmem())*100) / 100)-Math.round((os.freemem())*100) / 100)* 100) / 100);
			break;
			
			case "kb":
				return (Math.round((+(Math.round((os.totalmem() / 1024)*100) / 100)-Math.round((os.freemem() / 1024)*100) / 100)* 100) / 100);
			break;
			
			case "mb":
				return (Math.round((+(Math.round((os.totalmem() / 1024 / 1024)*100) / 100)-Math.round((os.freemem() / 1024 / 1024)*100) / 100)* 100) / 100);
			break;
			
			case "gb":
				return (Math.round((+(Math.round((os.totalmem() / 1024 / 1024 / 1024)*100) / 100)-Math.round((os.freemem() / 1024 / 1024 / 1024)*100) / 100)* 100) / 100);
			break;
			
			default:
				throw new Error("Invalid Measurement");
		}
	},
	getSYSTotalB: function() {
		return module.exports.getSYSTotal("B");
	},
	getSYSFreeB: function() {
		return module.exports.getSYSFree("B");
	},
	getSYSUsedB: function() {
		return module.exports.getSYSUsed("B");
	},
	getSYSTotalKB: function() {
		return module.exports.getSYSTotal("KB");
	},
	getSYSFreeKB: function() {
		return module.exports.getSYSFree("KB");
	},
	getSYSUsedKB: function() {
		return module.exports.getSYSUsed("KB");
	},
	getSYSTotalMB: function() {
		return module.exports.getSYSTotal("MB");
	},
	getSYSFreeMB: function() {
		return module.exports.getSYSFree("MB");
	},
	getSYSUsedMB: function() {
		return module.exports.getSYSUsed("MB");
	},
	getSYSTotalGB: function() {
		return module.exports.getSYSTotal("GB");
	},
	getSYSFreeGB: function() {
		return module.exports.getSYSFree("GB");
	},
	getSYSUsedGB: function() {
		return module.exports.getSYSUsed("GB");
	},
	getSYSCPUCount: function() {
		if (!os) {
			var os = require("os");
		}
		var cpu_count=0;
		for(i=0;i < os.cpus().length;i++) {
			cpu_count++;
		}
		return cpu_count;
	},
	getSYSName: function() {
		if (!os) {
			var os = require("os");
		}
		return os.hostname();
	},
	getSYSName: function() {
		if (!os) {
			var os = require("os");
		}
		return os.hostname();
	},
	getSYSType: function() {
		if (!os) {
			var os = require("os");
		}
		return os.type();
	},
	getSYSName: function() {
		if (!os) {
			var os = require("os");
		}
		return os.hostname();
	},
	getSYSArchitecture: function() {
		if (!os) {
			var os = require("os");
		}
		return os.arch();
	},
	getSYSArch: function() {
		return module.exports.getSYSArchitecture();
	},
	getSYSPlatform: function() {
		if (!os) {
			var os = require("os");
		}
		return os.platform();
	},
	getSYSRelease: function() {
		if (!os) {
			var os = require("os");
		}
		return os.release();
	},
	getSYSVersion: function() {
		return module.exports.getSYSRelease();
	},
	checkSemVer: function(ver) {
		if(!semver) {
			var semver = require("semver");
		}
		var s=semver.valid(ver);
		if(s == ver) {
			return ver;
		} else {
			throw new Error("Invalid Version");
		}
	},
	getCurrentTimestamp: function() {
		var today = new Date();
		var dd = today.getDate();

		var mm = today.getMonth()+1; 
		var yyyy = today.getFullYear();
		if(dd<10) 
		{
			dd='0'+dd;
		} 

		if(mm<10) 
		{
			mm='0'+mm;
		} 

		var dt=`${yyyy}-${mm}-${dd}T${new Date(today.getTime()).toString().split(" ")[4]}Z`;
		return dt;
	},
	secondsToHours: function(seconds) {
		var sec_num = parseInt(seconds, 10);
		var hours   = Math.floor(sec_num / 3600);
		var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
		var seconds = sec_num - (hours * 3600) - (minutes * 60);

		if (hours   < 10) {hours   = "0"+hours;}
		if (minutes < 10) {minutes = "0"+minutes;}
		if (seconds < 10) {seconds = "0"+seconds;}
		return hours+':'+minutes+':'+seconds;
	},
	ucWords: function(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
};