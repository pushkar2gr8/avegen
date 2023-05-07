import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  item: {
    padding: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    flexDirection: 'row',
    alignItems: 'center',
  },
  BPText: {
    color: 'black',
    textAlign: 'center',
  },
  seperator: {
    width: 25,
    backgroundColor: 'black',
    marginVertical: 3,
    height: 1,
  },
  itemTitleText: {
    color: 'black',
    marginLeft: 16,
    fontWeight: 'bold',
    fontSize: 16,
  },
  itemButtonContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  emptyItem: {
    paddingLeft: 20,
    height: 52,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  emptyItemText: {
    color: 'grey',
    fontSize: 14,
  },
  moodListContainer: {
    justifyContent: 'center',
  },
  mood: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
    borderColor: 'grey',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedMood: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
    borderColor: 'grey',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  moodIcon: {
    height: 40,
    width: 40,
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 6,
    paddingHorizontal: 5,
  },
  BPContainer: {
    flex: 1,
  },
});
