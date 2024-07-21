import React, {memo} from 'react';
import {View} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

import styles from './styles';
import {SXVideoProps} from './types';

const SXVideo: SXVideoProps = ({uri}) => {
  const splited = uri?.split('v=')?.[1]?.split('&');
  const videoId = splited?.[0];

  return (
    <View style={styles.container}>
      <YoutubePlayer height={300} videoId={videoId} />
    </View>
  );
};

export default memo(SXVideo);
