import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'

import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants';
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import useFetch from '../../../hook/useFetch';
import { useRouter } from 'expo-router';
import { jobs } from '../../../constants/jobs'; // mock data

const Popularjobs = () => {

  const { data, isLoading, error } = useFetch(
    'search',
    {
      query: "React Developer",
      num_pages: 1
    }
  );

  
  // const isLoading = false;
  // const error = false;
  // const data = jobs;

  const router = useRouter();

  const [selectedJob, setSelectedJob] = useState(0);

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Popular Jobs
        </Text>
        <TouchableOpacity onPress={() => router.push('/search/React%20Developer')}>
          <Text style={styles.headerBtn}>
            Show all
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error? (
          <Text>Something went wrong!</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard 
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={item => item.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>

    </View>
  )
}

export default Popularjobs