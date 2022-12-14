import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export function SkillCard({skill}) {
  return (
    <TouchableOpacity style={styles.buttonSkill}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1f1e24',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 5,
  },
  textSkill: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
