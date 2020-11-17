import React, { Component,Fragment } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  CheckBox,
  ScrollView,
  SafeAreaView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import axios from "axios";

import logo from "../../images/logo1.png";
import { URI_AUTH_REGISTER } from "../../common/constants"
import { snackbarLong } from '../../common/utils';
// form validation
import { Formik } from 'formik';

import * as Yup from 'yup'


const validationSchema = Yup.object().shape({
  first_name: Yup.string()
    .label('Firt name')
    .required()
    .min(2, 'Must have at least 2 characters'),
    
    last_name: Yup.string()
    .label('Last Name')
    .required()
    .min(2, 'Must have at least 2 characters'),
    age: Yup.string()
    .label('Age')
    .required()
    .min(1, 'Must have at least 1 number'),
    mobile_no: Yup.string().matches(/^[6-9]\d{9}$/, 
      {message: "Please enter valid number.", excludeEmptyString: false}),
    email: Yup.string()
    .label('Email')
    .email('Enter a valid email')
    .required('Please enter a registered email'),
    password: Yup.string()
    .label('Password')
    .required()
    .min(4, 'Password must have at least 4 characters '),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Confirm Password must matched Password')
    .required('Confirm Password is required')

})

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      check_error: "",
     
    };
  }
  checkBoxTest() {
    this.setState({
      check: !this.state.check,
    });
  }

  login = () => {
    this.props.navigation.navigate("Login");
  };

  handleSubmit = (values )=> {
    if (values.email.length > 0 && values.password.length > 0) {
      let obj={
        first_name:values.first_name,
        last_name:values.last_name,
        age:values.age,
        mobile_no:values.mobile_no,
        email:values.email,
        password:values.password
      }
     this.validate(obj);
    }
  }
  validate = (obj) => {
    console.log("terms and condition:::" + this.state.checked);
    console.log(obj);
    
    if (this.state.checked === false) {
      this.setState({ check_error: "Please Accept Terms & Conditions." });
    }
    if (this.state.checked === true
    ) {
      axios
        .post(URI_AUTH_REGISTER, {
          first_name: obj.first_name,
          last_name: obj.last_name,
          age: obj.age,
          mobile_no: obj.mobile_no,
          email: obj.email,
          password: obj.password,
        })
        .then((response) => {
          snackbarLong(response.data.message);
          if (response.data.success)
            this.props.navigation.navigate("Login");
        })
        .catch(function(error) {
          snackbarLong("Registration Failed, Please try again.");
          console.log(error);
        });
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.contain}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <StatusBar backgroundColor="#4448AA" barStyle="light-content" />
            <Image style={styles.Logo} source={logo} />
            <Text style={styles.logoText}>Sign Up </Text>
            <Text style={styles.head}>
              Please signup to listen unforgettable stories
            </Text>
            <Formik
                initialValues={{ first_name: '',last_name:'',email:'', password: '',age:'',mobile_no:'',confirmPassword:'',checked:false }}
                onSubmit={values => {this.handleSubmit(values)}}
                 validationSchema={validationSchema}>
                {({ handleChange, values, handleSubmit,errors,isValid,touched,
               handleBlur, }) => (
               <Fragment>
                    <TextInput
                    style={styles.input}
                    underlineColorAndroid="#FFFFFF"
                    placeholder="First Name * "
                    returnKeyType="next"
                    value={values.first_name}
                    onChangeText={handleChange('first_name')}
                    onBlur={handleBlur('first_name')}
                  />
                  {touched.first_name && errors.first_name && <Text style={{ color: 'red' }}>{touched.first_name && errors.first_name}</Text>}
                  <TextInput
                    style={styles.input}
                    underlineColorAndroid="#FFFFFF"
                    placeholder="Last Name *"
                    returnKeyType="next"
                    value={values.last_name}
                    onChangeText={handleChange('last_name')}
                    onBlur={handleBlur('last_name')}
                  />
                  {touched.last_name && errors.last_name && <Text style={{ color: 'red' }}>{touched.last_name && errors.last_name}</Text>}
                  <TextInput
                    style={styles.input}
                    value={values.age}
                    onChangeText={handleChange('age')}
                    keyboardType={"numeric"}
                    underlineColorAndroid="#FFFFFF"
                    placeholder="Age *"
                    returnKeyType="next"
                    onBlur={handleBlur('age')}
                  />
                  {touched.age && errors.age && <Text style={{ color: 'red' }}>{touched.age && errors.age}</Text>}
                  <TextInput
                    style={styles.input}
                    placeholder="Mobile Number"
                    value={values.mobile_no}
                    keyboardType={"phone-pad"}
                    onChangeText={handleChange('mobile_no')}
                    onBlur={handleBlur('mobile_no')}
                  />
                  {touched.mobile_no && errors.mobile_no && <Text style={{ color: 'red' }}>{touched.mobile_no && errors.mobile_no}</Text>}

                  <TextInput
                    style={styles.input}
                    value={values.email}
                    onChangeText={handleChange('email')}
                    underlineColorAndroid="#FFFFFF"
                    placeholder="Email*"
                    returnKeyType="next"
                    onBlur={handleBlur('email')}
                  />
                  {touched.email && errors.email && <Text style={{ color: 'red' }}>{touched.email && errors.email}</Text>}
                  <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    value={values.password}
                    onChangeText={handleChange('password')}
                    underlineColorAndroid="#FFFFFF"
                    placeholder="Password *"
                    secureTextEntry={true}
                    returnKeyType="next"
                    onBlur={handleBlur('password')}
                  />
                  {touched.password && errors.password && <Text style={{ color: 'red' }}>{touched.password && errors.password}</Text>}
                  <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    value={values.confirmPassword}
                    onChangeText={handleChange('confirmPassword')}
                    underlineColorAndroid="#FFFFFF"
                    placeholder="Confirm Password *"
                    secureTextEntry={true}
                    returnKeyType="go"
                    onBlur={handleBlur('confirmPassword')}
                  />
                  {touched.confirmPassword && errors.confirmPassword && <Text style={{ color: 'red' }}>{touched.confirmPassword && errors.confirmPassword}</Text>}
                  <View style={{ flexDirection: "row" }}>
                  <CheckBox
                    style={styles.agreecheckbox}
                    value={this.state.checked}
                    onValueChange={(value) => {
                      this.setState({ checked: !this.state.checked });
                      if (value == true) {
                        this.setState({ check_error: "" });
                      }
                    }}
                  />
                  <Text style={styles.agreetest}>
                    {" "}
                    I agree to Terms & Conditions.
                  </Text>
                </View>
                {this.state.check_error != "" && (
                  <Text style={styles.errormessage}>{this.state.check_error}</Text>
                )}
                  <TouchableOpacity
                    style={styles.button}
                    onPress={handleSubmit}
                    disabled={!isValid}
                  >
                    <Text style={styles.buttonText}>Sign Up</Text>
                  </TouchableOpacity>
                </Fragment>
               )}
            </Formik>
            <View style={styles.accounttest}>
              <Text style={styles.accounttext}>Already an User ? </Text>
              <TouchableOpacity onPress={this.login}>
                <Text style={styles.signupbutton}> Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
  Logo: {
    //width:380,
    width: wp("84%"),
    //height:100,
    height: hp("11%"),
    //marginVertical:15,
    marginVertical: hp("1.8%"),
  },
  scrollView: {
    marginHorizontal: 0,
    marginVertical: 0,
    backgroundColor: "#4448AA",
  },
  agreetest: {
    color: "#FFFFFF",
    paddingHorizontal: wp("0.8%"),
    paddingVertical: 7,
  },
  container: {
    flex: 1,
    backgroundColor: "#4448AA",
    //opacity:1.0,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: hp("0.5%"),
    paddingHorizontal: wp("2%"),
  },
  logoText: {
    fontFamily: "OpenSans",
    fontStyle: "normal",
    fontSize: wp("5%"),
    color: "#FFFFFF",
    marginVertical: wp("1%"),
    marginHorizontal: hp("1.4%"),
  },
  head: {
    fontFamily: "OpenSans",
    fontStyle: "normal",
    fontSize: wp("3.3%"),
    //fontSize:15,
    color: "#FFFFFF",
    paddingTop: hp("0.5%"),
    paddingBottom: 5,
    marginHorizontal: hp("1.4%"),
  },
  input: {
    width: wp("92%"),
    height: hp("6%"),
    backgroundColor: "#FFFFFF",
    borderRadius: 7,
    paddingTop: 10,
    marginVertical: hp("1%"),
    marginHorizontal: wp("1.7%"),
    fontSize: wp("3.5%"),
    paddingHorizontal: 10,
  },
  buttonText: {
    fontFamily: "OpenSans",
    fontStyle: "normal",
    fontSize: wp("4%"),
    alignSelf: "center",
    color: "#FFFFFF",
    paddingVertical: hp("0.4%"),
  },
  button: {
    backgroundColor: "#60BA45",
    alignContent: "center",
    width: wp("92%"),
    height: hp("6%"),
    borderRadius: 5,
    //marginVertical:12,
    marginVertical: hp("1.5%"),
    paddingTop: 8,
    marginHorizontal: wp("1.7%"),
  },
  accounttest: {
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",
  },
  agreecheckbox: {
    color: "#FFFFFF",
  },
  accounttext: {
    color: "#FFFFFF",
  },
  signupbutton: {
    color: "#ffd700",
    //fontSize:13,
    fontSize: wp("4.5%"),
  },
  errormessage: {
    color: "red",
    justifyContent: "flex-start",
    marginHorizontal: wp("0.1%"),
    paddingHorizontal: 10,
  },
});
