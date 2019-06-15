import React, {Component} from 'React';
import {Text , View , StyleSheet , ImageBackground , Linking , Image }  from 'react-native';

// This is my Education section

export default class Educations extends Component{
   fbButtonCall() {
        
      }
    render () {
     
        return (
  <ImageBackground
        source={require('../components/images/bg.png')} style={styles.bg}>
       
          <View style ={styles.container} >
         
          <Text style = {styles.experties}>
          
PHp expert | Reactjs |Front End Web Development          
          </Text>
         
          <View style = {styles.container1}>
          
          <Text style = {styles.aboutme}> My name is Syed Anwar Ahmed Shah & i am FullStack developer </Text> 
          <Text style = {styles.aboutme}>  video editor & virtual assistant  my aim is to become a </Text> 

          <Text style= {styles.aboutme}> system Architect & A teacher </Text>

          <Text style = {styles.aboutme}>Still student  </Text>
          
          
          
          <Text style = {styles.eduhead}>  ──────── EDUCATION ──────── </Text>
          <Text style = {styles.edusub}> Best Children Secondary School </Text>
          <Text style = {styles.edusub}> Ics From s.m Govt Sci college  </Text>
          <Text style = {styles.edusub}> BSSE From MAJU khi</Text>
         
         <Text style = {styles.eduhead}>  ────── SOFTWARE SKILLS ────── </Text>

         <Text style = {styles.edusub}> HTML 5 </Text>
         <Text style = {styles.edusub}> CSS</Text>
         <Text style = {styles.edusub}> JavaScript </Text>
         <Text style = {styles.edusub}> Jquery </Text>
         <Text style = {styles.edusub}> GIT </Text>
         <Text style = {styles.edusub}> C language </Text>
         <Text style = {styles.edusub}> C ++ </Text>
         <Text style = {styles.edusub}> Php </Text>
         <Text style = {styles.edusub}> mySQL </Text>
         <Text style = {styles.edusub}> Selenium </Text>
         <Text style = {styles.edusub}> MS Office </Text>
         
         <Text style = {styles.eduhead}>  ────── Technical Skills ────── </Text>
         <Text style = {styles.edusub}>IT Enterpreneurship From IBA khi  </Text>
         <Text style = {styles.edusub}>Android Development</Text>
         
         <Text style = {styles.eduhead}>  ──────── Contact  ──────── </Text>
        
         <Text onPress={() => Linking.openURL('https://github.com/anwaar12345)} > Github </Text> 
        </Text>
         
        
         
       
          </View>
             
          </View>
           </ImageBackground>
        );
    }
}

const styles = StyleSheet.create ({
    
    bg: {
      flex: 1 ,
      width : '100%',
      height : '100%',
    },
    container: {
      
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center',

    },
    
    container1: {
      
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,    
    },
    
    experties:{
      
      marginTop: 5,  
      fontSize: 15,
      fontStyle: 'italic',
      fontWeight:'bold',
      color: "#fff",  
    },
    aboutme:{
      
      fontSize: 15,
      justifyContent: 'center',
      alignItems: 'center', 
      fontStyle: 'italic',
       color: "#fff",  
    },
    
      eduhead : {
      marginTop: 15,
      fontSize: 20,
      fontWeight: 'bold',
      color: "#FFFF00",
    },
    
      edusub : {
       marginTop: 10,
       fontSize: 15,
       color: "#fff",
    },
    
    icons : {
      width : 50,
      height : 50,
    },
    
    links : {
       marginTop: 15,
      fontSize: 20,
      justifyContent: 'center',
      alignItems: 'center',
      color : '#fff',        
    },
      
 
});
  
