import { StyleSheet } from 'react-native';
import colors from '../../components/Theme/theme'; 

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: colors.textPrimary,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    color: colors.textPrimary,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
  },
  saveButton: {
    backgroundColor: colors.primary,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: colors.background,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
