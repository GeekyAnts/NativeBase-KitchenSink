import { Platform } from "react-native";

export default {
  // Line Height
  btnLineHeight: 19,
  lineHeightH1: 32,
  lineHeightH2: 27,
  lineHeightH3: 22,
  iconLineHeight: Platform.OS === "ios" ? 37 : 30,
  lineHeight: Platform.OS === "ios" ? 20 : 24,

  // List
  listBorderColor: "#fff",
  listDividerBg: "#ddd",
  listItemHeight: 45,
  listItemPadding: 10,
  listNoteColor: "#808080",
  listNoteSize: 13
};
