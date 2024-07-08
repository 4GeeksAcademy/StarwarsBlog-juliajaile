const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: "https://www.swapi.tech/api",
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
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
			// // Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			// loadSomeData: () => {
			// 	/**
			// 		fetch().then().then(data => setStore({ "foo": data.bar }))
			// 	*/
			// },
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }
		}
	};
};

export default getState;
