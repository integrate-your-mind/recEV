import { connect } from 'react-redux';
import { IState } from '../../redux/rootReducer';
import CharityList from './charity-list.component';
import { getCharityRequestStart } from '../../redux/charity/sagas';

const mapStateToProps = (state: IState) => ({
  charities: state.charities,
});
//eslint-disable-next-line
//@ts-ignore
const mapDispatchToProps = (dispatch) => ({
  getCharityRequestStart: () => dispatch(getCharityRequestStart()),
});

export const CharityListContainer = connect(mapStateToProps, mapDispatchToProps)(CharityList);
