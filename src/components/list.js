import React from 'react'

export default function List(props) {
  return (
      <ul className="ul">
        {props.list.map((item, index) => {
          return (
            <li
              className="li"
              key={index}
            >
              <div className="containerList">
                <div className="list">{item}</div>
                <div
                  className="remove"
                  onClick={() => {
                    props.remove(index)
                  }}
                >X</div>
              </div>
            </li>
          )
        })}
      </ul>
  )
}
