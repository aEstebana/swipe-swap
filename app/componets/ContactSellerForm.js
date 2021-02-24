import React from 'react';
import { Alert, KeyBoard } from 'react-native';
import * as Notifications from 'expo-notifications';
import * as Yup from 'yup';

import { AppForm, AppFormField, SubmitButton } from './forms';
import messagesApi from '../api/messages';

function ContactSellerForm({ listing }) {
  const handleSubmit = async ({ message }, { resetForm }) => {
    KeyBoard.dismiss();

    const result = await messagesApi.send(message, listing.id);
    console.log(result);

    if (!result.ok) {
      console.log('Error', result);
      return Alert.alert('error', 'could not send the message to the server');
    }

    resetForm();

    Notifications.scheduleNotificationAsyn({
      title: 'Awesome!',
      body: ' your message was sent to the seller',
    });
  };

  return (
    <AppForm
      initialValues={{ message: '' }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <AppFormField
        maxLength={255}
        multiline
        name="message"
        numberOfLines={3}
        placeholder="Message..."
      />
      <SubmitButton title="Contact Seller" />
    </AppForm>
  );
}
const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(1).label('messages'),
});
export default ContactSellerForm;
