

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity
} from "react-native";

export default function LoginPage() {//use of pascal casing 
  
    return (
        <View style={styles.container}>
            <Image style={{height:'20%',width:'45%'}} source={require("./components/LoginImage.png")} /> 
        
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                   
                />
            </View>

            <TouchableOpacity style={{ alignItems: 'flex-end' }}>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        marginBottom: 40,
    },
    loginText: {
        color: 'white',
        fontWeight: 'bold'
    },
    inputView: {
        backgroundColor: "lightgrey",
        borderRadius: 5,
        width: "80%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
        width: '90%'

    },
    forgot_button: {
        height: 30,
        marginBottom: 30,
        justifyContent: 'flex-end'
    },
    loginBtn: {
        width: "80%",
        borderRadius: 5,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 0,
        backgroundColor: "#1f2e2e",
    },
});