import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={s.container}>
      <Text style={s.title}>SplitUp — Home</Text>
      <Button title="Go to About →" onPress={() => navigation.navigate('About')} />
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 22, marginBottom: 16 },
});