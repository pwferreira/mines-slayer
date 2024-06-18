import { StyleSheet, Text, View, Alert} from 'react-native';

import MineField from './src/components/MineField';
import params from './src/params';
import { createMinedBoard, cloneBoard, hadExplosion, openField, showMines, wonGame } from './src/functions';
import { Component } from 'react';


export default class App extends Component {

  constructor(props){
    super(props);
    this.state = this.createState();
  }


  minesAmount = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return {
      board: createMinedBoard(rows, cols, this.minesAmount())
    }
  }

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board);
    openField(board, row, column);
    const lost = hadExplosion(board);
    const won = wonGame(board);
   if(lost){
      showMines(board);
      Alert.alert('Perdeeuuuu','Que pena');
   }
   if(won){
      Alert.alert('Ganhouuuu','Parabéns');
   }
   
   this.setState({ board, lost, won});
 }


 render(){
    return (
      <View style={styles.container}>
        <View style= {styles.board}>
           <MineField board={this.state.board} onOpenField={this.onOpenField}/>
        </View>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'

  }

});
