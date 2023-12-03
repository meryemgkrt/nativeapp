import {View, Text, Button} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
export default function DetailScren() {
  const navigation = useNavigation();
  const params = useRoute()?.params;
  const goToDetailPage = () => {
    navigation.navigate('Login');
  };
  useLayoutEffect(() => {
    navigation.setOptions({title: params?.title});
  }, [navigation, params?.title]);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Detail {params?.name}</Text>
      <Button title="Logout" onPress={goToDetailPage} />
      <Button title="Go Back" onPress={() => navigation.goBack} />
    </View>
  );
}
