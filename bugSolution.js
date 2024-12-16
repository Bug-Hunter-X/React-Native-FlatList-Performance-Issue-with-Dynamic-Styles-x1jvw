The solution involves using the `useMemo` hook from React to memoize the style calculations. This ensures that the style is calculated only once per item, and the result is reused for subsequent renders. 

Here's how to modify the code:

```javascript
import React, { useMemo } from 'react';
import { FlatList, View, Text } from 'react-native';

const App = () => {
  const data = [{ backgroundColor: 'red' }, { backgroundColor: 'blue' }, {backgroundColor: 'green' }, {backgroundColor: 'yellow'}];

  const renderItem = ({ item }) => {
    const style = useMemo(() => ({ backgroundColor: item.backgroundColor }), [item.backgroundColor]);
    return (
      <View style={style}>
        <Text>{item.backgroundColor}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.backgroundColor}
    />
  );
};

export default App;
```

By using `useMemo`, the `style` object is only recalculated when `item.backgroundColor` changes. This significantly improves performance, especially when dealing with a large number of items.