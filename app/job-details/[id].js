import React, { useCallback, useEffect, useState } from 'react'
import { ActivityIndicator, RefreshControl, SafeAreaView, ScrollView, Share, Text, View } from 'react-native'
import { COLORS, SIZES, icons } from '../../constants'
import { Stack, useGlobalSearchParams, useRouter } from 'expo-router'
import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from '../../components'
import useFetch from '../../hook/useFetch';
import { jobs } from '../../constants/jobs'; // mock data


const JobDetails = () => {

    const params = useGlobalSearchParams();
    const router = useRouter();

    const { data, isLoading, error, refetch } = useFetch(
        "job-details",
        {
            job_id: params.id,
        }
    );
    
    // For mock purpose

    // const isLoading = false;
    // const error = false;
    // const [data, setData] = useState([{}]);

    // useEffect(() => {
    //     for(let i=0; i<jobs.length; i++) {
    //         if (params.id==jobs[i].job_id) {
    //             setData([jobs[i]]);
    //             break;
    //         }
    //     }
    // }, []);

    const tabs = ["About", "Qualifications", "Responsibilities"];

    const [refreshing, setRefreshing] = useState(false);

    const [activeTab, setActiveTab] = useState(tabs[0]);
    
    
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        // refetch();
        setRefreshing(false);
    }, []);

    const displayContent = () => {
        switch (activeTab) {
            case "Qualifications":
                return <Specifics 
                            title="Qualifications"
                            points={data[0].job_highlights?.Qualifications?? ["N/A"]}
                        />
            case "Responsibilities":
                return <Specifics 
                            title="Responsibilities"
                            points={data[0].job_highlights?.Responsibilities?? ["N/A"]}
                        />
            case "About":
                return <JobAbout
                            info={data[0].job_description?? ["No data provided"]}
                        />
        }
    }

    const handleShare = async () => {
        const jobUrl = data[0]?.job_google_link?? 'https://careers.google.com/jobs/results';
        try {
            await Share.share({
                message: `Hey! Check out this job: \n\n${jobUrl}`
            });
        } catch (error) {
            alert(error.message);
        }
    }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}} >

        <Stack.Screen
            options={{
                headerStyle: {backgroundColor: COLORS.lightWhite},
                headerShadowVisible: false,
                headerBackVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn 
                        iconUrl={icons.left}
                        dimension="60%"
                        handlePress={() => router.back()}
                    />
                ),
                headerRight: () => (
                    <ScreenHeaderBtn 
                        iconUrl={icons.share}
                        dimension="60%"
                        handlePress={handleShare}
                    />
                ),
                headerTitle: ""
            }}
        />

        <>
        <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
        >
            {
            isLoading? (
                <ActivityIndicator size="large" color={COLORS.primary} /> 
            ) : error? (
                <View style={{marginTop: SIZES.xLarge}}>
                    <Text style={{color: COLORS.gray2, textAlign: "center", fontSize: SIZES.medium}}>
                        Something went wrong!
                    </Text>
                </View>
            ) : data.length===0? (
                <View style={{marginTop: SIZES.xLarge}}>
                    <Text style={{color: COLORS.gray2, textAlign: "center", fontSize: SIZES.medium}}>
                        No data!!
                    </Text>
                </View>
            ) : (
                
                <View style={{ padding: SIZES.medium, paddingBottom: 100}}>

                    <Company 
                        companyLogo={data[0].employer_logo}
                        companyName={data[0].employer_name}
                        jobTitle={data[0].job_title}
                        location={data[0].job_country}
                    />

                    <JobTabs 
                        tabs={tabs}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />

                    {displayContent()}

                </View>
            )}
        </ScrollView>
        </>

        <JobFooter
            url={data[0]?.job_google_link?? 'https://careers.google.com/jobs/results'}
            job={data[0]}
        />

    </SafeAreaView>
  )
}

export default JobDetails