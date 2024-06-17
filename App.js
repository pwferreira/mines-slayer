import { StyleSheet, Text, View } from 'react-native';
import Field from './src/components/Field';
import Flag from './src/components/Flag';

export default function App() {
  return (
    <View style={styles.container}>
      <Field></Field>
      <Field opened></Field>
      <Field opened nearMines={1}/>
      <Field opened nearMines={2}/>
      <Field opened nearMines={3}/>
      <Field opened nearMines={6}/>
      <Field mined/>
      <Field mined opened/>
      <Field mined opened exploded/>
      <Field flagged/> 

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFFr',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
