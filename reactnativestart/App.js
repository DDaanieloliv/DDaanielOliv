// Importações necessárias
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer , DefaultTheme} from '@react-navigation/native';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import FabButton from './src/components/FapButton';


// Seção de temas para ajustar a cor do ícone do menu
// const MyTheme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: '#2feb8a',  Defina a cor desejada aqui
//   },
// };



// Componente de tela para a página
const ScreenComponent = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <Text>Conteúdo da Página</Text> */}
      
    </View>
  );
};

// Drawer Navigator
const Drawer = createDrawerNavigator();

// Componente do Drawer Content
const DrawerContent = (props) => {
  return (
    // Personalize o conteúdo do seu drawer aqui
    <View>
      <Text>Lista de Hospitais</Text>
    </View>
  );
};

// Componente principal de navegação
const HomeStack = () => {
  return (
    <Drawer.Navigator drawerContent={DrawerContent}> 
    {/* theme={MyTheme} Aplicando o tema personalizado*/}
      <Drawer.Screen name="NearHosptal" component={ScreenComponent} 
        options={{
          
          headerStyle: {
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            backgroundColor: '#ffffff', // Adicione a cor de fundo para a sombra
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 1,
            elevation: 1,
          },
    
          headerTitleAlign: 'center',

          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
            color: '#2feb8a',
            textShadowColor: 'grey',
            textShadowOffset: { width: 2, height: 2 },
          },

          //  headerRight: () => (
          //   <TouchableOpacity
          //     style={{ marginRight: 20 }}
          //     onPress={() => {
          //         Adicione a ação que você deseja realizar ao pressionar o botão FAB
          //         Por exemplo, navegar para outra tela
          //       navigation.navigate('OutraTela');
          //     }}
          //   >
          //     <MaterialIcons name="add" size={30} color="#2feb8a" />
          //   </TouchableOpacity>
          // ),
        }}
      />
      {/* Adicione mais telas do Drawer conforme necessário */}
    </Drawer.Navigator>
  );
};

// App principal
export default function App() {
  return (
    <NavigationContainer> {/* theme={MyTheme} Aplicando o tema personalizado*/}
      <HomeStack /> 
      <FabButton 
      style={{ bottom: 80, right: 60}} />
    </NavigationContainer>
  );
}