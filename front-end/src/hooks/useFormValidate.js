import { useState } from "react";

let emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
  phonePattern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/i;

function useFormValidate(initialForm, validate) {
  let [form, setForm] = useState(initialForm);
  let [error, setError] = useState({});

  function InputChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    let type = e.target.type;
    if (type === "checkbox") {
      value = e.target.checked;
    }

    setForm({
      ...form,
      [name]: value,
    });
  }

  function check() {
    let errorOjb = {};
    let { rule, message } = validate;
    if (!message) {
      message = {};
    }

    for (let i in rule) {
      let r = rule[i];
      let m = message[i] || {};

      if (r.required && !form[i]?.trim()) {
        errorOjb[i] = m?.required || "This field cannot be empty";
        continue;
      }

      if (r.pattern) {
        let { pattern } = r;
        if (pattern === "email") pattern = emailPattern;
        if (pattern === "phone") pattern = phonePattern;
        if (!pattern.test(form[i])) {
          errorOjb[i] = m.pattern || "This field is not in the correct format";
        }
      }
      if (r.min) {
        if (form[i].length < r.min) {
          errorOjb[i] =
            m?.min || `This field cannot be less than ${r.min} characters`;
        }
      }
      if (r.max) {
        if (form[i].length > r.max) {
          errorOjb[i] =
            m?.max || `This field cannot be more than ${r.max} characters`;
        }
      }
    }
    setError(errorOjb);

    return errorOjb;
  }

  return {
    form,
    error,
    InputChange,
    check,
  };
}

export default useFormValidate;
