import React from 'react'
import { StyleSheet, View } from 'react-native';
import Text from '../components/text/text'
import ExploreBDHeader from '../components/ExploreBD-header';
import { spacing } from './../theme/spacing';
import { colors } from './../theme/colors';

export default function Details({ navigation }) {
    return (
        <View style={styles.container}>
            <ExploreBDHeader backBtn={true} />
            <Text>Details</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        padding: spacing[5]
    },
});