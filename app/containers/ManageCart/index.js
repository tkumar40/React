/**
 *
 * ManageCart
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectManageCart from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { getUserInfoAction } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class ManageCart extends React.Component {

  constructor(props){
    super(props);

    const {getUserInfo} = props;
    getUserInfo('U10000');
  }

  render() {
    return (
      <div>
        <h1> Hello React Profgramm</h1>
      </div>
    );
  }
}

ManageCart.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  manageCart: makeSelectManageCart(),
});

function mapDispatchToProps(dispatch) {
  return {
    getUserInfo: userId => dispatch(getUserInfoAction(userId)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'manageCart', reducer });
const withSaga = injectSaga({ key: 'manageCart', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ManageCart);
