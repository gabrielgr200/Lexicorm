import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home/Home";
import ProfileScreen from "../pages/Profile/Profile";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SignIn from "../pages/Login/Login";
import Cadastro from "../pages/Cadastro/Cadastro";
import Explorer from "../pages/Explorer/Explorer";
import MedicineDetailsScreen from "../pages/Medicine/Medicine";
import Balance from "../components/Balance/Balance";
import Membros from "../pages/Membros/Membros";
import Suporte from "../pages/Suporte/Suporte";
import Farmacias from "../pages/Farmácias/Farmácias";
import Configuration from "../pages/Configuration/Configure";
import Pesquisas from "../pages/Suporte/Pesquisas/Pesquisas";
import Remedios from "../pages/Suporte/Remedios/Remedios";
import Pessoais from "../pages/Suporte/Pessoais/Pessoais";
import Location from "../pages/Suporte/Location/Location";
import Lista from "../pages/Suporte/List/List";
import Sugestao from "../pages/Sugestao/Sugestao";
import Splash from "../pages/Cadastro/Splash/Splash";
import Welcome from "../pages/welcome/Welcome";
import Screen from "../pages/Farmácias/Screen/Screen";
import Sugesplash from "../pages/Sugestao/Sugesplash/Sugesplash";
import Config from "../pages/Configuration/Config/Animation";
import TripDetails from "../pages/TripDetails/TripdetailsScreen";

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          left: 0,
          right: 0,
          bottom: 0,
          elevation: 4,
          shadowRadius: 4,
          shadowOpacity: 4,
          position: "absolute",
          backgroundColor: "white",
          shadowOffset: {
            width: 0,
            height: -4,
          },
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarLabelStyle: { color: "black" },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="home" size={24} color="#4682B4" />
            ) : (
              <AntDesign name="home" size={24} color="#4682B4" />
            ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Explorer}
        options={{
          tabBarLabel: "Explorer",
          headerShown: false,
          tabBarLabelStyle: { color: "black" },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome name="search" size={24} color="#4682B4" />
            ) : (
              <Feather name="search" size={24} color="#4682B4" />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Usuário",
          headerShown: false,
          tabBarLabelStyle: { color: "black" },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="person" size={24} color="#4682B4" />
            ) : (
              <Ionicons name="person-outline" size={24} color="#4682B4" />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();
function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TripDetails"
          component={TripDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Balance"
          component={Balance}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MedicineDetailsScreen"
          component={MedicineDetailsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sobre nós"
          component={Membros}
          options={{ headerTitleAlign: 'center' }}
        />
        <Stack.Screen
          name="Suporte"
          component={Suporte}
          options={{ headerTitleAlign: 'center' }}
        />
        <Stack.Screen
          name="Lista"
          component={Lista}
          options={{ headerTitleAlign: 'center' }}
        />
        <Stack.Screen
          name="Pesquisas"
          component={Pesquisas}
          options={{ headerTitleAlign: 'center' }}
        />
        <Stack.Screen
          name="Remedios"
          component={Remedios}
          options={{ headerTitleAlign: 'center' }}
        />
        <Stack.Screen
          name="Pessoais"
          component={Pessoais}
          options={{ headerTitleAlign: 'center' }}
        />
        <Stack.Screen
          name="Location"
          component={Location}
          options={{ headerTitleAlign: 'center' }}
        />
        <Stack.Screen
          name="Farmácias"
          component={Farmacias}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Screen"
          component={Screen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sugestao"
          component={Sugestao}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sugesplash"
          component={Sugesplash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Configuração"
          component={Configuration}
          options={{ headerTitleAlign: 'center' }}
        />
        <Stack.Screen
          name="Config"
          component={Config}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;