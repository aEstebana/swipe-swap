import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';
import {
  AppForm,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from '../componets/forms';
import CategoryPickerItem from '../componets/CategoryPickerItem';
import Screen from '../componets/Screen';
import AppFormImagePicker from '../componets/forms/AppFormImagePicker';
import useLocation from '../hooks/useLocation';
import listingsApi from '../api/listings';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(1000).label('Price'),
  description: Yup.string().label('description'),
  category: Yup.object().required().nullable().label('category'),
  images: Yup.array().min(1, 'please select at least one image'),
});

const categories = [
  { label: 'one:6', value: 1, backgroundColor: 'red', icon: 'apps' },
  { label: 'one:12', value: 2, backgroundColor: 'pink', icon: 'email' },
  { label: 'mezco', value: 3, backgroundColor: 'blue', icon: 'lock' },

  {
    backgroundColor: '#26de81',
    icon: 'cards',
    label: 'Games',
    value: 4,
  },
  {
    backgroundColor: '#2bcbba',
    icon: 'shoe-heel',
    label: 'Clothing',
    value: 5,
  },
  {
    backgroundColor: '#45aaf2',
    icon: 'basketball',
    label: 'Sports',
    value: 6,
  },
  {
    backgroundColor: '#4b7bec',
    icon: 'headphones',
    label: 'Movies & Music',
    value: 7,
  },
  {
    backgroundColor: '#a55eea',
    icon: 'book-open-variant',
    label: 'Books',
    value: 8,
  },
  {
    backgroundColor: '#778ca3',
    icon: 'application',
    label: 'Other',
    value: 9,
  },
];
function ListingEditScreen() {
  const location = useLocation();

  const handleSumbit = async (listing) => {
    const result = await listingsApi.addListing({ ...listing, location });
    if (!result.ok) return alert('count not post listing');
    alert('succes');
  };
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
          images: [],
        }}
        onSubmit={handleSumbit}
        validationSchema={validationSchema}
      >
        <AppFormImagePicker name="images" />
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <Picker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: { padding: 20 },
});

export default ListingEditScreen;
