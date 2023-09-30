import React, {useState, useEffect} from 'react'
import { View, Text, SafeAreaView, ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native';
import { Stack, useRouter, useGlobalSearchParams } from 'expo-router';
import { icons, COLORS, SIZES } from '../../constants';
import styles from "../../styles/favorites";
import { ScreenHeaderBtn, ClearModal, FavoriteCard } from '../../components';
import { jobs } from '../../constants/jobs';
import { storage } from '../../utils/storage';


const index = () => {

    const router = useRouter();

    const [favoritesList, setFavoritesList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [removeModalVisible, setRemoveModalVisible] = useState(false);
    const [removeJobId, setRemoveJobId] = useState("");

    const handleSearch = async () => {
        setTimeout(() => {
            setIsLoading(false);
            // setFavoritesList(jobs);
            let curFavorites = [];
            // storage.clearMap();
            storage.load({
                key: 'favorites',
                autoSync: true,
                syncInBackground: true,
                syncParams: {
                    extraFetchOptions: {
                    },
                    someFlag: true
                }
            })
            
            .then(ret => {
              ret.forEach(fav => {
                curFavorites.push(fav);
              }); 
            })
            
            .catch(err => {})
            
            .finally(() => {
                setFavoritesList([...curFavorites]);
            });
    
        }, 1000);
    };

    const handleClear = () => {
        storage.remove({
            key: 'favorites'
        });
        setFavoritesList([]);
    }

    const handleRemove = () => {
        const curFavorites = favoritesList.filter(job => job.job_id!=removeJobId);
        setFavoritesList([...curFavorites]);
        storage.save({
            key: 'favorites',
            data: curFavorites
        }); 
    }

    useEffect(() => {
        handleSearch();
    }, [])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <Stack.Screen
            options={{
                headerStyle: { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn
                        iconUrl={icons.left}
                        dimension='60%'
                        handlePress={() => router.back()}
                    />
                ),
                headerTitle: "",
            }}
        />

        <ClearModal 
            text="Clear Favorites" 
            modalVisible={modalVisible} 
            setModalVisible={setModalVisible} 
            handleClear={handleClear} 
        />

        <ClearModal 
            text="Remove Job"
            modalVisible={removeModalVisible} 
            setModalVisible={setRemoveModalVisible} 
            handleClear={handleRemove}
        />

        <ScrollView showsVerticalScrollIndicator={false}>
            
            <View style={{flex: 1, padding: SIZES.medium}}>

                <View style={styles.header}>
                    <Text style={styles.headerTitle}>
                        My Favorites
                    </Text>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <Text style={styles.headerBtn}>
                            Clear all
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.cardsContainer}>
                    {isLoading? (
                    <ActivityIndicator size="large" color={COLORS.primary} />
                    ) : isError? (
                    <Text>Something went wrong!</Text>
                    ) : 
                    favoritesList.length > 0?(
                        favoritesList.map((job) => (
                            <FavoriteCard 
                                job={job}
                                key={`nearby-job-${job.job_id}`}
                                handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
                                handleRemove={() => {
                                    setRemoveModalVisible(true);
                                    setRemoveJobId(job.job_id);
                                }}
                            />
                        ))
                    ) : (
                        <View style={styles.noresult}>
                            <Text style={styles.noresultText}>
                                No favorites found
                            </Text>
                        </View>

                    )}
                </View>
            </View>
            
        </ScrollView>

    </SafeAreaView>
  )
}

export default index