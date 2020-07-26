export default function({ store, route, redirect }) {
	const isAuthenticated = store.getters['authenticated'];

	if (!isAuthenticated) {
		return redirect('/');
	}
}
