import React from 'react'
import { Formik, Field, Form, FormikHelpers } from 'formik'
import { Coffee } from '../types'

type CreateProps = {
  coffee?: Coffee
  onSubmit: (values: Coffee, helpers: FormikHelpers<Coffee>) => void
}

function CoffeeForm({ coffee, onSubmit }: CreateProps) {
  const initialValues: Coffee = {
    name: coffee ? coffee.name : '',
    type: coffee ? coffee.type : '',
  }

  return (
    <Formik
      initialValues={initialValues}
      validate={() => {
        return {}
      }}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type='text' name='name' placeholder='Name' />

          <Field type='text' name='type' placeholder='Type' />

          <button type='submit' disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default CoffeeForm
