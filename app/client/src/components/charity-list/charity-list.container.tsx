import { connect } from 'react-redux';
import { IState } from '../../redux/rootReducer';
import { CharityList } from './charity-list.component';
import { ICharityState } from '../../redux/charity/types';

const mapStateToProps = (state: IState): { charities: ICharityState } => ({
  charities: state.charities,
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
