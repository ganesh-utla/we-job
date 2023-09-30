import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'

import styles from './nearbyjobs.style'
import { COLORS } from '../../../constants';
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import useFetch from '../../../hook/useFetch';
import { useRouter } from 'expo-router';
import { jobs } from '../../../constants/jobs'; // mock data

const Nearbyjobs = () => {

  const router = useRouter();
  
  // const isLoading = false;
  // const error = false;
  // const data = jobs;

  const { data, isLoading, error } = useFetch(
    'search',
    {
      query: "React Developer",
      num_pages: 1
    }
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Nearby Jobs
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
          data?.map((job) => (
            <NearbyJobCard 
              job={job}
              key={`nearby-job-${job.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))
        )}
      </View>

    </View>
  )
}

export default Nearbyjobs