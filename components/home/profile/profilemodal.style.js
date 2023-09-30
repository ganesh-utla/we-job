import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    padding: SIZES.small,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
},
textContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginTop: 10,
    backgroundColor: "#FE7654"
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
    textAlign: "left"
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
  },
  searchInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
});

export default styles;
