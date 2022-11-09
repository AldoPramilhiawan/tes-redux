import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import Button from "../../components/Button"
import TextArea from "../../components/TextArea";
import TextField from "../../components/TextField"
import { addUser } from "./userSlice"

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: '',
    umur: '',
    hoby: '',
    alamat: ''
  });

  const handleAddUser = () => {
    setValues({ name: '', umur: '', hoby: '', alamat: '' });
    dispatch(addUser({
      id: uuidv4(),
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
        inputProps={{ type: 'text', placeholder: 'Masukan Nama Anda' }}
      />
      <br />
      <TextField
        label="Umur"
        value={values.umur}
        onChange={(e) => setValues({ ...values, umur: e.target.value })}
        inputProps={{ type: 'umur', placeholder: 'Masukan Usia Anda' }}
      />
      <br />
      <TextField
        label="Hoby"
        value={values.hoby}
        onChange={(e) => setValues({ ...values, hoby: e.target.value })}
        inputProps={{ type: 'hoby', placeholder: 'Masukan Hoby Anda' }}
      />
      <br />
      <TextArea
        label="Alamat"
        value={values.alamat}
        onChange={(e) => setValues({ ...values, alamat: e.target.value })}
        inputProps={{ type: 'alamat', placeholder: 'Masukan Alamat Anda' }}
      />
      <br />
      <Button onClick={handleAddUser}>Submit</Button>
    </div>
  )
}

export default AddUser