import { connect } from 'react-redux';
import CharityList from './charity-list.component';
import { getCharityRequestStart } from '../../redux/charity/sagas';

//eslint-disable-next-line
//@ts-ignore
const mapDispatchToProps = (dispatch) => ({
  getCharityRequestStart: () => dispatch(getCharityRequestStart()),
});

//@ts-ignore
export const CharityListContainer = connect(null, mapDispatchToProps)(CharityList);
