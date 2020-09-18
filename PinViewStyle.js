import { StyleSheet } from "react-native"

const style = StyleSheet.create({
  pinView: {
    alignItems: "center",
    flex: 1,
    justifyContent:'space-between',
  },
  buttonAreaContainer: {
    alignItems: "center",
    alignContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 12,
    width: "33%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonView: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#000",
    fontSize: 36,
    lineHeight: 49,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
  },
  inputView: {
    margin: 9,
    backgroundColor: "#fff",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    width: 61,
    height: 61,
    borderRadius: 6,
  },
  inputText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  resendText: {
    color: '#fff',
    lineHeight: 22,
    fontSize: 16,
    textAlign: 'center',
  }
})
export default style
