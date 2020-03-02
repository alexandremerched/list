import React, { useState } from "react"
// import { Link } from "gatsby"

import "../components/index.css"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import ButtonItem from "../components/buttonItem"
import List from "../components/list"

const IndexPage = () => {

  const [list, setList] = useState([])

  const addList = (item) => {
    if (item !== '') {
      let arrayItems = [...list]
      arrayItems.push(item)
      setList(arrayItems)
    } else {
      alert("Texto em branco!")
    }
  }

  const rmList = (index) => {
    let arrayItems = [...list]
    arrayItems.splice(index, 1)
    setList(arrayItems)
  }

  const removeAll = () => {
    setList([])
  }

  return (
    <Layout>
      <SEO title="Home" />
      <div className="container">
        <div style={{
          flex: 1
        }}></div>

        <div className="centerContainer">
          <div>
            <ButtonItem
              add={(item) => addList(item)}
            />
          </div>
          <div
            className="removeAll"
            onClick={() => removeAll()}
          >Remover Tudo</div>
          <div className="divScroll">
            <List
              list={list}
              remove={(index) => rmList(index)}
            />
          </div>
        </div>

        <div style={{
          flex: 1
        }}></div>
      </div>
    </Layout>
  )
}

export default IndexPage

