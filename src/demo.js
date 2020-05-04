export default [
	{
		title: 'Coupons',
		id: '3a73840f310af4b41be29e1299bf0d5f7a6c0772',
		todos: [
			{
				todo: 'With coupons disabled:',
				index: 0,
				id: '803ab68ed33a098336021f8eed6c8bcf44f8ee60',
				parent: null,
				isTitle: true,
			},
			{
				todo:
					'You should not see the add coupon section in your cart and checkout and in the editor.',
				index: 1,
				id: '2a53370c236fb0930bd5c5b8f18577412be47401',
				parent: null,
				done: true,
				todoChildren: null,
			},
			{
				todo: 'With coupons enabled:',
				index: 2,
				id: '89bc96767401d461bc75e67c3654edea128bdff2',
				parent: null,
				isTitle: true,
			},
			{
				todo: 'You can apply coupons in both Cart and Checkout blocks.',
				index: 3,
				id: 'e4fc097de05a3205ac5c3955648c7089e0f90bc0',
				parent: null,
				done: false,
				todoChildren: null,
			},
			{
				todo: 'A valid coupon `coupon` should reduce your totals.',
				index: 4,
				id: 'aa17c87a24da007fd095aed9a3231d42c49b04d0',
				parent: null,
				done: true,
				todoChildren: null,
			},
			{
				todo: 'An expired coupon `oldcoupon` should return an error.',
				index: 5,
				id: '502f6f58b158c1d9e0d4b27ad16164752473dada',
				parent: null,
				done: true,
				todoChildren: null,
			},
			{
				todo: 'An invalid coupon should return an error.',
				index: 6,
				id: 'ca473f001655e2554b72be94a95dc4e8d50c7ddb',
				parent: null,
				done: true,
				todoChildren: null,
			},
			{
				todo: 'An email limited coupon should apply to your cart.',
				index: 7,
				id: '9fbf5f190c76c7250f30354aeea6b1f91eb07bd2',
				parent: null,
				done: true,
				todoChildren: null,
			},
			{
				todo:
					'If the email is correct, you should be able to checkout.',
				index: 8,
				id: 'c15fbd942ce8410a124f0db2d1c4f42b6c333fd3',
				parent: '9fbf5f190c76c7250f30354aeea6b1f91eb07bd2',
				done: true,
				todoChildren: null,
			},
			{
				todo:
					'If the email is incorrect, you should receive an error, and the coupon will be removed from your cart.',
				index: 9,
				id: '68547973d6739d140172516669a18531213cc5e5',
				parent: '9fbf5f190c76c7250f30354aeea6b1f91eb07bd2',
				done: true,
				todoChildren: null,
			},
			{
				todo:
					'A condition coupon should not be added until you meet the condition.',
				index: 10,
				id: 'f049b0ecfc9944db3d42aaf31db67b78476c5150',
				parent: null,
				done: true,
				todoChildren: null,
			},
			{
				todo:
					'Adding a condition coupon then removing the condition (reduce cart total or remove related item) should remove the coupon from your cart with an error.',
				index: 11,
				id: 'c3e6b73d6f097726d169114cdfc2e9be333e0953',
				parent: 'f049b0ecfc9944db3d42aaf31db67b78476c5150',
				done: true,
				todoChildren: null,
			},
			{
				todo:
					'Adding a coupon then adding `alone` coupon should replace the first one.',
				index: 12,
				id: '4bb347468a21af152084c469383401f89cf07714',
				parent: null,
				done: true,
				todoChildren: null,
			},
			{
				todo:
					'Adding `alone` then trying to another coupon should result in an error.',
				index: 13,
				id: '79b13e1fd38d1d1f0c6d34e986dd5929e27012fb',
				parent: null,
				done: true,
				todoChildren: null,
			},
			{
				todo:
					'Adding `freeship` should show the free shipping method you previously created.',
				index: 14,
				id: 'ecfe7e6617cb3add69cd095a92ace26495bd4b4c',
				parent: null,
				done: true,
				todoChildren: null,
			},
		],
	},
];
