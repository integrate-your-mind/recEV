import { connnect } from 'react-redux';
import { State } from '../../redux/rootReducer';
import { CharityList } from './charity-list.component';

const mapStateToProps = (state: State) => ({
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
