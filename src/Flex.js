import React from 'react';
import { StyleSheet, View } from 'react-native';

const Flex = () => {
    return (
        <View
            style={[
                styles.container,
                {
                    // Try setting `flexDirection` to `"row"`.
                    backgroundColor: 'yellow'

                },
            ]}>
            <View style={{ flexDirection: 'row', flex: 1, backgroundColor: 'yellow', }} >
                <View style={{ flex: 1, backgroundColor: 'red', margin: 5 }} ></View>
                <View style={{ flex: 1, backgroundColor: 'red', margin: 5 }} ></View>
                <View style={{ flex: 1, backgroundColor: 'red', margin: 5 }} ></View>
                <View style={{ flex: 1, backgroundColor: 'red', margin: 5 }} ></View>
            </View>
            <View style={{  flexDirection: 'row',flex: 1, backgroundColor: 'yellow', }} >
                <View style={{ flex: 2, backgroundColor: 'red', margin: 5 }} ></View>
                <View style={{ flex: 1, backgroundColor: 'yellow', }} ></View>
                <View style={{ flex: 1, backgroundColor: 'red', margin: 5 }} ></View>
                
            </View>
            <View style={{ flexDirection: 'row', flex: 1, backgroundColor: 'yellow', }} >
            <View style={{ flex: 1, backgroundColor: 'yellow', margin: 5 }} ></View>
                <View style={{ flex: 2, backgroundColor: 'red', margin: 5 }} ></View>
                <View style={{ flex: 1, backgroundColor: 'red', margin: 5 }} ></View>
            
            </View>


            <View style={{ flex: 3, backgroundColor: 'red', margin: 5, }} ></View>
            <View style={{ flex: 2, backgroundColor: 'red', margin: 5, }} ></View>
            <View style={{ flex: 1.5, backgroundColor: 'red', margin: 5, }} ></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,ds

    },
});

export default Flex;