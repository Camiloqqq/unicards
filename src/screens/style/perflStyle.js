import { StyleSheet } from "react-native";

export const perfilStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
  contactButton: {
    backgroundColor: "#1b2a7f",
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
  },
  contactButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
  tabBar: {
    backgroundColor: '#111',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 14,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  tab: {
    color: '#fff',
    fontSize: 14,
    opacity: 0.6,
  },
  tabActive: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
