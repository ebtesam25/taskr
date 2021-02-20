import AsyncStorage from '@react-native-async-storage/async-storage';

export const getPlace = (placeId) => {
  return getItem('places').then(places => {
    return places.find(p => p.placeId == placeId)
  }).catch(err => {
    console.error(err)
  })
}

export const storeItem = (key, value) => {
  return AsyncStorage.setItem(key, JSON.stringify(value)).catch(err => {
    console.error(err)
  })
}

export const getItem = (key) => {
  return AsyncStorage.getItem(key).then(item => {
    if (!item)
      return null

    return JSON.parse(item)
  }).catch(err => {
    console.error(err)
    return null
  })
}

export const deleteItem = (key) => {
  return AsyncStorage.setItem(key, null).catch(err => {
    console.error(err)
  }) 
}