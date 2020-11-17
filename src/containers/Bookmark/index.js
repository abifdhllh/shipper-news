import React, {useEffect} from 'react';
import {connect} from 'react-redux';

// Component
import {SafeAreaView, FlatList, Linking, BackHandler} from 'react-native';
import Header from 'components/Header/MainHeader';
import CardButton from 'components/Touchable/CardButton';
import EmptyList from 'components/View/EmptyList';

// Utils
import {APP_NAME} from 'utils/Constants';

// Styles
import styles from './style';
import {Colors} from 'utils/Theme';

// Action & Selector
import SampleActions, {SampleSelectors} from 'shared-state/reducers/sample';

const Bookmark = ({
  // Action
  doDeleteBookmark,

  // Selector
  bookmarkList,

  // Navigation
  navigation,
}) => {
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
      <FlatList
        data={bookmarkList}
        keyExtractor={(item, index) => `list-${index}`}
        contentContainerStyle={styles.contentContainer}
        style={styles.fullFlex}
        renderItem={({item}) => (
          <CardButton
            data={item}
            iconComponent={{
              name: 'delete',
              color: Colors.red,
            }}
            onPress={() => Linking.openURL(item.url)}
            onPressIcon={() => doDeleteBookmark(item)}
          />
        )}
        ListEmptyComponent={<EmptyList message="Bookmark is empty" />}
      />
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  bookmarkList: SampleSelectors.getBookmark(state),
});

const mapDispatchToProps = (dispatch) => ({
  doDeleteBookmark: (e) => dispatch(SampleActions.deleteBookmark(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bookmark);
