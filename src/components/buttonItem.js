import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import "../components/index.css"

export default function ButtonItem(props) {

  const [inpValue, setInpValue] = useState('')

  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Digite um item"
        variant="outlined"
        value={inpValue}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            props.add(inpValue)
            setInpValue('')
          }
        }}
        onChange={(e) => {
          setInpValue(e.target.value)
        }}
      />

      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={() => {
          props.add(inpValue)
          setInpValue('')
        }}
      >Add</Button>
    </div>
  )
}
