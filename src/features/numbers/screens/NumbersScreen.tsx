import React, {useCallback, useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import Modal from 'react-native-modal';
import {useDispatch, useSelector} from 'react-redux';
import {IState} from '../../../store/reducerCombiner';
import {generateNumbers} from '../store/numbers.actions';
import CustomButton from '../components/CustomButton';

const {width} = Dimensions.get('window');
const BOX_SIZE = width / 4;

const NumbersScreen: React.FC = () => {
  const dispatch = useDispatch();
  const {data} = useSelector((state: IState) => state.numbers);

  const [history, setHistory] = useState<string[] | []>([]);
  const [modalVisible, setModalVisibility] = useState(false);

  const handleGenerate = useCallback(
    () => dispatch(generateNumbers()),
    [dispatch],
  );

  useEffect(() => {
    handleGenerate();
  }, [handleGenerate]);

  useEffect(() => {
    if (data.length) {
      setHistory(prevState => [...prevState, data.join('')]);
    }
  }, [data]);

  const closeModal = () => setModalVisibility(false);
  const openModal = () => setModalVisibility(true);

  const renderItem = (item: string, index: number) => (
    <View key={item + index.toString()} style={styles.box}>
      <Text style={styles.numberText}>{item}</Text>
    </View>
  );

  const renderHistoryItem = (item: string, index: number) => (
    <View key={item + index.toString()}>
      <Text style={styles.historyText}>{item}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>{data.map(renderItem)}</ScrollView>
      <View style={styles.buttonsContainer}>
        <CustomButton title="Generate" onPress={handleGenerate} />
        <CustomButton title="Show Log" onPress={openModal} />
      </View>
      <Modal
        isVisible={modalVisible}
        style={{margin: 100}}
        onBackButtonPress={closeModal}
        onBackdropPress={closeModal}
        backdropColor="black"
        backdropOpacity={0.7}>
        <View style={styles.modalContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {history.map(renderHistoryItem)}
          </ScrollView>
          <CustomButton title="Close" onPress={closeModal} />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    width: BOX_SIZE,
    height: BOX_SIZE,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 5,
    margin: 10,
  },
  buttonsContainer: {
    width: '80%',
    marginTop: 'auto',
  },
  numberText: {
    fontSize: 30,
  },
  historyText: {
    flex: 1,
    marginVertical: 10,
    letterSpacing: 3,
    fontSize: 20,
  },
  modalContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
  },
});

export default NumbersScreen;
