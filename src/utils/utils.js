const defaultMobileMaxWidth = 900;

const isMobile = (notCheckWidth = false, excludeTablet = false) => {
	let width = !notCheckWidth ? defaultMobileMaxWidth : 0;
	let regex = excludeTablet ?
		/Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i :
		/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
	let im = regex.test(navigator.userAgent);
	return width > 0 ? im && screenWidth() < width : im;
}

const screenWidth = () => {
	return window.orientation === 90 || window.orientation === -90 ? Math.max(window.screen.width, window.screen.height) : window.screen.width;
}

function injectScriptSheet(name, url) {
	return new Promise((resolve, reject) => {
		if (name === null || name === undefined) return resolve();
		const head = document.head || document.getElementsByTagName("head")[0];
		const id = "".concat(name.toUpperCase(), "_SCRIPT");
		if (document.getElementById(id)) return resolve();
		const script = document.createElement("script");
		script.id = id;
		script.type = "text/javascript";
		script.src = url;
		script.onload = resolve;
		script.onerror = reject;
		head.appendChild(script);
	});
}

async function injectDebugger() {
	await injectScriptSheet("ERUDA_DEBUGGER", "https://cdn.jsdelivr.net/npm/eruda");
	window.eruda.init();
}

export {
	isMobile,
	screenWidth,
	injectDebugger
}