import { connect } from 'react-redux';
import { State } from '../../redux/rootReducer';
import { CharityList } from './charity-list.component';
import { CharityCollectionState } from '../../redux/charity/charityCollection.reducer';

const mapStateToProps = (state: State): { charityCollection: CharityCollectionState } => ({
  charityCollection: state.charityCollection,
});

{
  /* const mapDispatchToProps = dispatch => ({ */
}

{
  /* }); */
}

//TODO: Move this stuff to redux
{
  /* const { loading, error, data } = useQuery<ICharityData>(organizations); */
}

export const CharityListContainer = connect(mapStateToProps, null)(CharityList);
