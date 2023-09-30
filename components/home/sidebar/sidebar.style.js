import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        justifyContent: 'center'
      },
      container: {
        padding: SIZES.small,
        backgroundColor: "#FFF",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      },
      backBtn: {
        backgroundColor: "#FE7654",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: SIZES.medium,
        borderRadius: SIZES.medium,
        paddingVertical: 10,
        paddingHorizontal: 25,
        marginTop: 10
      },
      backBtnText: {
        fontSize: SIZES.medium,
        color: COLORS.white,
        fontFamily: FONT.bold,
      },
});

export default styles;
