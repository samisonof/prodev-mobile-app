import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  // Existing landing page styles (from your code)
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  background: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: "center",
  },
  companyLogo: {
    width: "100%",
    alignItems: "center",
    padding: 20,
    marginBottom: 50,
  },
  textGroup: {
    alignItems: "center",
  },
  textLarge: {
    color: "white",
    fontWeight: "800",
    fontSize: 40,
    textAlign: "center",
    marginBottom: 12,
  },
  textSmall: {
    color: "white",
    fontSize: 18,
    fontWeight: "200",
    textAlign: "center",
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 20,
    paddingHorizontal: 20,
  },
  button: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: "center",
    fontSize: 20,
    backgroundColor: "white",
    flex: 1,
  },
  transparentButton: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: "center",
    fontSize: 20,
    flex: 1,
  },
  footerText: {
    color: "white",
    textAlign: "center",
    paddingVertical: 20,
  },

  // 🆕 Home tab styles
  searchGroup: {
    backgroundColor: "#fff",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#EAEAEA",
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 30,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 16,
    color: "#333",
  },
  searchControl: {
    flex: 1,
    paddingVertical: 4,
  },
  searchButton: {
    backgroundColor: "#34967C",
    borderRadius: 30,
    padding: 10,
    marginLeft: 8,
  },

  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    gap: 20,
  },
  filterContainer: {
    alignItems: "center",
    marginRight: 16,
  },

  listingContainer: {
    flex: 1,
    padding: 16,
  },
  paginationContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  showMoreButton: {
    backgroundColor: "#34967C",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  showMoreButtonText: {
    color: "white",
    fontWeight: "600",
  },
});
