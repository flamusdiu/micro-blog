 module.exports = {
	get_file_ext: function (fname) {
		return fname.substr((~-fname.lastIndexOf(".") >>> 0) + 2);
	},

	get_file_name: function (fname) {
		return fname.substr(0,(~-fname.lastIndexOf(".") >>> 0) + 1);
	},

	escapeShellArg: function (cmd) {
		return '\"' + cmd.replace(/\'/g, "'\\''") + '\"';
	}
 }