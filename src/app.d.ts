// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	const PACKAGE_VERSION: string;
	const PACKAGE_NAME: string;
	const REPOSITORY_URL: string;
}

export {};
