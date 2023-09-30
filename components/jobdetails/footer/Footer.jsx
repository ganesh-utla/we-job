import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, Linking, ToastAndroid } from 'react-native';

import styles from './footer.style';
import { icons } from '../../../constants';
import { storage } from "../../../utils/storage";
import { jobs } from '../../../constants/jobs';

const Footer = ({ url, job }) => {

  const [jobLiked, setJobLiked] = useState(false);
  const [curFavorites, setCurFavorites] = useState([]);

  const showToast = (text) => {
    ToastAndroid.showWithGravity(
      text,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  useEffect(() => {

    if (job) {
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
        for(let i=0; i<ret.length; i++) {
          if (job.job_id==ret[i].job_id) {
              setJobLiked(true);
              break;
          }
        }
        setCurFavorites([...ret]);
      })
      .catch(err => {});
    }
  }, [job]);

  const handleSave = () => {

    const curJob = {
      job_id: job.job_id,
      employer_name: job.employer_name,
      employer_logo: job.employer_logo,
      job_title: job.job_title,
      job_country: job.job_country,
      job_google_link: job.job_google_link,
      job_highlights: job.job_highlights,
      job_employment_type: job.job_employment_type
    };

    if (curFavorites.length==10) {
      showToast("You can upto 10 Favorite Jobs!");
    } 
    else {
      setJobLiked(prev => !prev);
      showToast("Job added to Favorites!");

      curFavorites.push(curJob);
      storage.save({
        key: 'favorites',
        data: curFavorites
      }); 
    }
    
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.likeBtn} 
        onPress={handleSave}
      >
        <Image
          source={jobLiked? icons.heart : icons.heartOutline}
          resizeMode='contain'
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>
          Apply for this job
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer