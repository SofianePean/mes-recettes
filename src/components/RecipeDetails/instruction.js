import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

//Import components
import Ingredients from './ingrédients';
import StepsRecipe from './stepsRecipe';

const Instruction = ({ title, ingredients, steps }) => {

    const renderItemIngredients = ({item}) => (
        <Ingredients name={item.name} quantity={item.measures.us}/>
    );

    const renderSeparator = () => (
        <View style={{ height: 1, backgroundColor: 'black'}} />
    );

    const renderItemSteps = ({item}) => (
        <StepsRecipe step={item.step} number={item.number}/>
    );
    
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View>
                <Text style={styles.ingredient}>Ingrédients :</Text>
                <FlatList
                    data={ingredients}
                    renderItem={renderItemIngredients}
                    keyExtractor={item => item.id}
                    style={styles.ingredientList}
                    ItemSeparatorComponent={renderSeparator}
                />
            </View>
            <View>
                <Text style={styles.steps}>Etapes :</Text>
                <FlatList
                    data={steps}
                    renderItem={renderItemSteps}
                    keyExtractor={item => item.id}
                    style={styles.ingredientList}
                    // ItemSeparatorComponent={renderSeparator}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '90%',
        flex: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold'
    },
    ingredient: {
        fontSize: 17,
        paddingBottom: 5,
        paddingTop: 5,
        fontWeight: 'bold'
    },
    ingredientList: {
        borderRadius: 10,
        backgroundColor: '#EEF1EF',
        padding: 10
    },
    steps: {
        fontSize: 17,
        paddingBottom: 5,
        paddingTop: 5,
        fontWeight: 'bold'
    }
});

export default Instruction;

