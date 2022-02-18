import * as React from 'react';
import {  View, Text, StyleSheet, Image, FlatList, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';

 import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { ScrollView } from 'react-native-web';



import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';

Feather.loadFont();

export default Home = () => {

const renderCategoryItem = ({item}) => {
     {/* categories ends here */}
    return (
       
        <View style={[styles.categoryItemWrapper, {
            backgroundColor: item.selected ? '#D5F5E3' : '#FCF3CF',
            marginLeft: item.id == 1 ? 20: 0,

        
        
        }]}>
            <Image source={item.image} style={styles.categoryItemImage}/>
            <Text style={styles.categoryItemText}>{item.title}</Text>
            <View style={[styles.categorySelectItemWrapper,
            {
                backgroundColor: item.selected ? '#F5B7B1' : '#EBEDEF',
            }]}>
                <Feather name="chevron-right" size={8} style={styles.categorySelectIcon}
                    color={item.selected ? '#FDFEFE' : '#808B96'}
                />
            </View>
        </View>
    );
    };

    return (
       <View style={styles.container}>
       <ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false}>

        <SafeAreaView>
            <View style={styles.headerWrapper}>
            {/* Image */}
                <Image source={require('../assets/images/profilePicture.jpg')} 
                style={styles.profileImage}></Image>

{/* Menu Icon */}
                <Feather name="menu" size={24} ></Feather>

            </View>
        </SafeAreaView>

        {/* Titles */}
        <View style={styles.titlesWrapper}>
            <Text style={styles.titlesSubtitle}> Food</Text>
            <Text style={styles.titlesTitle}>Delivery</Text>
        </View>

        {/* search */}
        <View style={styles.searchWrapper}>
            <Feather name="search" size={16}></Feather>

            <View style={styles.search}>
                <Text style={styles.searchText}>Search</Text>
            </View>

        </View>

        {/* categories */}
        <View style={styles.categoriesWrapper}>
            <Text style={styles.categoriesTitle}>Categories</Text>
            <View style={styles.categoriesListWrapper}>
            <FlatList
                data={categoriesData}
                renderItem={renderCategoryItem}
                keyExtractor={item => item.id}
                horizontal={true}
      />
            </View>
        </View>


{/* categories ends here */}

{/* popular starts here */}
<View style={styles.popularWrapper}>
    <Text style={styles.popularTitle}>Popular</Text>

    {popularData.map((item) => (
        <View style={[styles.popularCardWrapper, 
        {   
            marginTop: item.id == 1 ? 10 : 20,
        }]}>
            
            <View>
                <View>
                <View>

                <View style={styles.topWrapper}>
                        <MaterialCommunityIcons name="crown" size = {12} color={'#F1C40F'} />
                        <Text style={styles.topText}>top of the week</Text>
                </View>

                <View style={styles.popularTitlesWrapper}>
                    <Text style={styles.popularTitlesTitle}>{item.title}</Text>
                </View>
                </View>

                <View  style={styles.popularCardButton}>
                 <View style={styles.addBurgerButton}> 
                    <Feather name="plus" size={10}></Feather>
                  </View> 
                  <View style={styles.ratingWrapper}>
                    <MaterialCommunityIcons name="star" size={10} />
                    <Text style={styles.rating}>{item.rating}</Text> 
                  </View>
                </View>
            </View>

            <View style={styles.popularCardRight}>
                <Image source={item.image} style={styles.popularCardImage}/>
            </View>
            </View>
        </View>
    ))}
        </View>
        </ScrollView>
       </View>
    );
};

// style={styles.}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },


//   Header Part starts here
 headerWrapper: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     paddingHorizontal: 20,
     paddingTop: 20,

     alignItems: 'center',

 },
 profileImage: {
     width: 40,
     height: 40,
     borderRadius: 40,

 },
 titlesWrapper : {
    paddingHorizontal: 20,
    marginTop: 30,

 },
titlesSubtitle : {
    fontSize: 16,

},
titlesTitle : {
    marginTop: 5,
    fontSize: 32,

},
//   Header Part ends here

// search bar part starts here
searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 30,

},
search: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: '#34495E',
    borderBottomWidth: 1,
},
searchText: {
    fontSize: 14,
    marginBottom: 5,
    
},
// search bar part ends here

// categories starts here
categoriesWrapper: {
    marginTop: 30,

},
categoriesTitle: {
    fontSize: 16,
    paddingHorizontal: 20,
},
categoriesListWrapper: {
    paddingTop: 15,
    paddingBottom: 20,

},
// categories ends here

// category Item starts here
categoryItemWrapper: {
    backgroundColor: '#F7DC6F',
    marginRight: 10,
    borderRadius: 20,


    shadowColor: '#D0D3D4',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    

},
categoryItemImage: {
    width: 60,
    height: 60,
    marginTop: 24,
    alignSelf: 'center',
    marginHorizontal: 20,

},
categoryItemText: {
    textAlign: 'center',
    fontSize: 14,
    marginTop: 10,

},
categorySelectItemWrapper: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: 26,
    height: 26,
    borderRadius: 26,
    marginBottom:20,

},
categorySelectIcon: {
    alignSelf: 'center',
},
// categoriess part ends here

// popular part starts here
popularWrapper: {
    paddingHorizontal: 20,

    
},
popularTitle: {
    fontSize: 16,
},
popularCardWrapper:{
    backgroundColor: '#FBFCFC',
    borderRadius: 25,
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: 'row',
    overflow: 'hidden',

    shadowColor: '#D0D3D4',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
},
topWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
},
topText: {
    marginLeft: 10,
    fontSize: 14,
},

popularTitlesWrapper: {
    marginTop: 20,

},
popularTitlesTitle: {
    fontSize: 12,
    color: '#1B4F72',
},

popularCardButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: -20,

},
addBurgerButton: {
    backgroundColor: '#F4D03F',
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,

},

ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,

},
rating: {
    fontSize: 12,
    marginLeft: 5,

},
popularCardRight: {
    marginLeft: 265,
},
popularCardImage: {
    width: 70,
    height: 25,
    marginTop: -85,
    resizeMode: 'contain',

},
            
});
