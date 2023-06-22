import * as Yup from "yup";

export const stepperValidation = Yup.object().shape({
  //step 1
  name: Yup.string().when("step", {
    is: 1,
    then: (schema) => schema.required(),
  }),
  surname: Yup.string().when("step", {
    is: 1,
    then: (schema) => schema.required(),
  }),
  departmant: Yup.string().when("step", {
    is: 2,
    then: (schema) => schema.required(),
  }),
  about: Yup.string().when("step", {
    is: 2,
    then: (schema) => schema.required(),
  }),
});
