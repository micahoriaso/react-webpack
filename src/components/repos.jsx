import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadRepos } from "../actions/index";

export class Repos extends React.Component {
  componentDidMount() {
    this.props.loadRepos();
  }

  render() {
    const { repoList } = this.props;

    return (
      <div>
        <h3>My repos</h3>

        <table>
          <thead>
            <tr>
              <th>Repo name</th>
              <th>URL</th>
              <th>Created At</th>
              <th>Updated At</th>
            </tr>
          </thead>
          <tbody>
            {repoList.map(user => {
              return (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.html_url}</td>
                  <td>{user.created_at}</td>
                  <td>{user.updated_at}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

Repos.propTypes = {
  repoList: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool.isRequired
};

Repos.defaultProps = {
  repoList: []
};

const mapStateToProps = state => {
  const { repoList } = state;
  return {
    repoList
  };
};

export default connect(
  mapStateToProps,
  { loadRepos }
)(Repos);
