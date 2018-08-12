import FormLogin from './components/FormLogin'
import Main from './components/Main'
import FormRegister from './components/FormRegister'
import PacientList from './components/PacientList'
import AccountScreen from './components/AccountScreen'

import {createStackNavigator} from 'react-navigation'

const routes = createStackNavigator({
    FormLogin: {
        screen: FormLogin,
        navigationOptions: {
            header: null
        }
    },
    Main: {
        screen: Main,
        navigationOptions: {
            header: null
        }
    }
})

export default routes