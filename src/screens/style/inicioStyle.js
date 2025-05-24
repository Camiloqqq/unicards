import { StyleSheet } from 'react-native';

export const inicioStyle = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 2,
    color: '#fff',
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 40,
    color: '#fff',
  },
  button: {
    backgroundColor: '#1b2a7f',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
