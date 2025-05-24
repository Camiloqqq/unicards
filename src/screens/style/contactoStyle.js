import { StyleSheet } from "react-native";

export const contactoStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  info: {
    fontSize: 16,
    marginBottom: 10,
        color: '#0000ff',
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
  perfilButton: {
    backgroundColor: "#1b2a7f",
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
  },
  perfilButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
});

