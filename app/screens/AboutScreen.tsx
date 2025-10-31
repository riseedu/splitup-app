import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={s.container}>
      <Text style={s.title}>About SplitUp</Text>
      <Text>Expo + React Navigation working ✅</Text>
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 22, marginBottom: 8 },
});