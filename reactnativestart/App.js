// Importações necessárias
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';

// Componente de tela para a página
const ScreenComponent = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Conteúdo da Página</Text>
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
      <Text>Drawer Content</Text>
    </View>
  );
};

// Componente principal de navegação
const HomeStack = () => {
  return (
    <Drawer.Navigator drawerContent={DrawerContent}>
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
        }}
      />
      {/* Adicione mais telas do Drawer conforme necessário */}
    </Drawer.Navigator>
  );
};

// App principal
export default function App() {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}