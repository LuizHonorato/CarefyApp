import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import {Content, SwipeRow, Text, Icon, Button } from 'native-base';

class PacientList extends Component {
    render() {
        return (
            <View style={styles.main}>
                <View style={styles.titlePage}>
                    <Text style={styles.txtTitle}>Lista de pacientes</Text>
                    <Text style={styles.subTitle}>(Para deletar deslize o item para a esquerda)</Text>
                </View>
                <Content scrollEnabled={false} style={styles.itemList}>
                    <SwipeRow
                        rightOpenValue={-75}
                        body={
                            <View>
                                <Text>Paciente</Text>
                            </View>
                            }
                        right={
                            <Button danger onPress={() => alert('Trash')}>
                                <Icon active name="trash" />
                            </Button>
                            }
                        />
                    </Content>
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
    itemList: {
        flex: 5
    },
    titlePage: {
        flex: 1,
        alignItems: 'center'
    },
    txtTitle: {
        fontSize: 28,
        color: '#000'
    },
    subTitle: {
        fontSize: 15,
        color: '#9E9E9E'
    }
})

export default PacientList
