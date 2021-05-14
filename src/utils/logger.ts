import moment from "moment";

export class Logger {
	private className: string = '';

	constructor(private sender: string) {
		this.className = sender;
	}

	public log_info(rawData: any, options: any = null) {
		this.writeLog('info', rawData, options);
	}

	public log_warn(rawData: any, options: any = null) {
		this.writeLog('warn', rawData, options);
	}

	public log_error(rawData: any, options: any = null) {
		this.writeLog('error', rawData, options);
	}

	private writeLog(level: string, data: any, options: any = null) {
		if (process.env.REACT_APP_ENV !== "production") {
			const dateTime: string = moment().format("YYYY-MM-DD HH:mm:ss");
			const levelType: string = level.toUpperCase();
			const className: string = this.className.toUpperCase();
			const rawData: string = JSON.stringify(data);

			if (options) {
				console.log(`[${dateTime}][${levelType}][${className}]:`, rawData, options);
			} else {
				console.log(`[${dateTime}][${levelType}][${className}]:`, rawData);
			}
		}
	}
}