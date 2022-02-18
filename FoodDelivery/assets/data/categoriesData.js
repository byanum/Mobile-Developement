const { exp } = require('react-native/Libraries/Animated/Easing')

const categoriesData = [
{
    id: 1,
    image: require('../images/burger.png'),
    title: 'burger',
    selected: true,
},
{
    id: 2,
    image: require('../images/pizza.png'),
    title: 'pizza',
    selected: false,
},
{
    id: 3,
    image: require('../images/pasta.png'),
    title: 'pasta',
    selected: false,
}
]

export default categoriesData;