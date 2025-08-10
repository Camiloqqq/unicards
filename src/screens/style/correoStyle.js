import { StyleSheet } from "react-native";

export const correoStyle = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  container: {
    backgroundColor: '#fff',
    padding: 30,
    paddingTop: 60,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  closeBtn: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 30,
  },
 
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    paddingVertical: 10,
    marginBottom: 20,
  },
  input: {
    marginLeft: 10,
    flex: 1,
    fontSize: 16,
  },
  passwordHint: {
    color: '#999',
    fontSize: 12,
    marginBottom: 20,
  },
  signupButton: {
    backgroundColor: '#1b2a7f',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
  },
  signupText: {
    color: '#fff',
    fontWeight: '600',
  },
});