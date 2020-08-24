import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,LayoutAnimation,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {SearchBar} from 'react-native-elements';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      JSONResult: '',
      open: false,
      products: [],
      productstwo: [],
      productsthree: [],
      productsfour: [],
      productsfive: [],
      productssix: [],
    };
  }
  componentDidMount() {
    this.fetch();
  }

  async fetch() {
    this.setState({spinner: true});
    const pokemonApiCall = await fetch(
      'https://api.jsonbin.io/b/5f2c36626f8e4e3faf2cb42e',
    );
    const pokemon = await pokemonApiCall.json();
    this.setState({
      products: pokemon.categories[0].category.subcategories[0].items,
      productstwo: pokemon.categories[1].category.subcategories[0].items,
      productsthree: pokemon.categories[2].category.subcategories[0].items,
      productsfour: pokemon.categories[3].category.subcategories[0].items,
      productsfive: pokemon.categories[4].category.subcategories[0].items,
      productssix: pokemon.categories[5].category.subcategories[0].items,
    });

    //text data in key value pair form
  }

  ItemSeparatorLine = () => {
    return <View />;
  };
  render() {
    return (
      <ScrollView contentContainerStyle={styles.scrollStyle}>
        <View style={styles.container}>
          <View>
            <Text
              style={{
                fontSize: 26,
                fontWeight: 'bold',
                marginLeft: 20,
                marginTop: 10,
              }}>
              X
            </Text>

            <Text
              style={{
                fontSize: 22,
                fontWeight: 'bold',
                marginTop: 20,
                marginLeft: 10,
              }}>
              Approved Foods List
            </Text>
            <SearchBar
              lightTheme
              round
              containerStyle={styles.searchcontainer}
              value={this.state.value}
              onChangeText={(text) => this.filterSearch(text)}
              placeholder="Try searching fat, sauces names..."
            />
            <TouchableOpacity
                onPress={() => this.setState({open: !this.state.open})}>
              <View style={[styles.card, {height: this.state.open ? 300 : 50}]}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={{
                      uri:
                        'https://www.pixelwebsoft.com/wp-content/uploads/2018/01/bk3.jpg',
                    }}
                    style={styles.imageStyle}
                  />
                  <View style={styles.cardView}>
                    <Text style={[{color: '#E38989'}, styles.cardText]}>
                      Lean Protein
                    </Text>
                    <Text style={styles.cardTexttwo}>(4 OZ Servings)</Text>
                    <Icon.Button
                      name={!this.state.open ? 'arrow-down' : 'arrow-up'}
                      color="black"
                      backgroundColor="rgba(255, 255,255, 0.5)"
                      style={{marginTop: 10, marginLeft: 15}}
                    />
                  </View>
                </View>

                {this.state.open ? (
                  <View style={{justifyContent: 'center'}}>
                    {this.state.products.map((item, key) => (
                      <Text key={key} style={styles.listText}>
                        {item}
                      </Text>
                    ))}
                  </View>
                ) : null}
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setState({opentwo: !this.state.opentwo})}>
              <View
                style={[styles.card, {height: this.state.opentwo ? 600 : 50}]}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={{
                      uri:
                        'https://www.pixelwebsoft.com/wp-content/uploads/2018/01/bk3.jpg',
                    }}
                    style={styles.imageStyle}
                  />
                  <View style={styles.cardView}>
                    <Text style={[{color: '#E38989'}, styles.cardText]}>
                      Sea food
                    </Text>
                    <Text style={styles.cardTexttwo}>(4 OZ Servings)</Text>
                    <Icon.Button
                      name={!this.state.opentwo ? 'arrow-down' : 'arrow-up'}
                      color="black"
                      backgroundColor="rgba(255, 255,255, 0.5)"
                      style={{marginTop: 10, marginLeft: 15}}
                    />
                  </View>
                </View>

                {this.state.opentwo ? (
                  <View style={{justifyContent: 'center'}}>
                    {this.state.productstwo.map((item, key) => (
                      <Text key={key} style={styles.listText}>
                        {item}
                      </Text>
                    ))}
                  </View>
                ) : null}
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setState({openthree: !this.state.openthree})}>
              <View
                style={[
                  styles.card,
                  {height: this.state.openthree ? 720 : 50},
                ]}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={{
                      uri:
                        'https://www.pixelwebsoft.com/wp-content/uploads/2018/01/bk3.jpg',
                    }}
                    style={styles.imageStyle}
                  />
                  <View style={styles.cardView}>
                    <Text style={[{color: '#E38989'}, styles.cardText]}>
                      Vegetables
                    </Text>
                    <Icon.Button
                      name={!this.state.openthree ? 'arrow-down' : 'arrow-up'}
                      color="black"
                      backgroundColor="rgba(255, 255,255, 0.5)"
                      style={{marginTop: 10, marginLeft: 15}}
                    />
                  </View>
                </View>

                {this.state.openthree ? (
                  <View style={{justifyContent: 'center'}}>
                    {this.state.productsthree.map((item, key) => (
                      <Text key={key} style={styles.listText}>
                        {item}
                      </Text>
                    ))}
                  </View>
                ) : null}
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setState({openfour: !this.state.openfour})}>
              <View
                style={[
                  styles.card,
                  {height: this.state.openfour ? 1200 : 50},
                ]}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={{
                      uri:
                        'https://www.pixelwebsoft.com/wp-content/uploads/2018/01/bk3.jpg',
                    }}
                    style={styles.imageStyle}
                  />
                  <View style={styles.cardView}>
                    <Text style={[{color: '#E38989'}, styles.cardText]}>
                      Fruits
                    </Text>
                    <Text style={styles.cardTexttwo}>(3 OZ Servings)</Text>
                    <Icon.Button
                      name={!this.state.openfour ? 'arrow-down' : 'arrow-up'}
                      color="black"
                      backgroundColor="rgba(255, 255,255, 0.5)"
                      style={{marginTop: 10, marginLeft: 15}}
                    />
                  </View>
                </View>

                {this.state.openfour ? (
                  <View style={{justifyContent: 'center'}}>
                    {this.state.productsfour.map((item, key) => (
                      <Text key={key} style={styles.listText}>
                        {item}
                      </Text>
                    ))}
                  </View>
                ) : null}
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setState({openfive: !this.state.openfive})}>
              <View
                style={[styles.card, {height: this.state.openfive ? 300 : 50}]}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={{
                      uri:
                        'https://www.pixelwebsoft.com/wp-content/uploads/2018/01/bk3.jpg',
                    }}
                    style={styles.imageStyle}
                  />
                  <View style={styles.cardView}>
                    <Text style={[{color: '#E38989'}, styles.cardText]}>
                      Alternate ingredients to fats
                    </Text>
                    <Icon.Button
                      name={!this.state.five ? 'arrow-down' : 'arrow-up'}
                      color="black"
                      backgroundColor="rgba(255, 255,255, 0.5)"
                      style={{marginTop: 10, marginLeft: 15}}
                    />
                  </View>
                </View>

                {this.state.openfive ? (
                  <View style={{justifyContent: 'center'}}>
                    {this.state.productsfive.map((item, key) => (
                      <Text key={key} style={styles.listText}>
                        {item}
                      </Text>
                    ))}
                  </View>
                ) : null}
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setState({opensix: !this.state.opensix})}>
              <View
                style={[styles.card, {height: this.state.opensix ? 650 : 50}]}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={{
                      uri:
                        'https://www.pixelwebsoft.com/wp-content/uploads/2018/01/bk3.jpg',
                    }}
                    style={styles.imageStyle}
                  />
                  <View style={styles.cardView}>
                    <Text style={[{color: '#E38989'}, styles.cardText]}>
                      Sauces and Seasonings
                    </Text>
                    <Icon.Button
                      name={!this.state.opensix ? 'arrow-down' : 'arrow-up'}
                      color="black"
                      backgroundColor="rgba(255, 255,255, 0.5)"
                      style={{marginTop: 10, marginLeft: 15}}
                    />
                  </View>
                </View>

                {this.state.opensix ? (
                  <View style={{justifyContent: 'center'}}>
                    {this.state.productssix.map((item, key) => (
                      <Text key={key} style={styles.listText}>
                        {item}
                      </Text>
                    ))}
                  </View>
                ) : null}
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom:200,

    backgroundColor: '#E1E1E1',
  },
  cardView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 11,

    margin: 5,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
  },
  cardTexttwo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
  },
  card: {
    textAlign: 'center',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
  },
  containerFlatlist: {
    borderWidth: 1,
    backgroundColor: '#ECECEC',
    margin: 10,

    borderRadius: 9,
  },
  listText: {
    borderBottomWidth: 0.7,
    borderBottomColor: 'grey',
    margin: 5,
  },
  searchcontainer: {
    backgroundColor: '#E1E1E1',
    borderWidth: 0, //no effect
    shadowColor: 'white', //no effect
  },
  imageStyle: {
    width: 30,
    height: 30,
    borderRadius: 5,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
  },
  scrollStyle:{  backgroundColor: '#E1E1E1',}
});

export default App;
