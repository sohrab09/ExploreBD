import { StyleSheet, View, FlatList, Pressable, TextInput } from 'react-native';
import React from 'react'
import Text from '../components/text/text'
import ExploreBDHeader from '../components/ExploreBD-header';
import { spacing } from './../theme/spacing';
import { colors } from './../theme/colors';
import { DISTRICT_LIST } from '../data/data';
import { AntDesign } from '@expo/vector-icons';


export default function Home({ navigation }) {

    const [list, setList] = React.useState(DISTRICT_LIST);

    const searchFilter = (text) => {
        const filteredList = DISTRICT_LIST.filter(item => {
            const itemName = item.name.toLowerCase();
            const useTypedText = text.toLowerCase();

            return itemName.indexOf(useTypedText) > -1;
        });

        setList(filteredList);

    }


    return (
        <View style={styles.container}>
            <ExploreBDHeader />
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Search Your District Name"
                    placeholderTextColor={colors.white}
                    autoCorrect={false}
                    onChangeText={(text) => searchFilter(text)}
                />
            </View>
            <FlatList
                contentContainerStyle={styles.list}
                data={list}
                keyExtractor={(item) => item.name}
                renderItem={({ item, index }) => {
                    const { name, color } = item;
                    return (
                        <Pressable key={index} onPress={() => {
                            navigation.navigate('Details', { item })
                        }} style={styles.item}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={[styles.circle, { backgroundColor: color }]} />
                                <Text preset='h3' style={styles.itemName}>{name}</Text>
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
    input: {
        color: colors.white,
        borderBottomColor: colors.white,
        borderBottomWidth: 0.5,
        margin: spacing[5],
        textAlign: 'center'
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
        borderBottomColor: colors.white,
        borderBottomWidth: 0.5,
        marginHorizontal: spacing[4]
    }
});