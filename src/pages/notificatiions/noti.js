import { Button, StyleSheet, Text, View, Alert } from 'react-native'
import * as Notifications from 'expo-notifications'
import React, { useEffect } from 'react'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

function Noti(){
  const click = async () => {
    const { status } = await Notifications.getPermissionsAsync();

    if(status !== "granted"){
      Alert.alert("Você não ativou as notificações");
      return;
    }

    const token = await Notifications.getExpoPushTokenAsync();
    console.log(token);
  };

  return (
    <View style={styles.container}>
      <Text>teste</Text>
      <Button title='Teste Notifications' onPress={click}/>
    </View>
  )
}

export default Noti

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
