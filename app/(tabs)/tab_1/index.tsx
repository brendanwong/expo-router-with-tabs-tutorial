import { Link } from 'expo-router'
import { Text, View } from 'react-native'

const index = () => {
    return (
        <View>
            <Text>Tab 1</Text>
            <Link href="tab_1/dummy_page">Enter tab 1's stack</Link>
        </View>
    )
}

export default index