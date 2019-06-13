const { crashReporter } = require('electron');

const reportServer = 'placeholder/';

const config = {
    productName: 'aOS Desktop',
    companyName: 'Spiderling Studio',
    submitURL: host + 'crashreports',
    uploadToServer: true
}

crashReporter.start(config);

console.log(`[INFO] Crash reporting started. ${crashReporter}`);

module.exports = crashReporter;