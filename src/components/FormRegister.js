import React, {Component} from 'react'
import {connect} from 'react-redux'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {Item, Input, Label} from 'native-base'
import {changeName, changeHospital, changeUserId, register} from '../actions/RegisterActions'

class FormRegister extends Component {

    _registerPacient() {
        const {user_id, name, hospital} = this.props
        this.props.register(name, hospital, user_id)
    }

    render(){
        return (
            <View style={styles.main}>
                <View style={styles.titlePage}>
                    <Text style={styles.txtTitle}>Cadastro</Text>
                </View>
                <View style={styles.registerArea}>
                    <Item floatingLabel>
                        <Label style={styles.label}>ID do Usuário</Label>
                            <Input style={styles.input} onChangeText={user_id => this.props.changeUserId(user_id)} />
                    </Item>
                    <Item floatingLabel>
                        <Label style={styles.label}>Nome do paciente</Label>
                            <Input style={styles.input} onChangeText={name => this.props.changeName(name)} />
                    </Item>
                    <Item floatingLabel>
                        <Label style={styles.label}>Hospital</Label>
                            <Input style={styles.input} onChangeText={hospital => this.props.changeHospital(hospital)} />
                    </Item>
                    <TouchableOpacity style={styles.btnRegister} onPress={() => this._registerPacient()}>
                        <Text style={styles.btnText}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    } 
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff'
    },
    titlePage: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtTitle: {
        fontSize: 30,
        color: '#000'
    },
    registerArea: {
        flex: 4
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
    btnRegister: {
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

const mapStateToProps = state => ({user_id: state.RegisterReducer.user_id, name: state.RegisterReducer.name, hospital: state.RegisterReducer.hospital, errorRegister: state.RegisterReducer.errorRegister})
export default connect(mapStateToProps, {changeName, changeHospital, changeUserId, register})(FormRegister)
