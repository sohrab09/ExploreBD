import { StyleSheet, View, FlatList, Pressable } from 'react-native';
import React from 'react'
import Text from '../components/text/text'
import ExploreBDHeader from '../components/ExploreBD-header';
import { spacing } from './../theme/spacing';
import { colors } from './../theme/colors';
import { DISTRICT_LIST } from '../data/data';
import { AntDesign } from '@expo/vector-icons';


export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <ExploreBDHeader />
            <FlatList
                contentContainerStyle={styles.list}
                data={DISTRICT_LIST}
                keyExtractor={(item) => item.name}
                renderItem={({ item, index }) => {
                    const { name, color } = item;
                    return (
                        <Pressable onPress={() => {
                            navigation.navigate('Details')
                        }} style={styles.item}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={[styles.circle, { backgroundColor: color }]} />
                                <Text preset='h3' style={styles.itemName}>{index + 1} - {name}</Text>
                            </View>
                            <View>
                                <AntDesign name="right" size={18} color="white" />
                            </View>
                        </Pressable>
                    )
                }}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        padding: spacing[5]
    },
    list: {
        padding: spacing[4]
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: spacing[4],
    },
    circle: {
        width: 25,
        height: 25,
        borderRadius: 15,
    },
    itemName: {
        textTransform: 'uppercase',
        marginLeft: spacing[4]
    },
    separator: {
        height: 1,
        backgroundColor: colors.white,
        marginHorizontal: spacing[4]
    }
});