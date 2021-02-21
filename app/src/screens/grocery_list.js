import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Button, TouchableRipple
} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { testTask } from '../data/data'
import Confirmation from './confirmation'

const TODO = [
  {
    title: 'Fruits',
    data: [{name: 'Apples', count: 6}, {name: 'Oranges', count: 4}],
  },
  {
    title: 'Drinks',
    data: [{name: 'Coke', count: 4}, {name: 'Fruit Punch', count: 3}],
  },
]

const FoodItem = ({ item, allowAdd, onAdd }) => {
  return (
    <View style={foodItemStyles.container}>
      <View style={foodItemStyles.img}>
        <Image style={{ width: 75, height: 75 }} source={require('../assets/img.jpg')}/>
      </View>
      <View style={foodItemStyles.details}>
        <Text style={foodItemStyles.header}>{item.name}</Text>
        <Text>Count: {item.count}</Text>
      </View>
      {
        allowAdd &&
        <TouchableRipple onPress={onAdd} style={{ width: 40, height: 40, alignSelf: 'center' }}>
          <Icon name="plus" size={40} />
        </TouchableRipple>
      }
    </View>
  )
}

const foodItemStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    flexDirection: 'row',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  details: {
    marginLeft: 10,
    flex: 1,
  }
})

const NavBtn = ({ active, text, onPress }) => {
  return (
    <View style={{ flex:1 }}>
      <Button style={{ opacity: active ? 1 : .5 }} model="contained" onPress={onPress}>
        {text}
      </Button>
      <View style={{ backgroundColor: active ? 'blue' : 'lightgray', height: 3 }} />
    </View>
  )
}

export default ({ route, navigation }) => {
  let task
  if (!route.params) 
    task = testTask 
  else 
    task = route.params.task

  const [todo, setTodo] = useState(TODO)
  const [totalItems, setTotalItems] = useState(0)
  const [cart, setCart] = useState([])
  const [tab, setTab] = useState('todo')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let sum = 0
    for (let cat of TODO) {
      for (let item of cat.data) {
        sum += item.count
      }
    }
    setTotalItems(sum)
  }, [])

  const renderSectionHeader = ({ section: { title } }) => {
    return (
      <View style={{ marginBottom: 10 }}>
        <Text style={styles.header}>{ title }</Text>
      </View>
    )
  }

  const getCartSize = () => {
    let sum = 0
    for (let item of cart) {
      sum += item.count
    }
    return sum
  }

  const removeItem = (item) => {
    // remove from todos
    for (let i = 0; i < todo.length; i++) {
      const todoIndex = todo[i].data.findIndex((cur) => cur.name == item.name)
      if (todoIndex != -1) {
        todo[i].data[todoIndex].count--
        if (todo[i].data[todoIndex].count == 0) {
          todo[i].data.splice(todoIndex,1)
        } 
        setTodo([...todo])
        break
      }
    }

    // add to cart
    const cartIndex = cart.findIndex((cur) => cur.name == item.name)
    if(cartIndex == -1) {
      cart.push({...item, count: 1})
      setCart([...cart])
    } else {
      cart[cartIndex].count++
      setCart([...cart])
    }
  }

  const nextScreen = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(1)
      //navigation.push('Confirmation', { task, text: 'Order is confirmed complete.' })
    }, 1000)
  }

  return (
    <>
    { loading !== 1 ?
      <View style={styles.expand}>
        <View style={styles.row}>
          <NavBtn text="To do" active={tab == 'todo'} onPress={() => setTab('todo')} />
          <NavBtn text="Added to cart" active={tab == 'cart'} onPress={() => setTab('cart')} />
        </View>
        {
          tab == 'todo' ?
          <SectionList
            style={styles.expand}
            sections={todo}
            keyExtractor={(item, i) => ''+i}
            renderItem={({item}) => <FoodItem item={item} allowAdd onAdd={() => removeItem(item)} />}
            renderSectionHeader={renderSectionHeader}
          />
          :
          <FlatList
            style={styles.expand}
            data={cart}
            keyExtractor={(item, i) => ''+i}
            renderItem={({item}) => <FoodItem item={item} />}
          />
        }
        <TouchableRipple 
          style={{ padding: 10, backgroundColor: getCartSize() == totalItems ? 'green' : 'lightgray' }} 
          disabled={getCartSize() != totalItems} 
          onPress={nextScreen}
        >
          <>
          <Text style={{ textAlign: 'center', fontSize: 40, fontWeight: 'bold' }}>{getCartSize()}/{totalItems}</Text>
          <Text style={{ textAlign: 'center' }}>items added</Text>
          </>
        </TouchableRipple>

        {
          loading === true &&
          <View style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', zIndex: 5, backgroundColor: '#00000033' }}>
            <Text style={{  }}>Loading</Text>
          </View>
        }
      </View> 
      :
      <Confirmation 
        text="Order has been completed"
      />
    }
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: 'green',
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 10,
  },
  expand: {
    flex: 1,
  }
})