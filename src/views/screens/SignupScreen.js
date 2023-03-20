import React, { useState } from "react";
// import logo from "../../Images/logo";
import {
  errormessage,
  formgroup,
  head1,
  input,
  label,
  link,
  link2,
} from "../components/formcss";
import { Image } from "react-native";
import { TextInput } from "react-native";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { button1 } from "../components/CustomTextInput";

const Signup = ({ navigation }) => {
  const [fdata, setFdata] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errormsg, setErrormsg] = useState(null);

  const Sendtobackend = () => {
    //console.log(fdata);
    if (
      fdata.username == "" ||
      fdata.email == "" ||
      fdata.password == "" ||
      fdata.confirmPassword == ""
    ) {
      setErrormsg("All fields are required");
      return;
    } else {
      if (fdata.password != fdata.confirmPassword) {
        setErrormsg("password and confirm. Password must be same");
        return;
      } else {
        fetch("http://10.0.2.2:5000/api/users/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(fdata),
        })
          .then((res) => res.json())
          .then((data) => {
            //console.log(data);
            if (data.error) {
              setErrormsg(data.error);
            } else {
              alert("accoun created successfully");
              navigation.navigate("login");
            }
          });
      }
    }
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.patternbg}
        source={require("../../Images/logo.png")}
      />
      <View style={styles.container1}>
        <View style={styles.s1}></View>
        <ScrollView style={styles.s2}>
          <Text style={head1}>Creer un nouveaux compt</Text>
          <Text style={link2}>
            le nom d'utilisateur existe déjà?&nbsp;
            <Text style={link} onPress={() => navigation.navigate('login')}>
              Connectez-vous ici,,
            </Text>
          </Text>
          {errormsg ? <Text style={errormessage}>{errormsg}</Text> : null}
          <View style={formgroup}>
            <Text style={label}>Username</Text>
            <TextInput
              style={input}
              placeholder="Etrer votre username"
              onPress={() => setErrormsg(null)}
              onChangeText={(text) => setFdata({ ...fdata, username: text })}
            />
          </View>
          <View style={formgroup}>
            <Text style={label}>Email</Text>
            <TextInput
              style={input}
              placeholder="Etrer votre Email"
              onPress={() => setErrormsg(null)}
              onChangeText={(text) => setFdata({ ...fdata, email: text })}
            />
          </View>
          <View style={formgroup}>
            <Text style={label}>Password</Text>
            <TextInput
              style={input}
              placeholder="Etrer votre password"
              secureTextEntry={true}
              onPress={() => setErrormsg(null)}
              onChangeText={(text) => setFdata({ ...fdata, password: text })}
            />
          </View>
          <View style={formgroup}>
            <Text style={label}>Confirm password</Text>
            <TextInput
              style={input}
              placeholder="Confirmer votre password"
              secureTextEntry={true}
              onPress={() => setErrormsg(null)}
              onChangeText={(text) =>
                setFdata({ ...fdata, confirmPassword: text })
              }
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              Sendtobackend();
            }}
          >
            <Text style={button1}>Signup</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
  },
  patternbg: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
  container1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  s1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "10%",
  },
  small1: {
    color: "#fff",
    fontSize: 17,
  },
  h1: {
    fontSize: 30,
    color: "#fff",
  },
  s2: {
    display: "flex",
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  formgroup: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginVertical: 10,
  },
  label: {
    fontSize: 17,
    color: "#000",
    marginLeft: 10,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#FFB0CC",
    borderRadius: 20,
    padding: 10,
  },
  fp: {
    display: "flex",
    alignItems: "flex-end",
    marginHorizontal: 10,
    marginVertical: 5,
  },
});

export default Signup;
