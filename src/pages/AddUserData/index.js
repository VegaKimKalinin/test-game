import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { setUserAction } from './../../redux/actionTypes';
import { useSelector } from 'react-redux';

import Fields from './../../components/form/Fields';
import './AddUserData.scss';

const AddUserData = (props) => {
  const { user } = useSelector((state) => state);
  console.log(user);
  const { handleSubmit } = props;

  return (
    <main>
      <div className='user-form-wrap'>
        <form onSubmit={handleSubmit} className='user-form'>
          {Object.keys(Fields).map((field) => {
            return <Field {...Fields[field]} key={field} />;
          })}
          <button type='submit' className='btn-submit'>
            Играть
          </button>
        </form>
      </div>
    </main>
  );
};

const onSubmit = (values, dispatch, props) => {
  const { history, addUserData } = props;
  const userData = {
    ...values,
    evasion: 10 + +values.agility,
    energy: values.agility * 1 + values.intelligence * 1,
  };
  localStorage.setItem('userData', JSON.stringify(userData));
  addUserData(userData);
  history.push('/game');
};

const mapStateToProps = (state) => ({
  initialValues: state.user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addUserData: (values) => dispatch(setUserAction(values)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(reduxForm({ form: 'userData', onSubmit })(AddUserData));
