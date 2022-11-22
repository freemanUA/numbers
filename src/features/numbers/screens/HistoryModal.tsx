import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import CustomButton from '../../../shared/components/CustomButton';
import Modal from 'react-native-modal';

type Props = {
  isVisible: boolean;
  onClose: () => void;
  data: string[];
};

const HistoryModal: React.FC<Props> = ({isVisible, data, onClose}) => {
  const renderHistoryItem = (item: string, index: number) => (
    <View key={item + index}>
      <Text style={styles.historyText}>{item}</Text>
    </View>
  );

  return (
    <Modal
      isVisible={isVisible}
      style={{margin: 100}}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      backdropColor="black"
      backdropOpacity={0.7}>
      <View style={styles.modalContainer}>
        {/*Using ScrollView as history item is cheap to render, should be replaced by FlatList if a lot of items expected*/}
        <ScrollView showsVerticalScrollIndicator={false}>
          {data.map(renderHistoryItem)}
        </ScrollView>
        <CustomButton title="Close" onPress={onClose} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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

export default HistoryModal;
