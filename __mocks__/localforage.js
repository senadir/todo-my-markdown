const db = jest.genMockFromModule( 'localforage' );

const localDB = [
	{
		sha: '7150a5b61d5a655e54a00d1e3acade457cbcea12',
		title: 'Coupons',
		todos: [
			{
				id: '803ab68ed33a098336021f8eed6c8bcf44f8ee60',
				index: 0,
				isTitle: true,
				parent: null,
				todo: 'With coupons disabled:',
			},
			{
				done: false,
				id: '2a53370c236fb0930bd5c5b8f18577412be47401',
				index: 1,
				parent: null,
				todo:
					'You should not see the add coupon section in your cart and checkout and in the editor.',
				todoChildren: null,
			},
			{
				done: false,
				id: 'ecfe7e6617cb3add69cd095a92ace26495bd4b4c',
				index: 2,
				parent: '2a53370c236fb0930bd5c5b8f18577412be47401',
				todo:
					'Adding `alone` then trying to another coupon should result in an error.',
				todoChildren: null,
			},
		],
	},
];
db.getItem = ( hash ) => localDB.find( ( list ) => list.sha === hash );
