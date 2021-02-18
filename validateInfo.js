export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Username dibutuhkan";
  } else if (!/^[a-z]+$/.test(values.username)) {
    errors.username = "Username harus huruf kecil";
  }

  if (!values.email) {
    errors.email = "Email dibutuhkan";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email tidak valid";
  }

  if (!values.password) {
    errors.password = "Password dibutuhkan";
  } else if (values.password.length < 6) {
    errors.password = "Password minimal 6 karakter atau lebih";
  }

  if (!values.confrPassword) {
    errors.confrPassword = "Password dibutuhkan";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Password tidak sesuai";
  }
  return errors;
}
