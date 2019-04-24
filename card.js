import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';

class Card extends Component {
    render() {
        console.log(this.props);
        return (
            <View>
                <Button 
                onPress={() => this.props.userSetName('Leonardo')}
                title='button dispatch'
                />
                <Button 
                onPress={() => this.props.userSetXamarin('Xamarin')}
                title='button dispatch xamarin'
                />

                <Text>{this.props.user.name}</Text>
            </View>
        );
    }
}

const mapStateProps = (state) => {
    return {
        user: state.user
    };
};

const mapDispatchProps = (dispatch) => {
    return {
        userSetName : function(data){
            return dispatch({ type: 'USER_SET', payload: data, xamarin: 'não' });
        },
        userSetXamarin : function(data){
            return dispatch({ type: 'USER_SET_XAMARIN', payload: data, xamarin: 'sim' });
        }
    }
}

export default connect(mapStateProps, mapDispatchProps)(Card);
