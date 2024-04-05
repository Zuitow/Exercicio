import { View} from 'react-native';

//Componentes Pages
import Home from './src/components/pages/Home';

//Styles
import { estilos } from './src/styles/StylesHome';

export default function App() {
  return (
    <View style={estilos.container}>
    <Home/>
    </View>
  );
}

