import React from 'react'
import {StyleSheet} from 'react-native'
import FormRegister from '../components/FormRegister'
import PacientList from '../components/PacientList'
import AccountScreen from '../components/AccountScreen'
import {TabNavigator} from 'react-navigation'
import {Footer, FooterTab, Button, Icon, Text, Badge, StyleProvider} from 'native-base'
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';

export default (Main = TabNavigator(
    {
        FormRegister: {screen: FormRegister},
        PacientList: {screen: PacientList},
        AccountScreen: {screen: AccountScreen}
    },
    {
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        tabBarComponent: props => {
            return (
                <StyleProvider style={getTheme(material)}>
                <Footer>
                    <FooterTab style={styles.footerTabs}>
                        <Button vertical
                                active={props.navigationState.index === 0}
                                onPress={() => props.navigation.navigate('FormRegister')}>
                            <Icon style={styles.btnsFooter} name="local-hospital" type='MaterialIcons' />
                            <Text style={styles.btnsFooter}>Cadastro</Text>
                        </Button>
                        <Button badge vertical
                                active={props.navigationState.index === 1}
                                onPress={() => props.navigation.navigate('PacientList')}>
                            <Badge><Text>2</Text></Badge>
                            <Icon style={styles.btnsFooter} active name="person" />
                            <Text style={styles.btnsFooter}>Pacientes</Text>
                        </Button>
                        <Button vertical
                                active={props.navigationState.index === 2}
                                onPress={() => props.navigation.navigate('AccountScreen')}>
                            <Icon style={styles.btnsFooter} name="account-circle" type='MaterialIcons' />
                            <Text style={styles.btnsFooter}>Minha conta</Text>
                        </Button>
                    </FooterTab>
                </Footer>
                </StyleProvider>
            )
        }
    }
))
  
const styles = StyleSheet.create({
    footerTabs: {
        backgroundColor: '#2196f3'
    },
    btnsFooter: {
        color: '#fff'
    }
})