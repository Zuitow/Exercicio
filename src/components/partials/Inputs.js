import { TextInput } from "react-native";

export default function InputsComponent({styles, ChangeText}) {
    return(

     <TextInput style={styles} onChangeText={ChangeText} />

    )
}
