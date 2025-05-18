import { useFocusEffect, useRouter } from 'expo-router';
import { useCallback, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const options = ["Muscle Building", "Lose Weight", "Gain Flexibility"];

export default function WorkoutTypeScreen() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const router = useRouter();

  // selectedOption is set to null when the screen reopens
  useFocusEffect(
    useCallback(() => {
      setSelectedOption(null);
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What kind of training do you want?</Text>

      {options.map((option) => (
        <TouchableOpacity
          key={option}
          onPress={() => setSelectedOption(option)}
          style={[
            styles.option,
            selectedOption === option && styles.selectedOption
          ]}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}

      {selectedOption && (
        <Button
          title="Next"
          onPress={() =>
            router.push({
              pathname: '/user-info',
              params: { trainingType: selectedOption },
            })
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 30, textAlign: 'center' },
  option: {
    backgroundColor: '#4B9CD3',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginBottom: 15,
    width: '80%',
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: '#1A6DA8',
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
  },
});
