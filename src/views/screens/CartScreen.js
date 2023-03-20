import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import COLORS from "../../const/color";
import Icon from "react-native-vector-icons/MaterialIcons";
import { FlatList } from "react-native-gesture-handler";
import { Image } from "react-native";
import products from "../../const/data";
import { PrimaryButton } from "../components/Button";

const CartScreen = ({navigation}) => {
  const CartCard = ({ item }) => {
    return (
      <View style={style.cartCard}>
        <Image source={item.img} style={{ height: 80, width: 80 }} />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.title}</Text>
          <Text style={{ fontSize: 13, color: COLORS.green }}>
            {item.ingredients}
          </Text>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            {item.price}CFA
          </Text>
        </View>
        <View style={{ marginRight: 20, alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>3</Text>
          <View style={style.actionBtn}>
            <Icon name="remove" size={25} color={COLORS.white} />
            <Icon name="add" size={25} color={COLORS.white} />
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack}/>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Votre Panier</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
        data={products}
        renderItem={({ item }) => <CartCard item={item} />}
        ListFooterComponentStyle={{paddingHorizontal:10,marginTop:20,}}
        ListFooterComponent={() => (
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 15,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Total produits
              </Text>
              <Text style={{fontSize:18,fontWeight:'bold'}}>10000CFA</Text>
            </View>
            <View style={{marginHorizontal:10}}>
              <PrimaryButton title={'passer à la caisse'}/>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: COLORS.green,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
});

export default CartScreen;
