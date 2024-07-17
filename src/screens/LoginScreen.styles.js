import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 16,
    resizeMode: 'contain',
  },
  subtitle: {
    fontSize: 18,
    color: '#888',
    marginBottom: 24,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 16,
  },
  link: {
    color: '#28a745',
  },
  registerText: {
    color: '#888',
    marginBottom: 8,
  },
  registerButton: {
    backgroundColor: '#28a745',
    paddingVertical: 5,
    paddingHorizontal: 30,
    borderRadius: 4,
    alignItems: 'center',
  },
  error: {
    color: 'red',
    marginBottom: 16,
  },
});
