import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import Button from "../../components/Button"
import TextField from "../../components/TextField"
import { editUser } from "./userSlice"

const EditUser = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector(store => store.users);
  const navigate = useNavigate();
  const existingUser = users.filter(user => user.id === params.id);
  const { name, umur, hoby, alamat } = existingUser[0];
  const [values, setValues] = useState({
    name,
    umur,
    hoby,
    alamat
  });

  const handleEditUser = () => {
    setValues({ name: '', umur: '', hoby: '', alamat: '' });
    dispatch(editUser({
      id: params.id,
      name: values.name,
      umur: values.umur,
      hoby: values.hoby,
      alamat: values.alamat
    }));
    navigate('/');
  }

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Jhon Doe' }}
      />
      <br />
      <TextField
        label="Umur"
        value={values.umur}
        onChange={(e) => setValues({ ...values, umur: e.target.value })}
        inputProps={{ type: 'umur', placeholder: '25' }}
      />
      <br />
      <TextField
        label="Hoby"
        value={values.hoby}
        onChange={(e) => setValues({ ...values, hoby: e.target.value })}
        inputProps={{ type: 'hoby', placeholder: 'nonton anime' }}
      />
      <br />
      <TextField
        label="Alamat"
        value={values.alamat}
        onChange={(e) => setValues({ ...values, alamat: e.target.value })}
        inputProps={{ type: 'alamat', placeholder: 'pemalang' }}
      />
      <Button onClick={handleEditUser}>Edit</Button>
    </div>
  )
}

export default EditUser