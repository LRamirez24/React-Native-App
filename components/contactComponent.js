import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { Card } from 'react-native-elements';
import { DISHES } from '../shared/dishes';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';



class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
          dishes: DISHES,
          promotions: PROMOTIONS,
          leaders: LEADERS
        };
    }

    static navigationOptions = {
        title: 'Contact Us',
    };

    render() {
        
        return(
            <Card title='Contact Information'>
              <View>
                  <Text style={{marginBottom: 10}}>
                    121, Clear Water Bay Road
                    </Text>
                    <Text style={{marginBottom: 10}}>
                    Clear Water Bay, Kowloon
                    </Text>
                    <Text style={{marginBottom: 10}}>
                    HONG KONG
                    </Text>
                    <Text style={{marginBottom: 10}}>
                    Tel: +852 1234 5678
                    </Text>
                    <Text style={{marginBottom: 10}}>
                    Fax: +852 8765 4321
                    </Text>
                    <Text>
                    Email:confusion@food.net
                    </Text>
              </View>
            </Card>
        );
    }
}

export default Contact;