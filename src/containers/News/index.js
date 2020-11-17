import React, {useEffect} from 'react';
import {connect} from 'react-redux';

// Component
import {SafeAreaView, FlatList, Linking, BackHandler} from 'react-native';
import Header from 'components/Header/MainHeader';
import CardButton from 'components/Touchable/CardButton';
import EmptyList from 'components/View/EmptyList';
import Loading from 'components/View/Loading';

// Utils
import {APP_NAME} from 'utils/Constants';

// Styles
import styles from './style';

// Action & Selector
import SampleActions, {SampleSelectors} from 'shared-state/reducers/sample';

const News = ({
  // Action
  doGetSampleNews,
  doAddBookmark,

  // Selector
  sampleNews,
  loading,

  // Navigation
  navigation,
}) => {
  // Get the Sample News via API call
  useEffect(() => {
    doGetSampleNews({
      country: 'id',
    });
  }, []);

  useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        BackHandler.exitApp();
      }),
    [navigation],
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header title={APP_NAME} />
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={sampleNews}
          keyExtractor={(item, index) => `list-${index}`}
          contentContainerStyle={styles.contentContainer}
          renderItem={({item}) => (
            <CardButton
              data={item}
              iconComponent={{
                name: 'bookmark',
              }}
              onPress={() => Linking.openURL(item.url)}
              onPressIcon={() => doAddBookmark(item)}
            />
          )}
          ListEmptyComponent={
            <EmptyList message={'News is empty\nPlease refresh again'} />
          }
          refreshing={loading}
          onRefresh={() =>
            doGetSampleNews({
              country: 'id',
            })
          }
        />
      )}
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  sampleNews: SampleSelectors.getSampleNews(state),
  loading: SampleSelectors.getLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  doGetSampleNews: (e) => dispatch(SampleActions.getSampleNewsRequest(e)),
  doAddBookmark: (e) => dispatch(SampleActions.addBookmark(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(News);
