import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native'
import {Content, Item, Input, Label} from 'native-base'

import {changeEmail, changePassword, login} from '../actions/AuthActions'

class FormLogin extends Component {

    _authUser() {
        const {email, password} = this.props
        this.props.login(email, password)
    }
    
    render() {
        return (
            <View style={styles.main}>
                <Content contentContainerStyle={styles.loginArea}>
                    <Image style={styles.logo} source={require('../imgs/carefy-logo.png')} />
                    <Item floatingLabel>
                        <Label style={styles.label}>Email</Label>
                            <Input style={styles.input} onChangeText={email => this.props.changeEmail(email)} />
                    </Item>
                    <Item floatingLabel>
                        <Label style={styles.label}>Senha</Label>
                            <Input style={styles.input} onChangeText={password => this.props.changePassword(password)} secureTextEntry />
                    </Item>
                    <Text style={styles.errorLogin}>
                        {this.props.errorLogin}
                    </Text>
                    <TouchableOpacity style={styles.btnLogin} onPress={() => this._authUser()}>
                        <Text style={styles.btnText}>Entrar</Text>
                    </TouchableOpacity>
                </Content>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    logo: {
        alignSelf: 'center'
    },
    loginArea: {
        flex: 5,
        justifyContent: 'center'
    },
    errorLogin: {
        marginTop: 10,
        color: '#ff0000', 
        fontSize: 18
    },
    label: {
        fontSize: 14,
        color: '#2196f3',
        marginTop: 10
    },
    input: {
        borderBottomColor: '#000',
        marginTop: 10
    },
    btnLogin: {
        padding: 10,
        marginTop: 20,
        backgroundColor: '#2196f3',
        height: 50,
        borderRadius: 4,
        justifyContent: 'center'
    },
    btnText: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 18,
    }
})

const mapStateToProps = state => ({email: state.AuthReducer.email, password: state.AuthReducer.password, errorLogin: state.AuthReducer.errorLogin})
export default connect(mapStateToProps, {changeEmail, changePassword, login})(FormLogin)