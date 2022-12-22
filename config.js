// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Alan',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: true,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Good night,',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '32e832dbac0549a9424420bb76a017a1', // Write here your API Key
	weatherIcons: 'Nord', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'F', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '33.748997',
	defaultLongitude: '-84.387985',

	// Autochange
	autoChangeTheme: false,

	// Autochange by OS
	changeThemeByOS: false,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Wikipedia',
			icon: 'library',
			link: 'https://wikipedia.org',
		},
		{
			id: '2',
			name: 'Proton Mail',
			icon: 'mail',
			link: 'https://mail.protonmail.com/',
		},
		{
			id: '3',
			name: 'Tasks',
			icon: 'check-square',
			link: 'https://nx31157.your-storageshare.de/apps/deck/#/board',
		},
		{
			id: '4',
			name: 'Twitter',
			icon: 'twitter',
			link: 'https://twitter.com/home',
		},
		{
			id: '5',
			name: 'Reddit',
			icon: 'bot',
			link: 'https://reddit.com',
		},
		{
			id: '6',
			name: 'YouTube',
			icon: 'youtube',
			link: 'https://youtube.com/feed/subscriptions',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: '',
			icon: '',
			link: '',
		},
		{
			id: '2',
			name: '',
			icon: '',
			link: '',
		},
		{
			id: '3',
			name: '',
			icon: '',
			link: '',
		},
		{
			id: '4',
			name: '',
			icon: '',
			link: '',
		},
		{
			id: '5',
			name: '',
			icon: '',
			link: '',
		},
		{
			id: '6',
			name: '',
			icon: '',
			link: '',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'backpack',
			id: '1',
			links: [
				{
					name: 'iCollege',
					link: 'https://icollege.gsu.edu/',
				},
				{
					name: 'PAWS',
					link: 'https://paws.gsu.edu/',
				},
				{
					name: 'Menti',
					link: 'https://www.mentimeter.com/app',
				},
				{
					name: 'Stanford Encyclopedia of Philosophy',
					link: 'https://plato.stanford.edu/',
				},
			],
		},
		{
			icon: 'binary',
			id: '2',
			links: [
				{
					name: 'Github',
					link: 'https://github.com/',
				},
				{
					name: 'Arch Wiki',
					link: 'https://wiki.archlinux.org',
				},
				{
					name: 'Nextcloud',
					link: 'https://nx31157.your-storageshare.de/',
				},
				{
					name: '',
					link: '',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: '',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
