import React, { useContext } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native'
import ThemeContext from '../global/themeContext';

export default function Home () {
    const {theme} = useContext(ThemeContext);
  return (
    <ScrollView style={[styles.container, theme.container]} showsVerticalScrollIndicator={false}>
        <SafeAreaView style={[styles.container, theme.container]}>
            <View style={styles.head}>
                <View style={{flexDirection: 'row'}}>
                    <Image source={require('../images/profile.png')}
                    style={{height: 60, width: 60}}/>
                    <View style={{paddingLeft: 10, }}>
                        <Text style={[styles.headText, theme.text]}>Welcome back, </Text>
                        <Text style={[{fontWeight: '700', fontSize: 20}, theme.text]}> Eric Atsu</Text>
                    </View>
                </View>
                
                <View style={[styles.searchIcon, theme.icons]}>
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
                    <View style={[styles.icon, theme.icons]}>
                        <Image source={require("../images/send.png")}/>
                    </View>
                    <Text style={[styles.iconText, theme.text]}>Sent</Text>
                </View>
                <View style={{paddingLeft: 40, alignItems: 'center'}}>
                    <View style={[styles.icon, theme.icons]}>
                        <Image source={require("../images/recieve.png")}/>
                    </View>
                    <Text style={[styles.iconText, theme.text]}>Recieve</Text>
                </View>
                <View style={{paddingLeft: 40, alignItems: 'center'}}>
                    <View style={[styles.icon, theme.icons]}>
                        <Image source={require("../images/loan.png")}/>
                    </View>
                    <Text style={[styles.iconText, theme.text]}>Loan</Text>
                </View>
                <View style={{paddingLeft: 40, alignItems: 'center'}}>
                    <View style={[styles.icon, theme.icons]}>
                        <Image source={require("../images/topUp.png")}/>
                    </View>
                    <Text style={[styles.iconText, theme.text]}>Top up</Text>
                </View>
            </View>
            <View style={styles.transaction}>
                <Text style={[styles.transText, theme.text]}>Transaction</Text>
                <Text style={[styles.transText, {color:'blue'}, theme.blueText]}> See All</Text>
            </View>
            <View style={{padding: 20, paddingTop: 0}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={[styles.icon, {marginRight: 15}, theme.icons]}>
                            <Image source={require('../images/apple.png')}
                            style={{height: 30, width: 20}}
                            resizeMode='contain'/>
                        </View>
                        <View>
                            <Text style={[styles.money, {paddingTop: 0}, theme.text]}>Apple Store</Text>
                            <Text style={[styles.entertainment, theme.text]}>Entertainment</Text>
                        </View>
                    </View>
                    <Text style={[styles.money, theme.text]}> -$5,99</Text>
                </View>
            </View>
            <View style={{padding: 20, paddingTop: 0}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={[styles.icon, {marginRight: 15}, theme.icons]}>
                            <Image source={require('../images/spotify.png')}
                            style={{height: 30, width: 25}}
                            resizeMode='contain'/>
                        </View>
                        <View>
                            <Text style={[styles.money, {paddingTop: 0}, theme.text]}>Spotify </Text>
                            <Text style={[styles.entertainment, theme.text]}>Music</Text>
                        </View>
                    </View>
                    <Text style={[styles.money, theme.text]}> -$12,99</Text>
                </View>
            </View>
            <View style={{padding: 20, paddingTop: 0}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={[styles.icon, {marginRight: 15}, theme.icons]}>
                            <Image source={require('../images/moneyTransfer.png')}
                            style={{height: 30, width: 25}}
                            resizeMode='contain'/>
                        </View>
                        <View>
                            <Text style={[styles.money, {paddingTop: 0}, theme.text]}>Money Transfer </Text>
                            <Text style={[styles.entertainment, theme.text]}>Transaction</Text>
                        </View>
                    </View>
                    <Text style={[styles.money, {color: 'blue'}, theme.blueText]}> $300</Text>
                </View>
            </View>
            <View style={{padding: 20, paddingTop: 0}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={[styles.icon, {marginRight: 15}, theme.icons]}>
                            <Image source={require('../images/grocery.png')}
                            style={{height: 30, width: 25}}
                            resizeMode='contain'/>
                        </View>
                        <View>
                            <Text style={[styles.money, {paddingTop: 0}, theme.text]}>Grocery </Text>
                            <Text style={[styles.entertainment, theme.text]}>Food Stuffs</Text>
                        </View>
                    </View>
                    <Text style={[styles.money, theme.text]}> -$88</Text>
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
