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
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",
        width: "100%"
      },
      btn: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.medium,
        paddingVertical: 10,
        paddingHorizontal: 25,
        marginTop: 10
      },
      btnText: {
        fontSize: SIZES.medium,
        color: COLORS.white,
        fontFamily: FONT.bold,
    },
    normalText: {
        fontSize: SIZES.large,
        color: COLORS.primary,
        fontFamily: FONT.bold,
      }
});

export default styles;
