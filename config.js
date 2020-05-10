const config = {
	UI_SERVER_PORT: 7000,
	LOWER3_IMAGE: "/lower3.jpg",

	// PROPRESENTER SETTINGS,
	PRO6_HOST: "172.16.10.251:52086",
	PRO6_SD_PASSWORD: "password",
	PRO6_CONTROL_PASSWORD: "password",

	// MIDI SETTINGS
	MIDI_PORT: 4,

	// LCC LIVE SETTINGS
	LCC_LIVE_URL: "https://example.org:99999", // no final slash

	// VMIX SETTINGS
	VMIX_HOST: "172.16.10.251:8088", // no final slash
	VMIX_LYRICS_INPUT: 10,

	// COMPANION (BITFOCUS) SETTINGS
	COMPANION_HOSTS: { first: "192.168.1.4:51234", second: "192.168.1.5:51234" },

	// WEB LOGGER SETTINGS
	LOGGER_URL: "https://example.org/log/index.php",
	LOGGER_KEY: "key",
	USEWEBLOG: true,
};

module.exports = config;
