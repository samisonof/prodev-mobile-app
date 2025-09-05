import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  heroBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#f1f1f1",
    textAlign: "center",
    marginBottom: 30,
  },
  buttonGroup: {
    width: "100%",
    alignItems: "center",
    rowGap: 15,
  },
  primaryButton: {
    width: "90%",
    paddingVertical: 14,
    borderRadius: 30,
    backgroundColor: "#34967C",
    alignItems: "center",
  },
  primaryButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
  },
  secondaryButton: {
    width: "90%",
    paddingVertical: 14,
    borderRadius: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#34967C",
  },
  secondaryButtonText: {
    fontSize: 18,
    color: "#34967C",
    fontWeight: "600",
  },
});

export { styles };
