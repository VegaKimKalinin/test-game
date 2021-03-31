import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import Fields from './../../components/form/Fields';
import './AddUserData.scss';

const AddUserData = (props) => {
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
  console.log(values);
};

const mapStateToProps = (state) => ({
  initialValues: state.user,
});

export default connect(mapStateToProps)(
  reduxForm({ form: 'userData', onSubmit })(AddUserData),
);
