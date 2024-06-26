import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native'

export default function Home () {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <SafeAreaView style={styles.container}>
            <View style={styles.head}>
                <View style={{flexDirection: 'row'}}>
                    <Image source={require('../images/profile.png')}
                    style={{height: 60, width: 60}}/>
                    <View style={{paddingLeft: 10, }}>
                        <Text style={styles.headText}>Welcome back, </Text>
                        <Text style={{fontWeight: '700', fontSize: 20}}> Eric Atsu</Text>
                    </View>
                </View>
                
                <View style={styles.searchIcon}>
                    <Image source={require('../images/search.png')}
                    style={{height: 30}}/>
                </View> 
            </View>
            <View style={styles.card}>
                <Image source={require('../images/Card.png')}
                resizeMode='contain'
                style={{height: 300, width: 400}}/>
            </View>
            <View style={{flexDirection: 'row', paddingTop: 10}}>
                <View style={{paddingLeft: 25, alignItems: 'center'}}>
                    <View style={styles.icon}>
                        <Image source={require("../images/send.png")}/>
                    </View>
                    <Text style={styles.iconText}>Sent</Text>
                </View>
                <View style={{paddingLeft: 40, alignItems: 'center'}}>
                    <View style={styles.icon}>
                        <Image source={require("../images/recieve.png")}/>
                    </View>
                    <Text style={styles.iconText}>Recieve</Text>
                </View>
                <View style={{paddingLeft: 40, alignItems: 'center'}}>
                    <View style={styles.icon}>
                        <Image source={require("../images/loan.png")}/>
                    </View>
                    <Text style={styles.iconText}>Loan</Text>
                </View>
                <View style={{paddingLeft: 40, alignItems: 'center'}}>
                    <View style={styles.icon}>
                        <Image source={require("../images/topUp.png")}/>
                    </View>
                    <Text style={styles.iconText}>Top up</Text>
                </View>
            </View>
            <View style={styles.transaction}>
                <Text style={styles.transText}>Transaction</Text>
                <Text style={[styles.transText, {color:'blue'}]}> See All</Text>
            </View>
            <View style={{padding: 20, paddingTop: 0}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={[styles.icon, {marginRight: 15}]}>
                            <Image source={require('../images/apple.png')}
                            style={{height: 30, width: 20}}
                            resizeMode='contain'/>
                        </View>
                        <View>
                            <Text style={[styles.money, {paddingTop: 0}]}>Apple Store</Text>
                            <Text style={styles.entertainment}>Entertainment</Text>
                        </View>
                    </View>
                    <Text style={styles.money}> -$5,99</Text>
                </View>
            </View>
            <View style={{padding: 20, paddingTop: 0}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={[styles.icon, {marginRight: 15}]}>
                            <Image source={require('../images/spotify.png')}
                            style={{height: 30, width: 25}}
                            resizeMode='contain'/>
                        </View>
                        <View>
                            <Text style={[styles.money, {paddingTop: 0}]}>Spotify </Text>
                            <Text style={styles.entertainment}>Music</Text>
                        </View>
                    </View>
                    <Text style={styles.money}> -$12,99</Text>
                </View>
            </View>
            <View style={{padding: 20, paddingTop: 0}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={[styles.icon, {marginRight: 15}]}>
                            <Image source={require('../images/moneyTransfer.png')}
                            style={{height: 30, width: 25}}
                            resizeMode='contain'/>
                        </View>
                        <View>
                            <Text style={[styles.money, {paddingTop: 0}]}>Money Transfer </Text>
                            <Text style={styles.entertainment}>Transaction</Text>
                        </View>
                    </View>
                    <Text style={[styles.money, {color: 'blue'}]}> $300</Text>
                </View>
            </View>
            <View style={{padding: 20, paddingTop: 0}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={[styles.icon, {marginRight: 15}]}>
                            <Image source={require('../images/grocery.png')}
                            style={{height: 30, width: 25}}
                            resizeMode='contain'/>
                        </View>
                        <View>
                            <Text style={[styles.money, {paddingTop: 0}]}>Grocery </Text>
                            <Text style={styles.entertainment}>Food Stuffs</Text>
                        </View>
                    </View>
                    <Text style={styles.money}> -$88</Text>
                </View>
            </View>
        </SafeAreaView>
    </ScrollView>
  
  );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  head: {
    flexDirection: 'row', 
    padding: 20,
    justifyContent: 'space-between'
  },
  searchIcon: {
    backgroundColor: '#D3D3D3',
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    width: 60
  }, 
  headText: {
    opacity: 0.5, 
    padding: 5, 
    fontSize: 15
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
  icon: {
    backgroundColor: '#E4E4E4',
    width: 60,
    height: 60,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconText: {
    fontSize: 18, 
    padding: 5
  }, 
  transaction: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    padding: 30
  },
  transText: {
    fontWeight: '600',
    fontSize: 22
  },
  money: {
    fontSize: 20,
    fontWeight: '600',
    paddingTop: 15
  },
  entertainment: {
    fontSize: 17,
    opacity: 0.5
  }
});
