import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'De Nyew Testament',
		version: '4.0.0',
	}
});

export default app;