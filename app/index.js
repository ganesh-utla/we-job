import { Stack, useRouter } from "expo-router";
import { View, SafeAreaView, ScrollView } from "react-native";

import { COLORS, icons, SIZES, images } from "../constants";
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome, Sidebar, ProfileModal } from "../components";
import { useEffect, useState } from "react";
import { storage } from "../utils/storage";

const Home = () => {

    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [profileVisible, setProfileVisible] = useState(false);
    const [username, setUsername] = useState("John");

    useEffect(() => {
        storage.load({
            key: 'username',
            autoSync: true,
            syncInBackground: true,
            syncParams: {
                extraFetchOptions: {
                },
                someFlag: true
            }
            })
            .then(ret => {
                setUsername(ret);
            })
            .catch(err => {
                setUsername("John");
            });
    }, []);

    return (
        <SafeAreaView style={{flex:1, backgroundColor: COLORS.lightWhite}}>

            <Stack.Screen 
                options={{
                    headerStyle: {backgroundColor: COLORS.lightWhite},
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn 
                            iconUrl={icons.menu} 
                            dimension="60%" 
                            handlePress={() => setSidebarVisible(true)} 
                        />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn 
                            iconUrl={icons.profile} 
                            dimension="80%" 
                            inlineStyles={{tintColor: "#333"}} 
                            handlePress={() => setProfileVisible(true)}
                        />
                    ),
                    headerTitle: ""
                }}
            />

            <Sidebar modalVisible={sidebarVisible} setModalVisible={setSidebarVisible} />

            <ProfileModal modalVisible={profileVisible} setModalVisible={setProfileVisible} username={username} setUsername={setUsername} />

            <ScrollView showsVerticalScrollIndicator={false}>
                
                <View
                    style={{
                        flex: 1, padding: SIZES.medium
                    }}
                >

                    <Welcome 
                        username={username}
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        handleSearch={() => {
                            if (searchTerm.length > 0) 
                                router.push(`/search/${searchTerm}`);
                        }}
                    />

                    <Popularjobs />

                    <Nearbyjobs />

                </View>

            </ScrollView>

        </SafeAreaView>
    )
}

export default Home;