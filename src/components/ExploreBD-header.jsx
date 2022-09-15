import { View, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Text from './text/text';
import { spacing } from '../theme/spacing';
import { colors } from '../theme/colors';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

export default function ExploreBDHeader({ backBtn, title = 'Explore BD' }) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>

            {
                backBtn && (
                    <Pressable
                        style={{ marginRight: spacing[4] }}
                        onPress={() => {
                            navigation.goBack();
                        }}
                    >
                        <AntDesign name="arrowleft" size={18} color="white" />
                    </Pressable>
                )
            }
            <Text preset='h2'>{title}</Text>

        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        padding: spacing[5],
        borderBottomWidth: 0.2,
        borderBottomColor: colors.white,
        flexDirection: 'row',
        alignItems: 'center',
    }
})