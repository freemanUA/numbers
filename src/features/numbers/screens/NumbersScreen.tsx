import React, {useCallback, useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IState} from '../../../store/reducerCombiner';
import {generateNumbers} from '../store/numbers.actions';
import CustomButton from '../../../shared/components/CustomButton';
import HistoryModal from './HistoryModal';

const {width} = Dimensions.get('window');
const BOX_SIZE = width / 4;

const NumbersScreen: React.FC = () => {
  const dispatch = useDispatch();
  const {data} = useSelector((state: IState) => state.numbers);

  const [history, setHistory] = useState<string[]>([]);
  const [modalVisible, setModalVisibility] = useState<boolean>(false);

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
    <View key={item + index} style={styles.box}>
      <Text style={styles.numberText}>{item}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>{data.map(renderItem)}</ScrollView>
      <View style={styles.buttonsContainer}>
        <CustomButton title="Generate" onPress={handleGenerate} />
        <CustomButton title="Show Log" onPress={openModal} />
      </View>
      <HistoryModal
        isVisible={modalVisible}
        onClose={closeModal}
        data={history}
      />
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
});

export default NumbersScreen;
