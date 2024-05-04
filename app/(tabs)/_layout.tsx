import { Tabs } from 'expo-router'

const TabsLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="tab_1"
                options={{
                    headerTitle: "Tab 1",
                    title: "Tab 1 Title"
                }}
            />
            <Tabs.Screen
                name="index"
                options={{
                    headerTitle: "Home Tab",
                    title: "Home Tab Title"
                }}
            />
            <Tabs.Screen
                name="tab_2/index"
                options={{
                    headerTitle: "Tab 2",
                    title: "Tab 2 Title"
                }} />
        </Tabs>
    )
}

export default TabsLayout