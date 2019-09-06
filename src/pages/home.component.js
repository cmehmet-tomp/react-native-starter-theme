import React, {Component} from 'react';

import { StyleSheet, View, Text, CheckBox} from 'react-native';

// Import Theme Styles with Alias
import themeStyles from '@themeStyles'

class Home extends Component {
    state = {
            hello : 'Welcome to React-Native App'     
    }
    render() {
        return (
            <View style = {themeStyles.page_background} > 
                 <Text style ={themeStyles.h1}>{this.state.hello}</Text>  


                

                 <View style={{flex: 1, flexDirection: 'row'}}>
                   
                    <View style={{width: '10%', height: 50, verticalAlignment : 'middle'}}>
                        <CheckBox value/>
                    </View>
                    <View style={{width: '90%', height: 50, verticalAlignment : 'middle'}}>
                         <Text style= {themeStyles.p}>Alias for Modules included</Text>
                    </View>
                   
                </View>

            </View>
           
        );
    }
}


const styles = StyleSheet.create({

})



export default Home;