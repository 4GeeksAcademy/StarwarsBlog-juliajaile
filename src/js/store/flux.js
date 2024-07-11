const getState = ({ getStore, setStore }) => {
	return {
		store: {
			url: "https://www.swapi.tech/api",
			favourites: [],
		},
		actions: {
			getPeople: async () => {
				try {
					const response = await fetch(getStore().url + '/people/')
					const data = await response.json();
					if (!response.ok) throw new Error('Fetching people error')
					setStore({ people: data.results })
				} catch (error) {
					console.log('error: ----->', error)

				}
			},
			getPlanets: async () => {
				try {
					const response = await fetch(getStore().url + '/planets/');
					const data = await response.json();
					if (!response.ok) throw new Error('Fetching planets error')
					setStore({ planets: data.results });
				} catch (error) {
					console.log('error: ----->', error)

				}
			},
			getVehicles: async () => {
				try {
					const response = await fetch(getStore().url + '/vehicles/');
					const data = await response.json();
					if (!response.ok) throw new Error('Fetching vehicles error')
					setStore({ vehicles: data.results });

				} catch (error) {
					console.log('error: ----->', error)

				}
			},
			getDetails: async (uid, type) => {
				try {
					const response = await fetch(`${getStore().url}/${type}/${uid}`);
					const data = await response.json();
					if (!response.ok) throw new Error('Fetching people error');
					setStore({ details: data.result })
				} catch (error) {
					console.log('error: ----->', error)

				}
			},
			addFavourites: (name) => {
				const getFavs = getStore().favourites;
				if (!getFavs.includes(name)) {
					const actualizFavs = [...getFavs, name];
					setStore({ favourites: actualizFavs }
					)
				}
			},
			handleDeleteFav: (index) => {
				const newFavs = getStore().favourites;
				newFavs.splice(index, 1);
				setStore({ favourites: newFavs });
			}
		}
	};
};

export default getState;
