import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { colors } from './src/theme/colors';
import { spacing } from './src/theme/spacing';
import { useFonts } from 'expo-font'
import Text from './src/components/text/text';


export default function App() {

  let [loaded] = useFonts({
    'LeagueSpartan-Regular': require('./assets/fonts/LeagueSpartan-Regular.ttf'),
    'LeagueSpartan-Bold': require('./assets/fonts/LeagueSpartan-Bold.ttf'),
    'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
  });

  if (!loaded) {
    return <Text>
      null
    </Text>;
  }

  return (
    <View style={styles.container}>
      <Text preset='h1'>Open up App.js to start working on your app!</Text>
      <Text preset='h1' style={{ color: colors.purple, marginTop: spacing[6] }}>Hello World</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
