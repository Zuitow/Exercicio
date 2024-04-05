import { Pressable} from 'react-native';

export default function Pressavel({styles, txt, PressFunc}) {

return (
    <Pressable style={styles} onPress={PressFunc}>{txt}</Pressable>
)

}