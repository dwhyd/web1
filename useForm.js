import { useState } from "react";

const useForm = (validate) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confrPassword: "",
  });

  const [errors, setError] = useState({
    Username: "",
    Email: "",
    Password: "",
    confrPassword: "",
  });

  const handleChange = (field, e) => {
    // const { name, value } = e.target;
    let value = e.target.value;
    setValues({
      ...values,
      [field]: value,
    });
    // Validasi karakter
    if (value.length < 6) {
      // errors.username="kurang 5 karakter"
      setError({ ...errors, [field]: `minimal 6 karakter` });
    } else {
      setError({ ...errors, [field]: `` });
    }

    // Validasi username
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validate(values));
    // alert(JSON.stringify(values))
  };

  return { values, errors, handleChange, handleSubmit };
};
export default useForm;
