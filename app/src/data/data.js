import { storeItem, deleteItem } from '../util'

export const testTask = {
  payment: 20,
  taskList: [
    {helpeeUid: 'helpee1', taskName: 'shopping', placeId: '0'},
    {helpeeUid: 'helpee2', taskName: 'library', placeId: '1'},
    {helpeeUid: 'helpee1', taskName: 'home'},
    {helpeeUid: 'helpee2', taskName: 'home'},
  ],
  timeEst: 30,
}

export const taskRunnerTasks = [
  testTask,testTask,testTask,testTask,testTask,
]

export const placeImages = {
  safeway: 'https://i.imgur.com/clBgEZV.jpg',
  target: 'https://i.imgur.com/uO0Vhn8.jpg',
  walmart: 'https://i.imgur.com/1uWAcYS.jpeg',
  woodlandLibrary: 'https://i.imgur.com/k2U7JDn.jpg'
} 

export const places = [
  {
    placeId: '0',
    name: 'Safeway',
    address: '1750 Miramonte Ave, Mountain View, CA 94040',
    type: 'shopping', 
    img: placeImages.safeway,
  },
  {
    placeId: '1',
    name: 'Woodland Library',
    address: '1975 Grant Rd, Los Altos, CA 94024',
    type: 'library', 
    img: placeImages.woodlandLibrary,
  },  
  {
    placeId: '2',
    name: 'Target',
    address: '20745 Stevens Creek Blvd, Cupertino, CA 95014',
    type: 'shopping', 
    img: placeImages.target,
  },  
  {
    placeId: '3',
    name: 'Walmart',
    address: '600 Showers Dr, Mountain View, CA 94040',
    type: 'shopping', 
    img: placeImages.walmart,
  },  
]

export const useTestData = () => {
  // put test data into simple store
  return storeItem('places', places).then(() => 
    storeItem('taskRunnerTasks', taskRunnerTasks)
  )
}

export const deleteTestData = () => {
  deleteItem('places')
  deleteItem('taskRunnerTasks')
}