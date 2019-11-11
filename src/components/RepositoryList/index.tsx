import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Repository } from '../../store/ducks/repositories/types';
import { ApplicationState } from '../../store'
import * as RepositoriesActions from '../../store/ducks/repositories/actions';

import RepositoryItem from '../RepositoryItem';

// mapeia as informacoes que vem no mapStateToProps
interface StateProps {
  repositories: Repository[];
}

// mapeia as funcoes que vem no mapDispatchToProps
interface DispatchProps {
  loadRequest(): void
}

// qualquer outra propriedade que vem, como as que vem de um component pai
// interface OwnProps {

// }

// une todas a sinterfaces é um type chamado Props e repassa para o component
type Props = StateProps & DispatchProps

class RepositoryList extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }

  render() {
    const { repositories } = this.props;

    return (
      <ul>
        {repositories.map(repository => (
          <RepositoryItem key={repository.id} respository={repository} />
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state: ApplicationState ) => ({
  repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList)
