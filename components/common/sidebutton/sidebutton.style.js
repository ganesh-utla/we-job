import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
      listBtn: {
        width: "100%",
        height: 55,
        borderWidth: 1,
        // borderColor: "#F37453",
        borderColor: COLORS.gray2,
        backgroundColor: COLORS.lightWhite,
        borderRadius: SIZES.medium,
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 15,
      },
      likeBtnImage: {
        flex: 0.8,
        width: 20,
        height: 20,
        tintColor: "#F37453",
      },
      btnText: {
        flex: 1,
        fontSize: SIZES.medium,
        color: COLORS.secondary,
        fontFamily: FONT.bold,
      }
});

export default styles;
